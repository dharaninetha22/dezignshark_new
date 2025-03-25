import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Card, CardContent, Chip, Grid } from "@mui/material";
import { gsap } from "gsap";
import { CiLocationOn } from "react-icons/ci"; // Location Icon
import { SlBriefcase } from "react-icons/sl"; // Job Icon
import { servicebg, shark } from "../../assets";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Job Data
const jobs = [
  { id: 1, title: "Junior Graphic Designer (Web)", category: "Design", location: "New York", type: "Full Time", urgent: true },
  { id: 2, title: "Finance Manager & Health", category: "Design", location: "New York", type: "Full Time", urgent: true },
  // { id: 3, title: "General Ledger Accountant", category: "Design", location: "New York", type: "Full Time", urgent: false },
  // { id: 4, title: "Assistant / Store Keeper", category: "Automotive Jobs", location: "New York", type: "Part Time", urgent: false },
  // { id: 5, title: "Group Marketing Manager", category: "Customer", location: "Miami", type: "Part Time", urgent: false },
  // { id: 6, title: "Product Sales Specialist", category: "Project Management", location: "New York", type: "Internship", urgent: false },
  // { id: 7, title: "UX/UI Designer Web", category: "Design", location: "Paris", type: "Freelance", urgent: false },
  // { id: 8, title: "Executive, HR Operations", category: "Customer", location: "New York", type: "Temporary", urgent: true },
  // { id: 9, title: "Senior/Staff Nurse", category: "Health and Care", location: "Paris", type: "Part Time", urgent: false },
];

const categories = ["All Categories", "Design", "Development", "Marketing",];

const JobListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const navigate = useNavigate();

  const handleNavigation = (jobid: number) => {
    navigate(`/job/${jobid}`);
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth animation
      offset: 100, // Trigger animations earlier/later
      once: false, // Allows re-triggering when scrolling up
      mirror: true, // ✅ Ensures animations work when scrolling up
    });

    // Refresh AOS when page content updates
    AOS.refresh();
  }, []);
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
        minHeight: "100vh",
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
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3, fontWeight: "bold", color: "#fff" }} data-aos="fade-down">
          Featured Jobs
        </Typography>

        {/* Category Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Typography variant="h6">

            <Tabs
              value={selectedCategory}
              onChange={(event, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              centered
              sx={{
                "& .MuiTabs-indicator": { backgroundColor: "#7c4dff" },
                "& .MuiTab-root": { textTransform: "none", fontSize: "24px", color: "#fc0000" },
                "& .Mui-selected": { color: "#000", fontWeight: "bold" },
              }}
            >
              {categories.map((cat) => (
                <Tab key={cat} label={cat} value={cat} />
              ))}
            </Tabs>
          </Typography>
        </Box>

        {/* Job Cards Grid */}
        <Grid container spacing={3} justifyContent="center" data-aos="fade-down">
          {/* Job Cards Grid */}
          {filteredJobs.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: "center", color: "#fff", mt: 4 }}>
              No jobs available for this category.
            </Typography>
          ) : (
            <Grid container spacing={3} justifyContent="center" data-aos="fade-down">
              {filteredJobs.map((job) => (
                <Grid item xs={12} sm={6} md={4} key={job.id}>
                  <Card
                    className="job-card"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: "#ffffff",
                      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                      borderRadius: "12px",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.03)" },
                    }}
                    onClick={() => handleNavigation(job.id)}
                  >
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box>
                          <img src={shark} alt="Company Logo" width={80} height={80} />
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: "bold", color: "#000", fontSize: "16px" }}>
                          {job.title}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#757575",
                          mb: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          justifyContent: "center",
                        }}
                      >
                        <SlBriefcase style={{ fontSize: "16px" }} /> {job.category}
                        <CiLocationOn style={{ fontSize: "16px" }} /> {job.location}
                      </Typography>

                      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <Chip
                          label={job.type}
                          sx={{
                            backgroundColor: "#e3f2fd",
                            color: "#1976d2",
                            fontSize: "18px",
                            fontWeight: "bold",
                            padding: "4px 10px",
                          }}
                        />
                        {job.urgent && (
                          <Chip
                            label="Urgent"
                            sx={{
                              backgroundColor: "#fff3cd",
                              color: "#856404",
                              fontSize: "18px",
                              fontWeight: "bold",
                              padding: "4px 10px",
                            }}
                          />
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

        </Grid>
      </Box>
    </Box>
  );
};

export default JobListing;
