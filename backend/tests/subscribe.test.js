import request from "supertest";
import app from "../server.js"; // your Express app
import "../tests/setup.js";
import jwt from "jsonwebtoken";

let userToken;

beforeEach(async () => {
  //create a user
  const admin = await request(app).post("/api/auth/signup").send({
    firstName: "Sahil",
    lastName: "Malekar",
    phoneNumber: "2345624567",
    email: "sahilmalekar23@example.com",
    password: "password123",
    role: "user",
  });

  //login as a user to get token

  const res = await request(app)
    .post("/api/auth/signin")
    .send({ email: "sahilmalekar23@example.com", password: "password123" });

  userToken = res.body.token;
});

describe("Subscribe API", () => {
  it("Should return 200 if user subscribed successfully", async () => {
    const res = await request(app)
      .post("/api/subscribe")
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        email: "sahilmalekar23@gmail.com",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("msg");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("email", "sahilmalekar23@gmail.com");
  });

  it("Should return 400 if email is missing", async () => {
    const res = await request(app)
      .post("/api/subscribe")
      .set("Authorization", `Bearer ${userToken}`)
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toMatch("Email is required");
  });

  it("Should return 409 if already subscribed ", async () => {
    //subscriber user
    await request(app)
      .post("/api/subscribe")
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        email: "sahilmalekar23@gmail.com",
      });

    //again subscriber with same email id
    const res = await request(app)
      .post("/api/subscribe")
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        email: "sahilmalekar23@gmail.com",
      });

    expect(res.statusCode).toBe(409);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toMatch("Already Subscribed");
  });
});
