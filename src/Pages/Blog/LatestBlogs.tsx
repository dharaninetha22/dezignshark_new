// src/components/LatestBlogs.tsx
import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Replaced Link with useNavigate()
import gsap from "gsap";
import { blogData, BlogPost } from "./BlogDetails/BlogData";
import AnimatedText from "../../Components/Inputs/AnimatedText";


const LatestBlogs: React.FC = () => {
  return (
    <Box sx={{ border: "1px solid #E6E9F0", padding: "20px", mt: 4 }}>
      <Box textAlign="start" mb={3}>
        <Typography variant="h6" sx={{ color: "#000", fontWeight: "600", mb: 4 }}>
          
        </Typography>
        <AnimatedText sx={{ color: "black", textAlign: "center", fontWeight: 700, mb: { xs: 1, lg: 1 } ,fontSize:{xs:"30px",lg:"20px"}}}>
              Post CategoryLatest Posts
                      </AnimatedText>
      </Box>

      {blogData.map((post, index) => (
        <BlogItem key={index} post={post} />
      ))}
    </Box>
  );
};

// ✅ Blog Item with GSAP Hover Animation & Navigation
const BlogItem: React.FC<{ post: BlogPost }> = ({ post }) => {
  const imgContainerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const navigate = useNavigate(); // ✅ Using useNavigate()

  useEffect(() => {
    if (!imgContainerRef.current || !imgRef.current) return;

    const hoverIn = () => gsap.to(imgRef.current, { scale: 1.2, duration: 0.4, ease: "power2.out" });
    const hoverOut = () => gsap.to(imgRef.current, { scale: 1, duration: 0.4, ease: "power2.out" });

    imgContainerRef.current.addEventListener("mouseenter", hoverIn);
    imgContainerRef.current.addEventListener("mouseleave", hoverOut);

    return () => {
      imgContainerRef.current?.removeEventListener("mouseenter", hoverIn);
      imgContainerRef.current?.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  // ✅ Handle navigation on click
  const handleNavigation = () => {
    navigate(`/blog/${encodeURIComponent(post.title.toLowerCase().replace(/ /g, "-"))}`);
  };

  return (
    <Box sx={{ marginBottom: 3, boxShadow: "none", borderRadius: "10px" }} onClick={handleNavigation} style={{ cursor: "pointer" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4} sm={4}>
          <ButtonBase>
            <Box ref={imgContainerRef} sx={{ overflow: "hidden", borderRadius: "10px" }}>
              <img alt={post.title} src={post.image} ref={imgRef} style={{ width: "100%", transition: "transform 0.4s ease-in-out" }} />
            </Box>
          </ButtonBase>
        </Grid>

        <Grid item xs={8} sm={8}>
          <Typography variant="body2"
            sx={{
              color: "#000",
              fontSize: "0.7rem",
              textAlign: 'start'
            }}
          >
            {post.date}
          </Typography>
          <Typography variant="body2"
            sx={{
              textDecoration: "none",
              color: "#000",
              fontSize: "14px",
              fontWeight: "600",
              textAlign: 'left'
            }}
          >
            {post.title}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestBlogs;
