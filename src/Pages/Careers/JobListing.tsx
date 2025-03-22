import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Card, CardContent, Chip, Grid, useMediaQuery, useTheme } from "@mui/material";
import { gsap } from "gsap";
import { CiLocationOn } from "react-icons/ci"; // Location Icon
import { SlBriefcase } from "react-icons/sl"; // Job Icon
import { servicebg, shark } from "../../assets";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../../Components/Inputs/AnimatedText";


// Job Data
const jobs = [
  { id: 1, title: "Junior Graphic Designer (Web)", category: "Design", location: "New York", type: "Full Time", urgent: true },
  { id: 2, title: "Finance Manager & Health", category: "Design", location: "New York", type: "Full Time", urgent: true },
  { id: 3, title: "General Ledger Accountant", category: "Design", location: "New York", type: "Full Time", urgent: false },
  { id: 4, title: "Assistant / Store Keeper", category: "Development", location: "New York", type: "Part Time", urgent: false },
  // { id: 5, title: "Group Marketing Manager", category: "Customer", location: "Miami", type: "Part Time", urgent: false },
  // { id: 6, title: "Product Sales Specialist", category: "Project Management", location: "New York", type: "Internship", urgent: false },
  // { id: 7, title: "UX/UI Designer Web", category: "Design", location: "Paris", type: "Freelance", urgent: false },
  // { id: 8, title: "Executive, HR Operations", category: "Customer", location: "New York", type: "Temporary", urgent: true },
  // { id: 9, title: "Senior/Staff Nurse", category: "Health and Care", location: "Paris", type: "Part Time", urgent: false },
];

const categories = ["All Categories", "Design", "Development", "Marketing", ];

const JobListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

   const navigate = useNavigate();
 const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg")); // Mobile detection

  
   const handleNavigation = (jobid: number) => {
    navigate(`/job/${jobid}`);
  };



  // Filtering Jobs
  useEffect(() => {
    const filtered =
      selectedCategory === "All Categories"
        ? jobs
        : jobs.filter((job) => job.category === selectedCategory);
    setFilteredJobs(filtered);
  }, [selectedCategory]);

  // GSAP Animation
  useEffect(() => {
    gsap.fromTo(
      ".job-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
  }, [filteredJobs]);

  return (
    <Box
      sx={{
        p: 4,
        minHeight: {
          xs:'30vh',
          lg:"100vh"
        }
        
        ,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${servicebg}) no-repeat center center`,
        backgroundSize: "cover",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Opacity effect
          zIndex: 1,
        },
      }}
    >
      {/* Content Wrapper */}
      <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Title */}
       
        <AnimatedText sx={{ textAlign: "center", mb: {xs:5,lg:5},my: {xs:5,lg:0}, fontWeight: "bold", color: "#fff" ,fontSize: { xs: '5em', lg: '3.2em' }}}>
        Featured Jobs
        </AnimatedText>

        {/* Category Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 ,mt:5}}>
          <Typography variant="h6">

              <Tabs
                value={selectedCategory}
                onChange={(event, newValue) => setSelectedCategory(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                centered
                sx={{
                  "& .MuiTabs-indicator": { backgroundColor: "#fff" },
                  "& .MuiTab-root": { textTransform: "none", fontSize: {xs:'30px',lg:"20px"}, color: "#fff" },
                  "& .Mui-selected": { color: "#fc0000", fontWeight: "bold" },
                }}
              >
                {categories.map((cat) => (
                  <Tab key={cat} label={cat} value={cat} />
                ))}
              </Tabs>
          </Typography>
        </Box>

        {/* Job Cards Grid */}
        <Grid container spacing={3} justifyContent="center" data-aos="fade-down" sx={{mt:{xs:5,lg:0}}}>
          {filteredJobs.map((job) => (
            <Grid item xs={12}  lg={6} key={job.id}>
              <Card
                className="job-card"
                sx={{
                  height: "100%", // Ensures equal height for all cards
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "#ffffff",
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                  cursor: "none",
                  
                  
                  
                }}
                onClick={() => handleNavigation(job.id)}
              >
                <CardContent >
                  <Box sx={{py:{xs:6,lg:0},}}>

                      <Box sx={{ display: "flex", alignItems: "center", justifyContent:"space-between",gap: 5,mb:3}}>
                        {/* Profile Icon */}
                        <Box 
                          sx={{
                          backgroundColor: "black",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 100,
                          height: 80,
                          }}
                        >
                          <img src={shark} alt="Company Logo" width={40} height={40} />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1, width: "100%" }}>
                          <Typography variant="body2" sx={{ fontWeight: "bold", color: "#000", fontSize: {xs:'30px',lg:'16px'}, textAlign: {xs:'center',lg:'center'} }}>
                          {job.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#757575", mb: 1, display: "flex", alignItems: "center", gap: 1, justifyContent: {xs:'start',lg:"start"}, fontSize: {xs:'30px',lg:'16px'}, pl: {xs:6,lg:0} }}>
                          <SlBriefcase 
                            style={{
                            fontSize: isMobile ? "30px" : "16px", 
                            }} 
                          />
                          {job.category}
                          <CiLocationOn style={{ fontSize: isMobile ? "30px" : "16px" }} /> {job.location}
                          </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                      </Box>

                      {/* Category & Location with Icons */}
                      

                      {/* Job Type Labels */}
                      <Box sx={{ display: "flex", gap: 1, alignItems: "center" ,mt:{xs:5,lg:0}}}>
                        <Chip
                          label={job.type}
                          sx={{
                            backgroundColor: "#e3f2fd",
                            color: "#1976d2",
                            fontSize: {xs:'30px',lg:'14px'}, // 🔥 Increased Font Size
                            fontWeight: "bold",
                            padding: {xs:'32px 50px',lg:"5px 10px"},
                          }}
                        />
                        {job.urgent && (
                          <Chip
                            label="Urgent"
                            sx={{
                              backgroundColor: "#fff3cd",
                              color: "#856404",
                              fontSize: {xs:'25px',lg:'14px'}, // 🔥 Increased Font Size
                              fontWeight: "bold",
                              padding: {xs:'32px 50px',lg:"5px 10px"},

                            }}
                          />
                        )}
                      </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default JobListing;
