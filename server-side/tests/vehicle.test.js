import request from "supertest";
import app from "../server.js";

describe("Test the vehicle API endpoint", () => {
  //getAllVehicle
  test("It should respond with HTTP GET method", async () => {
    const response = await request(app).get("/v1/vehicle");
    expect(response.statusCode).toBe(200);
  });
  //getVehicleById (id:1)
  test("It should respond with HTTP GET method", async () => {
    const response = await request(app).get("/v1/vehicle/1");
    expect(response.statusCode).toBe(200);
  });
  //addNewVehicle
  test("It should respond with HTTP POST method", async () => {
    const response = await request(app).post("/v1/vehicle").send({
      name: "Regera",
      type: "Hypercar",
      cc: "5.0 Liter",
      brand: "Koenigsegg",
      cylinder: 8,
      price: "140B",
    });
    expect(response.statusCode).toBe(201);
  });
  //deleteVehicle(id:13)
  test("It should respond with HTTP DELETE method", async () => {
    const response = await request(app).delete("/v1/vehicle/16");
    expect(response.statusCode).toBe(200);
  });
  //updateVehicle(id:12)
  test("It should respond with HTTP PUT method", async () => {
    const response = await request(app).put("/v1/vehicle/12").send({
      name: "Chiron",
      type: "Hypercar",
      cc: "8.0 Liter",
      brand: "Bugatti",
      cylinder: 16,
      price: "150B",
    });
    expect(response.statusCode).toBe(200);
  });
});
