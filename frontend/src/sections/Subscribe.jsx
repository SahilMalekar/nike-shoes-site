import Button from "../components/Button";
const Subscribe = () => {
  return (
    // <section
    //   id="contact-us"
    //   className="max-container flex justify-between items-center max-lg:flex-col gap-12 "
    // >
    //   <h3 className="text-4xl font-palanquin leading-[68px] font-bold lg:max-w-md ">
    //     Sign Up for
    //     <span className="text-coral-red"> Updates </span>& Newsletter
    //   </h3>

    //   <div className="lg:w-[40%] w-full flex max-sm:flex-col gap-5 sm:border sm:border-slate-gray rounded-full p-2.5">
    //     <input type="text" placeholder="subscribe@nike.com" className="input" />
    //     <div className="flex max-sm:justify-end items-center max-sm:w-full">
    //       <Button label="Sign Up" fullWidth />
    //     </div>
    //   </div>
    // </section>

    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl font-palanquin font-bold lg:max-w-md leading-[68px]">
        Sign Up For <span className="text-coral-red "> Updates </span> &
        Newsletter
      </h3>
      <form className="w-full lg:w-[40%] flex max-sm:flex-col items-center gap-5 sm:border border-slate-gray rounded-full p-2.5">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
