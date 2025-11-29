import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BreakingNewsTicker from "./BreakingNewsTicker";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <BreakingNewsTicker />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
