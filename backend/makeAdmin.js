// makeAdmin.js
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import User from "./models/User.js"; // adjust path if needed

async function makeAdmin() {
  try {
    const email = process.argv[2]; // read from terminal argument

    if (!email) {
      console.log(
        "❌ Please provide an email. Example: node makeAdmin.js user@example.com"
      );
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await User.updateOne({ email }, { $set: { role: "admin" } });

    if (result.matchedCount === 0) {
      console.log(`❌ No user found with email: ${email}`);
    } else {
      console.log(`✅ User ${email} is now an admin`);
    }

    mongoose.connection.close();
  } catch (err) {
    console.error("Error making admin:", err);
    mongoose.connection.close();
  }
}

makeAdmin();
