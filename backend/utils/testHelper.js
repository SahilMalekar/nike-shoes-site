// testHelpers.js
import User from "../models/User.js";

export async function promoteToAdmin(email) {
  return await User.updateOne({ email }, { $set: { role: "admin" } });
}
