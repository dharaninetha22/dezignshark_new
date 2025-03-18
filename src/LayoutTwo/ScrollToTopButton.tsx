import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  CircularProgress,
  useMediaQuery,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import gsap from 'gsap';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const buttonRef = useRef<HTMLDivElement | null>(null);
  let pulseAnimation = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  useEffect(() => {
    if (isVisible && buttonRef.current) {
      // Button entrance animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
      );

      // Pulse and Glow Effect
      pulseAnimation.current = gsap.to(buttonRef.current, {
        scale: 1.1,
        boxShadow: '0px 0px 15px rgba(226, 97, 97, 0.6)',
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    } else {
      // Fade out and remove animations
      gsap.to(buttonRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: 'power2.inOut',
      });

      pulseAnimation.current?.kill(); // Stop animation when hidden
    }

    return () => {
      pulseAnimation.current?.kill();
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      ref={buttonRef}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 30,
        zIndex: 1000,
        borderRadius: '50%',
        width: isSmallScreen ? 40 : 55,
        height: isSmallScreen ? 40 : 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        boxShadow: '0px 0px 10px rgba(185, 42, 49, 0.3)',
        border: '2px solidrgb(197, 85, 85)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <CircularProgress
        variant="determinate"
        value={scrollProgress}
        size={isSmallScreen ? 40 : 55}
        thickness={3}
        sx={{
          color: '#fc0000',
          position: 'absolute',
        }}
      />
      <IconButton
        onClick={scrollToTop}
        sx={{
          color: '#fc0000',
          bgcolor: 'white',
          borderRadius: '50%',
          zIndex: 2,
          '&:hover': {
            bgcolor: 'rgba(219, 19, 19, 0.1)',
          },
        }}
      >
        <ArrowUpwardIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;
