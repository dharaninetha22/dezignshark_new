import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';
import './Layout.css'; 
import ScrollToTopButton from './ScrollToTopButton';
import BodyBackground from '../Components/BodyBackground';
import Footer from '../Pages/Footer';
import { mobilebgshark2 ,sharkbgmaroon} from '../assets';

const Layout: React.FC = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname); 

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update selectedTab when the route changes
    setSelectedTab(location.pathname);
  }, [location.pathname]);

  return (
    <Box className="layout-container">
     
      <Box className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
    
        <Header    />
        <ScrollToTopButton />
      </Box>
     
      <Box className="content-container" 
    
      >
        <Box
          //  sx={{
          //   position: "relative",
          //   backgroundImage: `url(${sharkbgmaroon})`,
          //   backgroundAttachment: "fixed",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   minHeight: "100vh",
            
          //   // opacity: 0.8,
          //   "@media (max-width: 1040px)": {
          //       backgroundImage: `url(${mobilebgshark2})`,
          //       // backgroundAttachment: "scroll",
          //       backgroundSize: "contain", // Adjust to ensure the full image appears
          //       opacity: 0.8, // Decrease the opacity for mobile as well
          //   },
          //   }}
        >

        <Outlet />
        </Box>
      </Box>
      <Box>
        <Footer />
        </Box>
      
    </Box>
  );
};

export default Layout;
