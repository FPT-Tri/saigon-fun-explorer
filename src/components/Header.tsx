
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Saigon Fun Explorer</h1>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Hoạt động
            </Link>
            <Link to="/districts" className="text-gray-700 hover:text-primary font-medium">
              Food
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hoạt động
                </Link>
              </li>
              <li>
                <Link 
                  to="/districts" 
                  className="block text-gray-700 hover:text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Food
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
