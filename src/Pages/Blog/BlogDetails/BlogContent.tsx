import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Grid, Avatar, styled } from "@mui/material";
import { blogData } from "./BlogData";
import Categories from "../Categories";
import LatestBlogs from "../LatestBlogs";
import GalleryPost from "../GalleryPost";
import PopularTags from "../PopularTags";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from "./Form";
import AnimatedText from "../../../Components/Inputs/AnimatedText";




// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Styled Components for Background Image Wrapper
const ThumbnailBanner = styled(Box)({
  position: "relative",
  height: "350px",
  width: "100%",
  overflow: "hidden",
});

// Styled Image for GSAP animation
const GrowImage = styled("div")({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
  transform: "scale(1)", // Initial scale
});

const BlogDetails: React.FC = () => {
  const { title } = useParams<{ title?: string }>(); // Make title optional
  const titleRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  // Move `useEffect` above early returns
  useEffect(() => {
    if (!titleRef.current) return;

    const title = titleRef.current;

    // Clear existing content
    title.innerHTML = "";

    // Split title into words (preserving spacing)
    const titleWords = title.dataset.text?.split(" ") || [];
    titleWords.forEach((word) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.textContent = word + " "; // Add space after each word
      title.appendChild(span);
    });

    // GSAP animations - Right to Left (x: -70 for title)
    gsap.to(title.querySelectorAll("span"), {
      duration: 2,
      x: -20, // Animate from right to left
      autoAlpha: 1,
      stagger: 0.09, // Animate each word separately
    });
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.5, // Zoom effect
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: 1, // Smooth reverse effect
          start: "top bottom",
          end: "bottom top",
        },
      });
    }
  }, []);

  if (!title) return <Typography>No blog found</Typography>;

  const decodedTitle = decodeURIComponent(title).replace(/-/g, " ");
  const blog = blogData.find((b) => b.title.toLowerCase() === decodedTitle.toLowerCase());

  if (!blog) return <Typography>No blog found</Typography>;

  return (
    <Box>

      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="flex-start"
          sx={{
            height: { xs: '50vh', lg: '100vh' },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Grid item xs={12} lg={12}>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: { xs: '32px', lg: '14px' },
                textTransform: "uppercase",
                letterSpacing: 2.6,
                mb: 2,
                textAlign: { xs: 'center', lg: 'left' },
              }}
            >
              {blog.category}
            </Typography>
            <Typography
              ref={titleRef}
              data-text="Creative Pattern Limited: A Designer UI/UX Complete Checklist."
              sx={{
                color: "#FFF",
                fontSize: { xs: 66, lg: 60 },
                fontWeight: 600,
                lineHeight: { xs: "40px", sm: "60px", md: "70px" },
                textAlign: { xs: 'center', lg: 'left' },
                whiteSpace: "pre-wrap",
                mt: { xs: 4, lg: 0 },
              }}
            >
              {blog.title}
            </Typography>
            <Box sx={{
              display: "flex", alignItems: "center", justifyContent: { xs: 'center', lg: 'start' }, gap: 2, mt: { xs: 6, lg: 4 }, 
            }}>
              <Avatar
                alt={blog.author.name}
                src={blog.author.avatar}
                sx={{ width: 56, height: 56 }}
              />
              <Box>
                <Typography sx={{ color: "#FFF", fontSize: { xs: '32px', lg: '18px' }, fontWeight: 600 }}>
                  {blog.author.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className="blog-details-main-wrapper"
        sx={{
          background: '#fff'
        }}
      >

        <Container maxWidth="xl" sx={{ pb: 5 }}>
          <Grid container>
            <Container maxWidth="xl">
              <Grid container spacing={2} alignItems="flex-start">
                {/* Left Column (BlogContent - Sticky) */}
                <Grid item xs={12} lg={8} mt={6}>
                  {/* <img src={blog.bannerImage} alt="Banner" width="100%" /> */}
                  <ThumbnailBanner>
                    <GrowImage
                      ref={imageRef}
                      className="grow"
                      style={{ backgroundImage: `url(${blog.bannerImage})` }}
                    />
                  </ThumbnailBanner>
                  {/* <Typography variant="h3"
                    sx={{
                      color: 'black',
                      textAlign: 'start',
                      mt:4
                    }}>
                    {blog.title}
                  </Typography> */}

                  <AnimatedText sx={{ color: "black", textAlign: "left", fontWeight: 700, mt: { xs: 5, lg: 4 }, fontSize: { xs: "44px", lg: "35px" } }}>
                    {blog.title}
                  </AnimatedText>
                  {blog.blogContent.map((item, index) =>
                    item.type === "text" ? (
                      <Typography variant="body1"
                        color="#74787c"
                        textAlign='justify'
                        mt={3}
                        key={index}>
                        {item.content}
                      </Typography>
                    ) : (
                      // <Typography key={index} variant="h5">
                      //   {item.quoteText}
                      // </Typography>
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "25px",
                          padding: "12px 0",
                          borderTop: "1px solid #14141421",
                          borderBottom: "1px solid #14141421",
                          textAlign: { xs: "center", sm: "left" },
                          mt: 5,
                        }}
                      >
                        <img src={blog.quoteImage} alt="blog-quote" />
                        <Typography variant="h6" color="black" sx={{fontSize: { xs: "32px", lg: "16px" }}}>
                          “{item.quoteText}”
                        </Typography>
                      </Box>
                    )
                  )}

                  <Grid container spacing={3} sx={{ mt: 6 }}>
                    {blog.blogImages.map((image, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <img src={image} alt="blog" width="100%" />
                      </Grid>
                    ))}
                    <Grid item xs={12} sm={12}>
                      <Typography variant="h6" color="black" sx={{ textAlign: "left",fontSize: { xs: "44px", lg: "35px" } }}>
                        {blog.extraContent.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#74787c"
                        sx={{ mt: 3, textAlign: "justify" }}
                      >
                        {blog.extraContent.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box>
                    <Form />
                  </Box>
                </Grid>

                {/* Right Column (Sidebar) */}
                <Grid item xs={12} lg={4} mt={6}>
                  <Categories />
                  <LatestBlogs />
                  <GalleryPost />
                  <PopularTags />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogDetails;
