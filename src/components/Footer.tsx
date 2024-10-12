const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#B38B37]">Musicine</h2>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy.
          </p>
          <div className="flex space-x-4">
            <a href="#">
              <i className="fab fa-facebook text-white"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube text-white"></i>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li className="mb-2 text-gray-400">Mobile Phone Repair</li>
            <li className="mb-2 text-gray-400">Laptop Repair</li>
            <li className="mb-2 text-gray-400">Tablet Repair</li>
            <li className="mb-2 text-gray-400">Camera Repair</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-xl font-bold mb-4">Pages</h3>
          <ul>
            <li className="mb-2 text-gray-400">About Us</li>
            <li className="mb-2 text-gray-400">Projects</li>
            <li className="mb-2 text-gray-400">Pricing</li>
            <li className="mb-2 text-gray-400">Team</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="text-gray-400">
            <li className="mb-2">
              <i className="fas fa-phone-alt mr-2"></i> (205) 555-0100
            </li>
            <li className="mb-2">
              <i className="far fa-clock mr-2"></i> Mon - Fri: 9 am - 11 pm
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope mr-2"></i> email@tokomoo.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-12">
        <p>Copyright © 2022 Tokomoo</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Help & Support
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
