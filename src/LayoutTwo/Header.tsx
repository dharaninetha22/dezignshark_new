import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Container,
  Button,
  useMediaQuery,
  useTheme,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import gsap from "gsap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import DownloadIcon from "@mui/icons-material/Download";
import { TbMailDown } from "react-icons/tb";
import { PiPhoneListBold } from "react-icons/pi";
import { RxLapTimer } from "react-icons/rx";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Facebook, Twitter, YouTube, WhatsApp, Instagram, LinkedIn } from "@mui/icons-material";
import { dslogo, Home } from "../assets";
import CustomButton from "../Components/Inputs/CustomButton";
import PopUpHeader from "../Pages/PopUpHeader";
import PopupForm from "../Components/PopupForm";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState<boolean>(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  // const [drawerSubmenuOpen, setDrawerSubmenuOpen] = useState<string | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const digitalMarketingRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [drawerSubmenuOpen, setDrawerSubmenuOpen] = useState<string | null>(null);
  const [drawerSubSubmenuOpen, setDrawerSubSubmenuOpen] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const iconRefs = useRef<HTMLButtonElement[]>([]); // ✅ Corrected the useRef typing
  const [showPopup, setShowPopup] = useState(false);
  // const [showPopup, setShowPopup] = useState<boolean>(false); // Controls popup visibility
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!headerRef.current) return;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        // Scrolling Down - Hide Header with Rotate Down Effect
        setScrollDirection("down");
        gsap.to(headerRef.current, {
          transform: "perspective(600px) rotateX(-90deg)",
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else if (currentScroll < lastScrollY) {
        // Scrolling Up - Show Header with Rotate Up Effect
        setScrollDirection("up");
        gsap.to(headerRef.current, {
          transform: "perspective(600px) rotateX(0deg)",
          opacity: 1,
          boxShadow: "0 3px 18px rgba(2,21,78,0.09)",
          duration: 0.5,
          ease: "power2.out",
        });
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  // GSAP Dropdown Animation
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      gsap.fromTo(dropdownRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    }
    if (digitalMarketingOpen && digitalMarketingRef.current) {
      gsap.fromTo(digitalMarketingRef.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [dropdownOpen, digitalMarketingOpen]);

  // GSAP Drawer Animation
  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      gsap.fromTo(
        drawerRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else if (!mobileOpen && drawerRef.current) {
      gsap.to(drawerRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [mobileOpen]);

  const handleNavigate = (route: string, external?: boolean) => {
    if (external) {
      window.open(route, "_blank"); // Open external links in a new tab
    } else {
      navigate(route);
    }
    setDropdownOpen(null);
    setMobileOpen(false);
  };

  const handleDropdownToggle = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleDigitalMarketingHover = (open: boolean) => {
    setDigitalMarketingOpen(open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerSubmenuToggle = (label: string) => {
    setDrawerSubmenuOpen(drawerSubmenuOpen === label ? null : label);
  };

  const handleDrawerSubSubmenuToggle = (label: string) => {
    setDrawerSubSubmenuOpen(drawerSubSubmenuOpen === label ? null : label);
  };
  const handleMobileSubMenuToggle = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };



  const navItems = [
    { label: "Home", route: "/" },
    { label: "About", route: "/aboutus" },
    {
      label: "Services",
      route: "services",
      submenu: [
        { label: "Branding", route: "/services/branding" },
        { label: "Social Media Marketing", route: "/services/social-media-marketing" },
        { label: "Pay-Per-Click (PPC) Advertising", route: "/services/pay-per-click" },
        { label: "Web Development", route: "/services/web-development" },
        { label: "Search Engine Optimization (SEO)", route: "/services/search-engine-optimization" },
        { label: "Graphic Designing", route: "/services/graphic-designing" },
      ],
    },
    {
      label: "Gallery",
      route: "https://www.google.com/maps/place/Dezign+Shark+%7C+Branding+%26+Digital+Marketing+Agency+in+Hyderabad/@17.4111823,78.4016813,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipN9OMv3de-XAH8Rt02q0m94SMvLUKqY93opYdkS!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN9OMv3de-XAH8Rt02q0m94SMvLUKqY93opYdkS%3Dw86-h86-k-no!7i1600!8i1600!4m7!3m6!1s0x6b43765a51d595d:0x888192e0597f0421!8m2!3d17.4112721!4d78.4018151!10e5!16s%2Fg%2F11kq3q5yrp?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
      external: true, // Add a flag to indicate external links
    },
    { label: "Blogs", route: "/blog" },
    { label: "Careers", route: "/careers" },
    { label: "Contact Us", route: "/contactus" },
  ];

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      {navItems.map((item, index) => {
        // Define active routes (Home & Services)
        const isActive =
          location.pathname === item.route ||
          (item.label === "Services" && location.pathname.startsWith("/services")) ||
          (item.label === "Home" && location.pathname === "/");

        return (
          <Box
            key={index}
            sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
            onMouseEnter={() => handleDropdownToggle(item.label)}
            onMouseLeave={() => setDropdownOpen(null)}
            className="menu"
          >
            {/* Main Navigation Item */}
            <Typography
              className={`nav-link ${isActive ? "active" : ""}`}
              variant="body2"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                position: "relative",
                paddingLeft: isActive ? "10px" : "0", // Push text if active
                transition: "padding-left 0.2s ease-in-out",
                "&:hover": { paddingLeft: "10px" },
                cursor: "none !important",
              }}
              
              onClick={() => handleNavigate(item.route, item.external)} // Pass the external flag
            >
              {item.label} {item.submenu && <MdKeyboardArrowDown className="dropdown-arrow" />}
            </Typography>

            {/* Underline Effect */}
            <Box
              className="nav-underline"
              sx={{
                position: "absolute",
                bottom: "-4px",
                left: 0,
                width: isActive ? "100%" : "0%", // Active pages have full underline
                height: "2px",
                backgroundColor: "white",
                transition: "width 0.3s ease-in-out",
              }}
            />

            {/* Dropdown Menu */}
            {item.submenu && dropdownOpen === item.label && (
              <Box className="dropdown-menu" ref={dropdownRef}>
                {item.submenu.map((subItem, subIndex) => (
                  <Typography
                    key={subIndex}
                    className="dropdown-item"
                    variant="body2"
                    onClick={() => handleNavigate(subItem.route)}
                  >
                    {subItem.label}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>




  );

  const renderMobileMenu = () => (

<Box 

>

    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: "700px",
          // background: "linear-gradient(135deg, #1E1E1E 0%, #000000 100%)", // 3D gradient background
          color: "white",
          border: "none",
          overflowY: "auto", // Enables scrolling
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent black
          backdropFilter: "blur(10px)", // Blur effect
        },
      }}
    >
      {/* Drawer Content */}
      <Box className="drawer-content" sx={{ width: 700, display: "flex", flexDirection: "column", height: "100%" }}>

        {/* Close Button (Top Right Corner) */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            backgroundColor: "#fc0000",
            "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <CloseIcon sx={{ color: "#FFFFFF", fontSize: "30px" }} />
        </IconButton>

        {/* Close Button */}


        {/* Logo */}
        <Box sx={{my:8,display:'flex',justifyContent:'center'}}>
          <Box component="img" src={Home.logosidebar} alt="Logo" sx={{ height: "auto" }} onClick={() => handleNavigate("/")} />
        </Box>
        {/* Navigation List */}



        {/* <List>
          {navItems.map((item, index) => (
            <Box key={index}>
              <ListItemButton
                onClick={() => handleNavigate(item.route)}
                sx={{
                  color: "#FFF",
                  transition: "border-left 0.3s ease-in-out",
                  borderLeft: openSubMenu === item.label ? "3px solid red" : "3px solid transparent",
                }}
              >
                
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "60px !important", 
                      fontWeight: "bold",
                      color: "white",
                      pl: 5
                    },
                  }}
                />

                {item.submenu && (
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMobileSubMenuToggle(item.label);
                    }}
                  >
                    <ArrowDropDownIcon
                      sx={{
                        transform: openSubMenu === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        color: "#FFF",
                        fontSize: '80px'
                      }}
                    />
                  </IconButton>
                )}
              </ListItemButton>
              <Divider sx={{ backgroundColor: "#FFFFFF80" }} />

              
              {item.submenu && (
                <Collapse in={openSubMenu === item.label} timeout="auto" unmountOnExit>
                  <List sx={{ pl: 4 }}>
                    {item.submenu.map((subItem, subIndex) => {
                      const isSubActive = location.pathname === subItem.route;
                      return (
                        <ListItemButton
                          key={subIndex}
                          onClick={() => handleNavigate(subItem.route)}
                          sx={{
                            color: "#FFF",
                            borderLeft: isSubActive ? "3px solid red" : "3px solid transparent",
                            transition: "border-left 0.3s ease-in-out",
                            "&:hover": { borderLeft: "3px solid red" },
                          }}
                        >
                          
                          <ListItemText
                            primary={subItem.label}
                            primaryTypographyProps={{
                              sx: {
                                fontSize: "60px !important", 
                                fontWeight: "bold",
                                color: "white",
                              },
                            }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List> */}
        <List>
  {navItems.map((item, index) => (
    <Box key={index}>
      <ListItemButton
        onClick={() => handleNavigate(item.route, item.external)}
        sx={{
          color: "#FFF",
          transition: "border-left 0.3s ease-in-out",
          borderLeft: openSubMenu === item.label ? "3px solid red" : "3px solid transparent",
        }}
      >
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{
            sx: {
              fontSize: "60px !important",
              fontWeight: "bold",
              color: "white",
              pl: 5,
            },
          }}
        />

        {item.submenu && (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleMobileSubMenuToggle(item.label);
            }}
          >
            <ArrowDropDownIcon
              sx={{
                transform: openSubMenu === item.label ? "rotate(180deg)" : "rotate(0deg)",
                color: "#FFF",
                fontSize: "80px",
              }}
            />
          </IconButton>
        )}
      </ListItemButton>
      <Divider sx={{ backgroundColor: "#FFFFFF80" }} />

      {/* Submenu */}
      {item.submenu && (
        <Collapse in={openSubMenu === item.label} timeout="auto" unmountOnExit>
          <List sx={{ pl: 4 }}>
            {item.submenu.map((subItem, subIndex) => {
              const isSubActive = location.pathname === subItem.route;
              return (
                <Box key={subIndex}>
                  <ListItemButton
                    onClick={() => handleNavigate(subItem.route)}
                    sx={{
                      color: "#FFF",
                      borderLeft: isSubActive ? "3px solid red" : "3px solid transparent",
                      transition: "border-left 0.3s ease-in-out",
                      "&:hover": { borderLeft: "3px solid red" },
                    }}
                  >
                    <ListItemText
                      primary={subItem.label}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: item.label === "Services" ? "46px !important" : "46px !important", // Adjusted font size for "Services"
                          fontWeight: "bold",
                          color: "white",
                        },
                      }}
                    />
                  </ListItemButton>
                  <Divider sx={{ backgroundColor: "#FFFFFF80" }} />
                </Box>
              );
            })}
          </List>
        </Collapse>
      )}
    </Box>
  ))}
</List>



        {/* Social Icons & Footer (Positioned at Bottom) */}
        <Box sx={{ mt: 4 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 5 }}>
      <IconButton
        component="a"
        href="https://youtube.com/@dezignshark?si=7-aInZhNlvvwWfx7 " // WhatsApp Link
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#FFFFFF",
          backgroundColor: "#fc0000",
          "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
          borderRadius: "50%",
          padding: "20px",
        }}
      >
        <YouTube sx={{ fontSize: "60px" }} />
      </IconButton>

      <IconButton
        component="a"
        href="https://x.com/DezignShark" // Twitter Link
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#FFFFFF",
          backgroundColor: "#fc0000",
          "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
          borderRadius: "50%",
          padding: "20px",
        }}
      >
        <XIcon sx={{ fontSize: "60px" }} />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.instagram.com/dezign__shark?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Instagram Link
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#FFFFFF",
          backgroundColor: "#fc0000",
          "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
          borderRadius: "50%",
          padding: "20px",
        }}
      >
        <InstagramIcon sx={{ fontSize: "60px" }} />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.facebook.com/share/1BZTYjKt2H/" // Facebook Link
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#FFFFFF",
          backgroundColor: "#fc0000",
          "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
          borderRadius: "50%",
          padding: "20px",
        }}
      >
        <FacebookIcon sx={{ fontSize: "60px" }} />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/company/dezignshark/" // LinkedIn Link
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#FFFFFF",
          backgroundColor: "#fc0000",
          "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
          borderRadius: "50%",
          padding: "20px",
        }}
      >
        <LinkedInIcon sx={{ fontSize: "60px" }} />
      </IconButton>
    </Box>

        {/* Footer Text */}
        <Typography variant="body2" align="center" sx={{ mt: 8, color: "#FFFFFF80", fontSize: '32px !important' }}>
          ©2025 All Rights Reserved. Designed by Dezign Shark.
        </Typography>
      </Box>
    </Drawer>
</Box>


  );


  return (
    <>
      {/* Navigation Bar */}
      <Box
        ref={headerRef}
        className={`header ${scrollDirection === "down" ? "top-up" : "sticky"}`}
        // position="sticky"
        sx={{
          // backgroundColor: 'transparent',
          height: {
            xs: '150px',
            lg: 'auto',
            md: 'auto'
          },
          width: '100%',
          boxShadow: 'none',
          padding: "1px 0",
          backgroundColor: "rgba(0, 0, 0, 0.9) !important", // Semi-transparent black
          backdropFilter: "blur(2px)", // Blur effect
        }}>

        <Container maxWidth='xl'>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between", alignItems: "center",
              padding: { xs: '60px 10px ', lg: "8px 10px", },
            }}>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", py: 1 }} onClick={() => handleNavigate("/")}>
              <img src={dslogo} alt="logo" className="logo-img" />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && renderDesktopMenu()}

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 10px", gap: '20px' }}>
              <Box

                sx={{
                  width: {
                    xs: '300px',
                    md: "auto"
                  }
                }}
              >

                <CustomButton

                  sx={{
                    width: {
                      xs: "370px ",
                      lg: "216px",


                    },
                    height: {
                      xs: "64px  ",
                      lg: "40px",

                    },
                    fontSize: {
                      xs: "26px  ",
                      lg: "13px",

                    },
                  }}
                  onClick={() => setShowFormPopup(true)}
                >
                  Download Brochure
                </CustomButton>

              </Box>


              {/* Mobile Toggle Button */}
              {isMobile && (
                <IconButton color="inherit" onClick={handleDrawerToggle}

                >
                  <MenuIcon style={{ fontSize: '50px' }} />
                </IconButton>
              )}

            </Box>
          </Toolbar>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      {isMobile && renderMobileMenu()}

      <PopupForm isOpen={showFormPopup} onClose={() => setShowFormPopup(false)} />

    </>
  );
};

export default Header;