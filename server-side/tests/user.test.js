import request from "supertest";
import app from "../server";

describe("Test the user API endpoint", () => {
  //getAllUser
  test("It should respond with HTTP GET method", async () => {
    const response = await request(app).get("/v1/user");
    expect(response.statusCode).toBe(200);
  });
  //getUserById
  test("It should respond with HTTP GET method", async () => {
    const response = await request(app).get("/v1/user/1");
    expect(response.statusCode).toBe(200);
  });
  //getUserByUsername
  test("It should respond with HTTP GET method", async () => {
    const response = await request(app).get("/v1/user/username/Septa_Adi");
    expect(response.statusCode).toBe(200);
  });
  //getUserByEmail
  test("It should respond with HTTP GET method", async () => {
    const response = await request(app).get("/v1/user/email/Nugroho5324@gmail.com");
    expect(response.statusCode).toBe(200);
  });
  //addNewUser
  test("It should respond with HTTP POST method", async () => {
    const response = await request(app).post("/v1/user").send({
      username: "Ally_Hulsey",
      email: "Hithisisally@gmail.com",
      password: "password123",
    });
    expect(response.statusCode).toBe(201);
  });
  //updateUser
  test("It should respond with HTTP PUT method", async () => {
    const response = await request(app).put("/v1/user/1").send({
      username: "Septa_Adi",
      email: "septaadinugroho5324@gmail",
      password: "sellaismyfav5324",
    });
    expect(response.statusCode).toBe(200);
  });
  //deleteUser
  test("It should respond with HTTP DELETE method", async () => {
    const response = await request(app).delete("/v1/user/4");
    expect(response.statusCode).toBe(200);
  });
});
