import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter,FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" text-white py-2 text-sm">
      <div className="hidden sm:block">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        {/* Contact Information */}
        <div className="flex items-center gap-4">
          <span>📞 (225) 555-0118</span>
          <span>📧 michelle.rivera@example.com</span>
        </div>

        {/* Promotional Text */}
        <div className="text-center text-xs flex-1">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <span>Follow Us :</span>
          <Link href="#">
            <FaFacebookF className="text-white" />
          </Link>
          <Link href="#">
            <FaInstagram className="text-white" />
          </Link>
          <Link href="#">
            <FaTwitter className="text-white" />
          </Link>
          <Link href="#">
            <FaYoutube className="text-white" />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;