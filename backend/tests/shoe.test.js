import request from "supertest";
import app from "../server.js"; // your Express app
import "../tests/setup.js"; // ensures in-memory DB starts before tests
import Product from "../models/Product.js";

let adminToken;

beforeEach(async () => {
  //create a admin user
  const admin = await request(app).post("/api/auth/signup").send({
    firstName: "Sahil",
    lastName: "Malekar",
    phoneNumber: "2345624567",
    email: "sahilmalekar23@example.com",
    password: "password123",
    role: "admin",
  });

  //login as a admin to get token

  const res = await request(app)
    .post("/api/auth/signin")
    .send({ email: "sahilmalekar23@example.com", password: "password123" });

  adminToken = res.body.token;
});

describe("Shoe API test", () => {
  test("should add a shoe (POST/shoes)", async () => {
    const shoeData = {
      name: "Nike Air Zoom Pegasus 40",
      brand: "Nike",
      price: 12999,
      size: [7, 8, 9],
      images: ["https://example.com/shoe1.jpg"],
      description: "Lightweight running shoe",
      stock: 50,
    };

    let res = await request(app)
      .post("/api/admin/shoes")
      .set("Authorization", `Bearer ${adminToken}`)
      .send(shoeData);

    expect(res.statusCode).toBe(201);
    expect(res.body.shoe.name).toBe("Nike Air Zoom Pegasus 40");
  });

  test("should update a shoe (PATCH / shoes/:id)", async () => {
    const shoe = await Product.create({
      name: "Nike Air Zoom Pegasus 40",
      brand: "Nike",
      price: 12999,
      size: [7, 8, 9],
      images: ["https://example.com/shoe1.jpg"],
      description: "Lightweight running shoe",
      stock: 50,
    });

    const res = await request(app)
      .patch(`/api/admin/shoes/${shoe._id}`)
      .set("Authorization", `Bearer ${adminToken}`)
      .send({ price: 800, description: "Sahil Malekar's shoe" });

    expect(res.statusCode).toBe(200);
    expect(res.body.updatedShoe.price).toBe(800);
    expect(res.body.updatedShoe.description).toBe("Sahil Malekar's shoe");
  });

  test("should delete a shoe (DELETE/shoes/:id", async () => {
    const shoe = await Product.create({
      name: "Nike Air Zoom Pegasus 40",
      brand: "Nike",
      price: 12999,
      size: [7, 8, 9],
      images: ["https://example.com/shoe1.jpg"],
      description: "Lightweight running shoe",
      stock: 50,
    });

    const res = await request(app)
      .delete(`/api/admin/shoes/${shoe._id}`)
      .set("Authorization", `Bearer ${adminToken}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Shoe deleted successfully");
  });
});
