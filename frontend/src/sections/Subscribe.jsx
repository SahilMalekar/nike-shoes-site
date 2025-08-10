import { useState } from "react";
import Button from "../components/Button";
import { subscribe } from "../api/subscribe";
import { toast } from "sonner";
const Subscribe = () => {
  const [email, setEmail] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({});

  const validate = () => {
    const newError = {};

    if (!email.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email.email)) {
      newError.email = "Invalid email address";
    }

    return newError;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    setError(validationError);

    if (Object.keys(validationError).length !== 0) return;

    setIsSubmitting(true);

    try {
      const res = await subscribe(email);
      toast.success("Subscribe Successfully!");
      console.log(res.data);
    } catch (err) {
      toast.error(err?.response?.data?.msg || "subscribe failed");
      console.log("Subscribe error", err.response?.data?.msg || "Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log(email);

  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl font-palanquin font-bold lg:max-w-md leading-[68px]">
        Sign Up For <span className="text-coral-red "> Updates </span> &
        Newsletter
      </h3>
      <form
        className="w-full lg:w-[40%] flex max-sm:flex-col items-center gap-5 sm:border border-slate-gray rounded-full p-2.5"
        onSubmit={handleOnSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="subscribe@nike.com"
          className="input"
          value={email.email}
          onChange={(e) => setEmail({ email: e.target.value })}
        />
        <div className="sm:hidden">
          {error.email && (
            <p className="text-sm text-red-500 mt-1">{error.email}</p>
          )}
        </div>
        <div className="max-sm:w-full">
          <Button
            label={isSubmitting ? "Subscribing..." : "Subscribe"}
            disabled={isSubmitting}
            fullWidth
            type
          />
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
