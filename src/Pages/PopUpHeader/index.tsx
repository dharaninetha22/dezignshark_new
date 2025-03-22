import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Typography,
  InputBase,
  Divider,
  Grid,
  IconButton,
  Link
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Search,
  Close,
  LocationOn,
  Phone,
  Email,
}
  from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from '@mui/icons-material/X';
import { dslogo, Home } from "../../assets";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

// Navigation menu items with submenus
const navItems = [
  { label: "Home", route: "/" },
  { label: "About", route: "/aboutus" },
  {
    label: "Services",
    route: "/services",
    submenu: [
      { label: "Branding", route: "/services/branding" },
      { label: "Social Media Marketing", route: "/services/social-media-marketing" },
      { label: "Pay-Per-Click (PPC) Advertising", route: "/services/pay-per-click" },
      { label: "Web Development", route: "/services/web-development" },
      { label: "Search Engine Optimization (SEO)", route: "/services/search-engine-optimization" },
      { label: "Graphic Designing", route: "/services/graphic-designing" },
    ],
  },
  { label: "Careers", route: "/careers" },
  { label: "Blog", route: "/blog" },
  { label: "Contact Us", route: "/contactus" },
];

// Image Gallery
const images = [
  Home.homenav,
  Home.homenav,
  Home.homenav,
  Home.homenav,
  Home.homenav,
  Home.homenav,

];
const socialLinks = [
  { icon: <FacebookIcon />, url: "https://x.com/DezignShark" },
  { icon: <LinkedInIcon />, url: "https://www.linkedin.com/company/dezignshark/" },
  { icon: <XIcon />, url: "https://x.com/DezignShark?t=T_FrlJGy1jR1dcCMOpYlCA&s=09" },
  { icon: <InstagramIcon />, url: "https://www.instagram.com/dezign__shark?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { icon: <YouTubeIcon />, url: "https://www.youtube.com/@yourchannel" },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  // const handleToggle = (index: number) => {
  //   setOpenSections((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };
  const handleToggle = (index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents navigation when clicking the expand icon
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleNavigation = (route: string) => {
    navigate(route);
    onClose(); // Close the sidebar when clicking a menu item
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%",
          backgroundColor: "#111",
          color: "white",
          height: "100vh",
        },
      }}
    >
      <Grid container sx={{ height: "100vh" }}>
        {/* Left Section - Logo, Contact & Socials */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            py: 8,

          }}
        >
          {/* Logo Section */}
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // py:6

          }}>
            <img src={dslogo} alt="logo" className="logo-img" width="auto" />
          </Box>

          {/* Divider BELOW the logo (aligned properly) */}
          <Divider sx={{ bgcolor: "gray", my: 2, width: "100%" }} />

          {/* Contact Info */}
          <Box sx={{ textAlign: "left", px: 5 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 5 }}>
              Get in touch
            </Typography>
            {/* <Typography variant="body1" sx={{ mb: 1 }}>
              <a href="tel:+917997992885" style={{ textDecoration: "none", color: "inherit" }}>
                +91 799 799 2885
              </a>
            </Typography>

            <Typography variant="body2" sx={{ mb: 1 }}>
              <a href="mailto:info@dezignshark.com" style={{ textDecoration: "none", color: "inherit" }}>
                info@dezignshark.com
              </a>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              68, 3rd Floor, Senore Colony, Film Nagar, Hyderabad, Telangana 500008
            </Typography> */}
            <Box sx={{ display: "flex", alignItems: "start", mb: 2, gap: { xs: 2, lg: 0 } }}>
              <LocationOn sx={{ fontSize: { xs: 50, lg: 24 }, color: "#fc0000", minWidth: "40px" }} />
              <Typography variant="body2" sx={{ fontSize: { xs: "30px", lg: "16px" } }}>
                68, 3rd Floor, Senore Colony, Film Nagar, Hyderabad, Telangana 500008
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "start", mb: 2, gap: { xs: 2, lg: 0 } }}>
              <Phone sx={{ fontSize: { xs: 50, lg: 24 }, color: "#fc0000", minWidth: "40px", }} />
              <Link href="tel:+91 799 799 2885" color="inherit" sx={{ textDecoration: "none", fontSize: { xs: "30px", lg: "16px" } }}>
                +91 799 799 2885
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "start", gap: { xs: 2, lg: 0 } }}>
              <Email sx={{ fontSize: { xs: 50, lg: 24 }, color: "#fc0000", minWidth: "40px" }} />
              <Link href="mailto:info@dezignshark.com" color="inherit" sx={{ textDecoration: "none", fontSize: { xs: "30px", lg: "16px" } }}>
                info@dezignshark.com
              </Link>
            </Box>
          </Box>

          {/* Divider BELOW contact info */}
          <Divider sx={{ bgcolor: "gray", my: 2, width: "100%" }} />

          {/* Social Icons */}
          {/* <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <YouTubeIcon />
            </IconButton>
          </Box> */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {socialLinks.map(({ icon, url }, index) => (
              <IconButton
                key={index}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  background: "rgba(255, 255, 255, 0.2)",
                  width: '40px',
                  height: '40px',
                  lineHeight: "40px",
                  borderRadius: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    background: "white",
                    color: "#fc0000",
                  },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Vertical Divider */}
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "gray", width: "1px" }} />

        {/* Center Section - Menu */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            flexGrow: 1,
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          {/* Divider ABOVE menu items */}
          <Divider sx={{ bgcolor: "gray", width: "100%" }} />

          <List sx={{ width: "100%",cursor:'none' }}>
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  onClick={() => handleNavigation(item.route)}
                  sx={{ px: 3, display: "flex", justifyContent: "space-between", "&:hover .MuiListItemText-primary": { color: "red" }, cursor:'none'}}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      style: { fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "white" },
                    }}
                  />
                  {item.submenu && (
                    <IconButton onClick={(event) => handleToggle(index, event)} sx={{ color: "white", "&:hover": { color: "red" } }}>
                      {openSections[index] ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  )}
                </ListItemButton>

                {item.submenu && (
                  <Collapse in={openSections[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding >
                      {item.submenu.map((sub, subIndex) => (
                        <ListItemButton
                          key={subIndex}
                          sx={{ pl: 24, "&:hover .MuiListItemText-primary": { color: "red" }, cursor:'none'
                          }}
                          onClick={() => handleNavigation(sub.route)}
                        >
                          <ListItemText primary={sub.label} sx={{ color: "white" }} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
                <Divider sx={{ bgcolor: "gray" }} />
              </React.Fragment>
            ))}
          </List>
        </Grid>

        {/* Vertical Divider */}
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "gray", width: "1px" }} />

        {/* Right Section - Close Button, Search & Images */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            position: "relative",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {/* Close Button Positioned at the Top Right */}
          <IconButton onClick={onClose} sx={{ position: "absolute", top: 10, right: 10, color: "white" }}>
            <Close />
          </IconButton>

          {/* Search Bar */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, borderBottom: "1px solid gray", pb: 1, width: "80%" }}>
            <Search sx={{ color: "white" }} />
            <InputBase placeholder="Search something..." sx={{ flex: 1, color: "white", padding: "4px", textAlign: "center" }} />
          </Box>

          {/* Image Gallery */}
          <Grid container spacing={1} sx={{ width: "80%" }}>
            {images.map((src, index) => (
              <Grid item xs={4} md={4} key={index}>
                <Box component="img" src={src} sx={{ width: "100%", borderRadius: 1 }} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default Sidebar;
