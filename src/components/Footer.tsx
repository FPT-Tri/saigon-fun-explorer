
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Saigon Fun Explorer</h3>
            <p className="text-gray-300 mt-1">Khám phá địa điểm vui chơi & ăn uống tại Sài Gòn</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">Made with ❤️ for you</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
