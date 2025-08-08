import Subscriber from "../models/Subscriber.js";
import { sendMail } from "../utils/sendMail.js";

export const subscribeUser = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ msg: "Email is required" });

  try {
    const existingUser = await Subscriber.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: "Already Subscribed" });
    }

    const newSub = await Subscriber.create({ email });

    //send Confirmation mail
    await sendMail({
      to: email,
      subject: "Welcome to Nike Newsletter!",
      text: `Hi there! You've successfully subscribed to Nike updates.`,
      html: `<h3>🎉 Welcome!</h3><p>You've successfully subscribed to <strong>Nike</strong> updates & newsletter.</p>`,
    });

    res.status(201).json({ msg: "Subscription successful", user: newSub });
  } catch (err) {
    console.log("Subscription Error ", err);
    res.status(500).json({ msg: "Server error" });
  }
};
