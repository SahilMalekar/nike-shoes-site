import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, navLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start max-lg:flex-col gap-20">
        <div className="flex flex-col items-start ">
          <div>
            <a href="/">
              <img
                src={footerLogo}
                alt="footer icon"
                width={150}
                height={46}
                className="m-0"
              />
            </a>
          </div>
          <p className="text-white-400 font-montserrat mt-6 text-base sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-6 items-center">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full mt-8 cursor-pointer hover:bg-slate-gray"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between items-start lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h3 className="text-white font-montserrat font-medium text-2xl leading-normal mb-6">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between  max-sm:flex-col max-sm:items-center mt-24 text-white-400 ">
        <div className="flex gap-3 font-montserrat cursor-pointer">
          <div className="flex justify-between items-center ">
            <img
              src={copyrightSign}
              alt="copyright sign"
              width={20}
              height={20}
              className="roundec-full m-0"
            />
          </div>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer ">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
