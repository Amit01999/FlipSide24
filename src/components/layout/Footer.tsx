import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/sampleNews';
import logo from '@/assets/logo.png';
import x from '@/assets/X.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-headline font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/70">
                Get the latest news delivered to your inbox
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 w-full md:w-64"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h2 className="text-2xl font-headline font-bold mb-4">
              <span className="text-primary">Flip</span>Side
              <span className="text-primary">24</span>
            </h2>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              FlipSide24 is a leading independent news platform delivering
              accurate, unbiased reporting from Bangladesh and around the world.
              We are committed to journalistic integrity and serving the public
              interest.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/flipsidenews24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/flipsidenews24?igsh=ZDZpemllaG5uZGFj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@flipsidenews24/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded hover:bg-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/flip-side-news-24/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/flipsidenews24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded hover:bg-primary transition-colors"
              >
                <img
                  src={x}
                  alt="X (Twitter)"
                  className="h-4 w-4 transition-transform hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4 pb-2 border-b border-primary">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map(category => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4 pb-2 border-b border-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Advertise With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4 pb-2 border-b border-primary">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  277/5, Elephant Road, Katabon Dhal, New Market, Dhaka 1205
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+8801887397002"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  +880 1887 397002
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:flipside24editor@gmail.com"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  flipside24editor@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2025 FlipSide24. All rights reserved.</p>
            <p>
              Developed By{' '}
              <a
                className="text-xl font-headline font-bold mb-4 text-primary"
                href="https://bepro.it.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BeProIT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
