import request from "supertest";
import app from "../server.js"; // your Express app
import "../tests/setup.js"; // ensures in-memory DB starts before tests
import Product from "../models/Product.js";
import { promoteToAdmin } from "../utils/testHelper.js";

describe("Admin API", () => {
  test("Should return 200 after promoting user to admin", async () => {
    // 1. Create the admin user
    await request(app).post("/api/auth/signup").send({
      firstName: "Sahil",
      lastName: "Malekar",
      phoneNumber: "2345624567",
      email: "sahilmalekar23@gmail.com",
      password: "Sahil@2313",
    });

    // 2. Promote to admin in DB (test helper)
    await promoteToAdmin("sahilmalekar23@gmail.com");

    // 3. Sign in after promotion to get updated JWT
    const adminSignin = await request(app).post("/api/auth/signin").send({
      email: "sahilmalekar23@gmail.com",
      password: "Sahil@2313",
    });
    const token = adminSignin.body.token;

    // 4. Create a normal user
    await request(app).post("/api/auth/signup").send({
      firstName: "Sourabh",
      lastName: "Malekar",
      phoneNumber: "2345624567",
      email: "sourabh24@gmail.com",
      password: "Sahil@2313",
    });

    // 5. Promote the second user to admin
    const res = await request(app)
      .patch("/api/admin/promote")
      .set("Authorization", `Bearer ${token}`)
      .send({ email: "sourabh24@gmail.com" });

    // 6. Verify result
    expect(res.status).toBe(200);
    expect(res.body.msg).toBe("sourabh24@gmail.com promoted to admin");
  });
});
