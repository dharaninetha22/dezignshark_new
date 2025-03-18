import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import AnimatedText from "../../Components/Inputs/AnimatedText";


const categories = [
  { name: "Digital Marketing", count: 2, link: "#" },
  { name: "Seo Optimization", count: 1, link: "#" },
  { name: "Pay Per Click", count: 1, link: "#" },
  { name: "App Development", count: 1, link: "#" },
  { name: "Email Marketing", count: 2, link: "#" },
];

const Categories: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "start",
        border: "1px solid #E6E9F0",
        p:5,
        mb:4,
        // width:'100%'
      }}
    >
      {/* Heading */}
      {/* <Typography variant="h6" sx={{ color: "#000", fontWeight: "600",mb:4 }}>
        Post Category
      </Typography> */}
      <AnimatedText sx={{ color: "black", textAlign: "center", fontWeight: 700, mb: { xs: 1, lg: 4 } ,fontSize:{xs:"30px",lg:"20px"}}}>
      Post Category
              </AnimatedText>

      {/* Category List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "white",
              transition: "all 0.3s ease-in-out",
              border: "1px solid #E6E9F0",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                
              },
            }}
          >
            <Link
              href={category.link}
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                pl: 2,
              }}
            >
              <span style={{ color: "#007BFF", fontWeight: "bold",}}></span> {category.name}
            </Link>
            <Typography
            variant="body2"
              sx={{
                color: "#5C5C5C",
                fontSize: "14px",
                fontWeight: "bold",
                background: '#efefef',
              padding: '12px 12px',
              }}
            >
              ({category.count})
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
