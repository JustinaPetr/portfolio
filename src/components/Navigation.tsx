import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Get in Touch' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1079fa62-a2f3-4bc9-90ba-f4f98d578e5a.png" 
              alt="Logo" 
              className="w-8 h-8"
            />
            <span className="text-sm font-medium text-muted-foreground">Doing stuff with computers</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;