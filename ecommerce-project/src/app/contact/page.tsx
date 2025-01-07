import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-black">Bandage</div>
          <div className="flex space-x-6">
            <a href="/home" className="text-lg font-bold text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="/about" className="text-lg font-bold text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="/product" className="text-lg font-bold text-gray-800 hover:text-blue-600">
              Product
            </a>
            <a href="/price" className="text-lg font-bold text-gray-800 hover:text-blue-600">
              Pricing
            </a>
          </div>
          <div className="flex space-x-4">
            <button className="text-blue-600 text-lg border border-blue-600 py-2 px-4">
              Login
            </button>
            <button className="bg-blue-600 text-white text-lg py-2 px-6 hover:bg-blue-700 transition">
              Get a Member
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="contact-section bg-white py-18">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="relative text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 text-gray-600">Contact Us</h3>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Get in touch today!
            </h2>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale just do not act that way.
            </p>
            <p className="text-gray-600 font-bold mb-6">
              <strong>Phone:</strong> +123 456 789
              <br />
              <strong>Fax:</strong> +123 456 789
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <Link href="https://facebook.com">
                <FaFacebookF className="text-gray-600 hover:text-blue-800 text-2xl" />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram className="text-gray-600 hover:text-blue-600 text-2xl" />
              </Link>
              <Link href="https://twitter.com">
                <FaTwitter className="text-gray-600 hover:text-blue-600 text-2xl" />
              </Link>
              <Link href="https://linkedin.com">
                <FaLinkedin className="text-gray-600 hover:text-blue-600 text-2xl" />
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="relative w-full md:w-[1440px] h-[500px] md:h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url('/contact-banner.png')`, // Ensure the image path is correct
            }}
          ></div>
        </div>
      </section>

      {/* Visit Our Office Section */}
      <div className="text-center py-16">
        <h3 className="text-lg font-semibold text-black mb-4">VISIT OUR OFFICE</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          We help small businesses <br /> with big ideas
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Phone Card */}
          <div
            className="bg-white text-black shadow-lg rounded-lg flex flex-col items-center justify-between p-6 text-center border border-[#23A6F0]"
            style={{
              width: "327px",
              height: "344px",
            }}
          >
            <FaPhoneAlt className="text-blue-500 text-5xl mb-4" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Phone</h4>
            <p className="text-black text-center mb-4">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <p className="text-black font-bold mb-4">Get Supported</p>
            <button className="font-bold px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
              Submit Request
            </button>
          </div>

          {/* Location Card */}
          <div
            className="bg-[#252B42] text-white shadow-lg rounded-lg flex flex-col items-center justify-between p-6 text-center"
            style={{
              width: "327px",
              height: "344px",
            }}
          >
            <FaMapMarkerAlt className="text-blue-500 text-5xl mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Location</h4>
            <p className="text-white text-center mb-4">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <p className="text-white font-bold mb-4">Get Supported</p>
            <button className="font-bold px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
              Submit Request
            </button>
          </div>

          {/* Email Card */}
          <div
            className="bg-white text-black shadow-lg rounded-lg flex flex-col items-center justify-between p-6 text-center border border-[#23A6F0]"
            style={{
              width: "327px",
              height: "344px",
            }}
          >
            <FaEnvelope className="text-blue-500 text-5xl mb-4" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Email</h4>
            <p className="text-black text-center mb-4">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <p className="text-black font-bold mb-4">Get Supported</p>
            <button className="font-bold px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
              Submit Request
            </button>
          </div>
        </div>
      </div>

      {/* Let’s Talk Section */}
      <div className="py-16 text-center bg-white">
        <div className="container mx-auto">
          {/* Arrow pointing down */}
          <div className="flex justify-center mb-4">
            <Image
              src="/Arrow.png"
              alt="Arrow pointing down to the Let’s Talk section"
              width={50}
              height={50}
            />
          </div>
          <p className="text-lg font-semibold text-gray-600">WE CAN'T WAIT TO MEET YOU</p>
          <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-8">Let’s Talk</h1>
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
            Try it free now
          </button>
        </div>
      </div>

    </div>
  );
};

export default ContactSection;
