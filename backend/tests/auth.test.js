/// <reference types="jest" />

import request from "supertest";
import app from "../server.js"; // your Express app
import "../tests/setup.js"; // ensures in-memory DB starts before tests

describe("Auth API", () => {
  it("should return 201 after signing a user", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      firstName: "Sahil",
      lastName: "Malekar",
      phoneNumber: "2345624567",
      email: "sahilmalekar23@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("email", "sahilmalekar23@example.com");
  });

  it("should return 400 if user already exists", async () => {
    // Create user first
    await request(app).post("/api/auth/signup").send({
      firstName: "Sahil",
      lastName: "Malekar",
      phoneNumber: "2345624567",
      email: "sahilmalekar23@example.com",
      password: "password123",
    });

    // Try again with same email
    const res = await request(app).post("/api/auth/signup").send({
      firstName: "Sahil",
      lastName: "Malekar",
      phoneNumber: "2345624567",
      email: "sahilmalekar23@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toMatch(/already exists/i);
  });

  it("should return 201 after user logged in", async () => {
    // Signup
    await request(app).post("/api/auth/signup").send({
      firstName: "Sahil",
      lastName: "Malekar",
      phoneNumber: "2345624567",
      email: "sahilmalekar23@gmail.com",
      password: "password123",
    });

    //Signin
    const res = await request(app).post("/api/auth/signin").send({
      email: "sahilmalekar23@gmail.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("email", "sahilmalekar23@gmail.com");
  });

  it("should return 400 if user enter wrong credentials", async () => {
    // Signup
    await request(app).post("/api/auth/signup").send({
      firstName: "Sahil",
      lastName: "Malekar",
      phoneNumber: "2345624567",
      email: "sahilmalekar23@gmail.com",
      password: "password123",
    });

    //Signin
    const res = await request(app).post("/api/auth/signin").send({
      email: "sahilmalekar24@gmail.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toMatch("Invalid email or password");
  });
});
