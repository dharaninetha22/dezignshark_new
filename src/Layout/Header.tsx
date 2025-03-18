import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaDribbble, FaFacebookF, FaTwitter } from 'react-icons/fa';
// import { logos } from '../assets';
// import AnimatedButton from '../Components/Buttons/AnimatesButton';
import './Header.css';
// import ModalForm from '../Components/ModalForm/ModalForm';

interface HeaderProps {
  selectedTab: string;
  onTabChange: (route: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedTab, onTabChange }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Added to track the current route
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [drawerSubMenuOpen, setDrawerSubMenuOpen] = useState<string | null>(null);

  // Ensure selectedTab is valid
  useEffect(() => {
    if (!tabLabels.concat(tableLabels2).some((tab) => tab.route === selectedTab)) {
      onTabChange(location.pathname);
    }
  }, [location.pathname, selectedTab, onTabChange]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    onTabChange(newValue);
    navigate(newValue);
    setDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDropdownMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownVisible(false);
    setSubMenuVisible(false);
  };

  const handleSubMenuMouseEnter = () => {
    setSubMenuVisible(true);
  };

  const handleSubMenuMouseLeave = () => {
    setSubMenuVisible(false);
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    setDropdownVisible(false);
    setSubMenuVisible(false);
    setDrawerOpen(false);
  };

  const handleDrawerSubMenuToggle = (menu: string) => {
    setDrawerSubMenuOpen(drawerSubMenuOpen === menu ? null : menu);
  };

  const tabLabels = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'About', route: '/about' },
  ];

  const tableLabels2 = [
    { label: 'Blog', route: '/blog' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Contact Us', route: '/contact-us' },
  ];

  const serviceMenuItems = [
    {
      label: 'Digital Marketing',
      route: '/services/digital-marketing',
      submenu: [
        { label: 'Search Engine Optimization (SEO)', route: '/services/digital-marketing/seo' },
        { label: 'Social Media Marketing (SMM)', route: '/services/digital-marketing/smm' },
        { label: 'Pay-Per-Click (PPC)', route: '/services/digital-marketing/ppc' },
      ],
    },
    { label: 'Graphic Designing', route: '/services/graphic-designing' },
    { label: 'Web Development', route: '/services/web-development' },
    { label: 'Branding', route: '/services/branding' },
  ];

  const tabButtonStyles = {
    fontSize: '16px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      color: '#fc0000',
    },
  };

  const drawerItemStyles = {
    fontSize: '16px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#fc0000',
      color: '#FFFFFF',
    },
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(6px)',
          width: '100%',
          boxShadow: 'none',
        height:'87px'

        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', ml: { xs: 2, md: 4 }, cursor: 'pointer' }}
            onClick={() => handleTabChange(null as any, '/dashboard')}
          >
            {/* <img src={logos.dezignshark} alt="Logo" style={{ height: '40px' }} /> */}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              // textColor="inherit"
              
              indicatorColor="secondary"
              sx={{
                '& .MuiTab-root': {
                  ...tabButtonStyles,
                  minWidth: 'auto',
                  marginLeft: 1,
                },
                '& .Mui-selected': {
                  color: '#fc0000',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#fc0000',
                },
                color:'white'
              }}
            >
              {tabLabels.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  value={tab.route}
                  color='white'
                />
              ))}
            </Tabs>
            <div
              className="menu"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="tab-button"
                style={{
                  ...tabButtonStyles,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Services <ArrowDropDownIcon />
              </button>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <ul>
                    <li
                      onMouseEnter={handleSubMenuMouseEnter}
                      onMouseLeave={handleSubMenuMouseLeave}
                    >
                      <div onClick={() => handleNavigate('/services/digital-marketing')}>
                        Digital Marketing <ArrowDropDownIcon />
                      </div>
                      {subMenuVisible && (
                        <div className="sub-menu">
                          <ul>
                            <li onClick={() => handleNavigate('/services/digital-marketing/seo')}>
                              Search Engine Optimization (SEO)
                            </li>
                            <li onClick={() => handleNavigate('/services/digital-marketing/smm')}>
                              Social Media Marketing (SMM)
                            </li>
                            <li onClick={() => handleNavigate('/services/digital-marketing/ppc')}>
                              Pay-Per-Click (PPC)
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li onClick={() => handleNavigate('/services/graphic-designing')}>
                      Graphic Designing
                    </li>
                    <li onClick={() => handleNavigate('/services/web-development')}>
                      Web Development
                    </li>
                    <li onClick={() => handleNavigate('/services/branding')}>
                      Branding
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              // textColor="inherit"
              indicatorColor="secondary"
              sx={{
                '& .MuiTab-root': {
                  ...tabButtonStyles,
                  minWidth: 'auto',
                  marginLeft: 1,
                },
                '& .Mui-selected': {
                  color: '#fc0000',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#fc0000',
                },
                color:'white'
              }}
            >
              {tableLabels2.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  value={tab.route}
                />
              ))}
            </Tabs>
            {/* <AnimatedButton onClick={handleClickOpen}>
              Download Brochure
            </AnimatedButton> */}
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#FFFFFF' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#FFFFFF',
            border: 'none',
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', display: 'block', color: '#FFFFFF' }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {tabLabels.concat(tableLabels2).map((tab, index) => (
              <ListItem
                
                key={index}
                onClick={() => handleTabChange(null as any, tab.route)}
                sx={drawerItemStyles}
              >
                <ListItemText primary={tab.label} />
              </ListItem>
            ))}
            <Divider sx={{ backgroundColor: '#FFFFFF80' }} />
            <ListItem  onClick={() => handleDrawerSubMenuToggle('Digital Marketing')}>
              <ListItemText primary="Digital Marketing" />
              <ArrowDropDownIcon />
            </ListItem>
            {drawerSubMenuOpen === 'Digital Marketing' && (
              <List component="div" disablePadding>
                {serviceMenuItems[0].submenu?.map((submenu, subIndex) => (
                  <ListItem
                    
                    key={subIndex}
                    sx={{ pl: 4, ...drawerItemStyles }}
                    onClick={() => handleNavigate(submenu.route)}
                  >
                    <ListItemText primary={submenu.label} />
                  </ListItem>
                ))}
              </List>
            )}
            <Divider sx={{ backgroundColor: '#FFFFFF80' }} />
            {serviceMenuItems.map((service, index) => (
              <ListItem
                
                key={index}
                onClick={() => handleNavigate(service.route)}
                sx={drawerItemStyles}
              >
                <ListItemText primary={service.label} />
              </ListItem>
            ))}
            <Divider sx={{ backgroundColor: '#FFFFFF80' }} />
            <ListItem
              
              onClick={handleClickOpen}
              sx={drawerItemStyles}
            >
              <ListItemText primary="Download Brochure" />
            </ListItem>
          </List>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <IconButton sx={{ color: '#FFFFFF' }} aria-label="Facebook">
              <FaFacebookF />
            </IconButton>
            <IconButton sx={{ color: '#FFFFFF' }} aria-label="Twitter">
              <FaTwitter />
            </IconButton>
            <IconButton sx={{ color: '#FFFFFF' }} aria-label="Dribbble">
              <FaDribbble />
            </IconButton>
          </Box>
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, color: '#FFFFFF80' }}
          >
            © 2023 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Drawer>

      {/* <ModalForm open={open} handleClose={handleClose} /> */}
    </>
  );
};

export default Header;


