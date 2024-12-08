import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="logo" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        &copy; 2024 Imagify | Nilanjan. All rights reserved
      </p>

      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} alt="fb" width={35} />
        <img src={assets.twitter_icon} alt="x" width={35} />
        <img src={assets.instagram_icon} alt="insta" width={35} />
      </div>
    </footer>
  );
};

export default Footer;
