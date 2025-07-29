import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="max-container flex items-center max-lg:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="shoe promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="">
        <h2 className="text-4xl font-bold font-palanquin capitalize mt-10 lg:max-w-lg">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6  info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            bgColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
