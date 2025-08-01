import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin capitalize mt-10 lg:max-w-lg">
          We Provide you
          <span className="text-coral-red "> Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6  info-text lg:max-w-lg">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className=" flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
