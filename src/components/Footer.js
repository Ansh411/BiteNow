import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 mt-20">
      
      {/* Top Footer - Navigation Links */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-wide mb-3">
            BiteNow
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delicious food & fresh groceries delivered at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
            <li><Link to="/grocery" className="hover:text-orange-400 transition">Grocery</Link></li>
            <li><Link to="/offers" className="hover:text-orange-400 transition">Offers</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/help" className="hover:text-orange-400 transition">Help Center</Link></li>
            <li><Link to="/faq" className="hover:text-orange-400 transition">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-orange-400 transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/_ansh411_" className="text-xl hover:text-orange-400 transition">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007831008889" className="text-xl hover:text-orange-400 transition">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://x.com/Ansh_411" className="text-xl hover:text-orange-400 transition">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/ansh-gupta-b734a7230/" className="text-xl hover:text-orange-400 transition">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-400 text-sm mt-6">
        <p>
          © {year} BiteNow — Made with ❤️ by <Link to="https://github.com/Ansh411"><span className="text-orange-400 font-semibold">Ansh Gupta</span></Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
