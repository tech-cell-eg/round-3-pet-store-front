import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Toast } from 'primereact/toast';
        

const Footer = () => {

  const toast = useRef<Toast>(null);

  const handleSubscribe = () => {
    if (toast.current) {
      toast.current.show({
        severity: "success",
        summary: "Subscribed",
        detail: "You've successfully subscribed!",
        life: 3000,
      });
    }
  };
  return (
    <footer className="bg-[#FFF6E9] text-[#00171F] px-4 md:px-10 py-10 pt-12 rounded-t-[30px]">
      <Toast ref={toast} />

      {/* Logo Section */}
      
      {/* Newsletter Section */}
      <div className="bg-[#003459] text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="text-lg md:text-xl font-semibold text-center md:text-left">
          Register Now So You Don't Miss <br className="md:hidden" /> Our Programs
        </div>
        
        <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-3 bg-white p-2 rounded-lg">
  <input
    type="email"
    placeholder="Enter your Email"
    className="p-3 rounded-lg text-black bg-white flex-grow min-w-[200px] outline-none border border-gray-300 placeholder-opacity-60 placeholder:text-black-100"
  />
  <button onClick={handleSubscribe} 
  className="whitespace-nowrap bg-[#002A48] text-white font-semibold border-none py-2 px-1  flex-grow min-w-[200px] rounded-lg hover:bg-[#001d33] transition">

    Subscribe Now
  </button>
</div>

      </div>


      {/* Links and Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-6 mb-6 gap-6 text-center">
        
        <div className="flex gap-6 flex-wrap justify-center text-sm font-medium">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/categoriespage" className="hover:text-blue-500 transition">Category</Link>
          <a href="#" className="hover:text-blue-500 transition">About</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
        </div>


        <div className="flex gap-4 text-xl justify-center">
          <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4 text-center">
        

        <p>© 2022 Monito. All rights reserved.</p>
        
        <div>
          <a href="/">
            <img src="images/logo.png" alt="Logo" className="h-10 mx-auto md:mx-0" />
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
