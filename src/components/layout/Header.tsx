import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  ChevronDown,
} from 'lucide-react';
import { categories } from '@/data/sampleNews';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';
import x from '@/assets/X.png';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Toggle isScrolled state when user scrolls past 50px
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* ========== FULL HEADER (Visible only when NOT scrolled) ========== */}
      <div
        className={cn(
          'transition-all duration-300 overflow-hidden',
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-[500px] opacity-100'
        )}
      >
        {/* Top bar - Date and Social Icons */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white">
          <div className="container flex items-center justify-between py-2 text-sm">
            <span className="hidden sm:block">{currentDate}</span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/flipsidenews24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/flipsidenews24?igsh=ZDZpemllaG5uZGFj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/@flipsidenews24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/flip-side-news-24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="https://x.com/flipsidenews24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <img src={x} alt="X (Twitter)" className="h-4 w-4 transition-transform hover:scale-110" />
                </a>
              </div>
              <button
                onClick={toggleDarkMode}
                className="relative p-2 rounded-full bg-white/10 hover:bg-primary hover:scale-110 transition-all duration-300 group border border-white/20 hover:border-primary shadow-lg hover:shadow-primary/50"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4 text-white group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="h-4 w-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Large Centered Logo Section */}
        <div className="bg-neutral-200 dark:bg-gray-400 border-b border-border">
          <div className="container py-2">
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Large Logo - Centered */}
              <Link to="/" className="flex items-center">
                <img src={logo} alt="FlipSide24 Logo" className="h-20 w-auto" />
              </Link>

              {/* Search Bar - Centered */}
              {/* <div className="flex items-center gap-2 w-full max-w-xl">
                {isSearchOpen ? (
                  <div className="flex items-center gap-2 w-full animate-slide-in-right">
                    <Input
                      type="search"
                      placeholder="Search news..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-4 w-4" />
                    <span className="text-muted-foreground">
                      Search news...
                    </span>
                  </Button>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* ========== STICKY NAVIGATION BAR ========== */}
      <header
        className={cn(
          'sticky top-0 z-50 bg-background border-b border-border transition-all duration-300',
          isScrolled ? 'shadow-md' : ''
        )}
      >
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <div className="container">
            <div className="flex items-center justify-between">
              {/* Small Logo (visible only when scrolled) */}
              <div
                className={cn(
                  'transition-all duration-300 overflow-hidden',
                  isScrolled ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
                )}
              >
                <Link to="/" className="flex items-center py-3 pr-6">
                  <img
                    src={logo}
                    alt="FlipSide24 Logo"
                    className="h-10 w-auto"
                  />
                </Link>
              </div>

              {/* Navigation Menu */}
              <nav className="flex-1 flex justify-center">
                <ul className="flex items-center">
                  <li>
                    <Link
                      to="/"
                      className="px-4 py-3 text-sm font-medium hover:text-primary transition-colors inline-block"
                    >
                      Home
                    </Link>
                  </li>

                  {categories.map(category => (
                    <li
                      key={category.id}
                      onMouseEnter={() =>
                        category.subcategories && setOpenDropdown(category.id)
                      }
                      onMouseLeave={() =>
                        category.subcategories && setOpenDropdown(null)
                      }
                    >
                      {category.subcategories ? (
                        <DropdownMenu
                          open={openDropdown === category.id}
                          onOpenChange={open =>
                            setOpenDropdown(open ? category.id : null)
                          }
                        >
                          <DropdownMenuTrigger className="px-4 py-3 text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer outline-none">
                            {category.name}
                            <ChevronDown
                              className={cn(
                                'h-3 w-3 transition-transform duration-200',
                                openDropdown === category.id && 'rotate-180'
                              )}
                            />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="start"
                            className="w-[220px]"
                            onMouseEnter={() => setOpenDropdown(category.id)}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <DropdownMenuItem asChild>
                              <Link
                                to={`/category/${category.slug}`}
                                className="font-semibold cursor-pointer"
                              >
                                All {category.name}
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            {category.subcategories.map(sub => (
                              <DropdownMenuItem key={sub.slug} asChild>
                                <Link
                                  to={`/category/${category.slug}/${sub.slug}`}
                                  className="cursor-pointer"
                                >
                                  {sub.name}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          to={`/category/${category.slug}`}
                          className="px-4 py-3 text-sm font-medium hover:text-primary transition-colors inline-block"
                        >
                          {category.name}
                        </Link>
                      )}
                    </li>
                  ))}

                  <li>
                    <Link
                      to="/about"
                      className="px-4 py-3 text-sm font-medium hover:text-primary transition-colors inline-block"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      className="px-4 py-3 text-sm font-medium hover:text-primary transition-colors inline-block"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Search Icon (visible when scrolled) */}
              <div
                className={cn(
                  'transition-all duration-300',
                  isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="container py-3">
            <div className="flex items-center justify-between">
              {/* Mobile menu button */}
              <button
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {/* Mobile Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="FlipSide24 Logo"
                  className={cn(
                    'h-10 w-auto',
                    isScrolled ? 'opacity-100' : 'opacity-0 '
                  )}
                />
              </Link>

              {/* Mobile Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <nav className="border-t border-border bg-background animate-fade-in">
              <div className="container py-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  {categories.map(category => (
                    <li key={category.id}>
                      <Link
                        to={`/category/${category.slug}`}
                        className="block py-2 font-medium hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                      {category.subcategories && (
                        <ul className="ml-4 space-y-1">
                          {category.subcategories.map(sub => (
                            <li key={sub.slug}>
                              <Link
                                to={`/category/${category.slug}/${sub.slug}`}
                                className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/about"
                      className="block py-2 font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block py-2 font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* ========== SEARCH MODAL (Full Screen Overlay) ========== */}
      {isSearchOpen && !isScrolled && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 animate-fade-in">
          <div className="container max-w-3xl">
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search news..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="text-lg py-6"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
                className="h-12 w-12"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
