import { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface PreloaderProps {
  videoSrc: string;
  onEnd: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ videoSrc, onEnd }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
      onEnd();
    }, 4000); // Fallback timeout in case the video doesn't end

    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: isVideoLoaded ? "none" : "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        zIndex: 1301, // Ensures it's above other content
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        playsInline
        onEnded={() => {
          setIsVideoLoaded(true);
          onEnd();
        }}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Preloader;
