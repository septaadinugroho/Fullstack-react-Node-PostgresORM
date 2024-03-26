import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    cc: "",
    brand: "",
    cylinder: "",
    price: "",
  });

  const [dreamGarage, setDreamGarage] = useState([]);

  useEffect(() => {
    // Ambil data kendaraan saat komponen dimuat
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:9000/v1/vehicle");
        setDreamGarage(response.data);
        console.log("Data dreamGarage:", response.data); // Tambahkan log ini
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    }
    fetchData();
  }, []); // Efek hanya dijalankan sekali setelah komponen dimuat

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Jika name adalah 'cylinder', konversi value menjadi integer
    const updatedValue = name === 'cylinder' ? parseInt(value) : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };
  

  const addVehicle = async () => {
    try {
      const response = await axios.post("http://localhost:9000/v1/vehicle", formData);
      setDreamGarage([...dreamGarage, response.data]);
      setFormData({
        name: "",
        type: "",
        cc: "",
        brand: "",
        cylinder: "",
        price: "",
      });
    } catch (error) {
      console.error("Error adding vehicle:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/v1/vehicle", formData);
      console.log("Response from server:", response.data);

      // Clear the form fields
      setFormData({
        name: "",
        type: "",
        cc: "",
        brand: "",
        cylinder: "",
        price: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const vehicleTable = (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Capacity(CC)</th>
          <th>Brand</th>
          <th>Cylinder</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {dreamGarage.map((vehicle, index) => {
          // console.log("Vehicle data:", vehicle);
          return (
            <tr key={index}>
              <td>{vehicle.name}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.cc}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.cylinder}</td>
              <td>{vehicle.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a>Home</a>
          </li>
          <li className="navbar-item">
            <a>Nugroho's-Garage</a>
          </li>
          <li className="navbar-item">
            <a>Gallery</a>
          </li>
          <img src="/ngs-logo.png" alt="Logo" className="navbar-logo" />
        </ul>
      </nav>
      <div className="container">
        <video autoPlay muted loop id="background-video">
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="content">
          <div className="form-container">
            <div className="form-item">
              <label htmlFor="name">Vehicle name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-item">
              <label htmlFor="type">Type</label>
              <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} />
            </div>
            <div className="form-item">
              <label htmlFor="cc">Engine capacity (CC)</label>
              <input type="text" id="cc" name="cc" value={formData.cc} onChange={handleChange} />
            </div>
            <div className="form-item">
              <label htmlFor="brand">Brand</label>
              <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
            </div>
            <div className="form-item">
              <label htmlFor="silinder">Cylinder</label>
              <input type="text" id="cylinder" name="cylinder" value={formData.cylinder} onChange={handleChange} />
            </div>
            <div className="form-item">
              <label htmlFor="price">Price</label>
              <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
            </div>
            <button className="btn-submit" onClick={addVehicle}>
              Submit
            </button>
          </div>
          <div className="table-container">
            <h2>Your Dream Garage List</h2>
            {vehicleTable}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
