import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Use `useParams`
import {
  Container,
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import { pageData } from "./data";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { GoArrowRight } from "react-icons/go";
import { Star } from "@mui/icons-material";
import gsap from "gsap";
import ProjectForm from "./ProjectForm";
import DownloadSection from "./DownloadSection ";
import { FaCircle } from "react-icons/fa6";


// Styled Components
const MainContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  padding: "50px",
  color: "#fff",
});

const Divider = styled(Box)({
  width: "100%",
  height: "1px",
  backgroundColor: "#BBBBBB",
  marginTop: "10px",
});

const CircleWrapper = styled(Box)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  border: "1px solid rgba(94, 94, 94, 0.18)",
});

const RotatingTextContainer = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RotatingLetter = styled(Typography)({
  position: "absolute",
  fontSize: "5px",
  color: "#000",
  transformOrigin: "center",
  textTransform: "uppercase",
  fontWeight: 600,
  letterSpacing: '1px'
});

// Services list extracted from JSON
// const services = pageData.map((item) => item.id);
const formatServiceId = (id: string) => id.toLowerCase().replace(/\s+/g, "-");


const ServicesDetails = () => {
  const { serviceId } = useParams(); // ✅ Get `serviceId` from URL
  const navigate = useNavigate();
  const rotatingTextRef = useRef(null);
  const [expanded, setExpanded] = useState<number | false>(0);



  // ✅ Find the correct service based on the `serviceId`
  // const selectedData = pageData.find((item) => item.id === serviceId) || pageData[0];
  // const { marketStrategy, businessSections, faqData } = selectedData;

  const selectedData = pageData.find((item) => formatServiceId(item.id) === formatServiceId(serviceId || "")) || pageData[0];
  const { marketStrategy, businessSections, faqData } = selectedData;

  // GSAP Animation for Rotating Text
  useEffect(() => {
    if (rotatingTextRef.current) {
      gsap.to(rotatingTextRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    }
  }, []);

  // Handle Accordion Expansion
  const handleAccordionChange = (panel: number) => {
    setExpanded(expanded === panel ? false : panel);
  };

  // ✅ Update URL properly using `navigate`
  // const handleServiceClick = (service: string) => {
  //   navigate(`/services/${service}`); // Updates the route, triggering a re-render
  // };

  const handleServiceClick = (service: string) => {
    navigate(`/services/${formatServiceId(service)}`);
  };

  return (
    <Box sx={{ background: "white" }}>
      <MainContainer>
        <Box pt={10} width="100%">
          <Grid container spacing={4} alignItems="center">
            <Grid item lg={8} xs={12}>
              <Typography variant="h1" sx={{ color: "#000", fontWeight: 700, fontSize: { md: "72px", xs: "50px" }, textAlign: "left", mb: 4 }}>
                {marketStrategy.title}
              </Typography>
              <Divider />
              {/* <Typography sx={{ color: "#74787C", textAlign: "left",mt:3 }}>
                {marketStrategy.description}
              </Typography> */}

              <Typography variant="h4" sx={{ color: "#000", fontWeight: 700, textAlign: "left", mt: 3 }}>
                {marketStrategy.subtitle}
              </Typography>

              {Array.isArray(marketStrategy?.description)
                ? marketStrategy.description.map((paragraph, index) => (
                  <Typography
                    key={index}
                    sx={{ color: "#74787C", textAlign: "justify", mt: index === 0 ? 3 : 2 }}
                  >
                    {paragraph}
                  </Typography>
                ))
                : (
                  <Typography sx={{ color: "#74787C", textAlign: "justify", mt: 1 }}>
                    {marketStrategy?.description ?? "No description available"}
                  </Typography>
                )
              }



              {/* <Box mt={5}>
                {marketStrategy.checklist.map((item, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <Typography sx={{ color: "#74787C" }}>✔ {item}</Typography>
                  </Stack>
                ))}
              </Box> */}

              <Box mt={5}>
                {marketStrategy.checklist.map((item, index) => {
                  // Split the text at the first "–" (dash) to separate the bold part
                  const [boldText, ...remainingText] = item.split("–");

                  return (
                    <Stack key={index} direction="row" spacing={2} alignItems="center">
                      <Typography variant="body2" sx={{ color: "#74787C" }}>
                        ✔ <Typography variant="body2"  component="span" fontWeight="500" color='#74787c'>{boldText.trim()}</Typography>
                        {remainingText.length > 0 ? ` –${remainingText.join(" ")}` : ""}
                      </Typography>
                    </Stack>
                  );
                })}
              </Box>
            </Grid>
            <Grid item lg={4} xs={12} sx={{display:{xs:"none",lg:'flex'}}} justifyContent="center">
              <CircleWrapper className="circle-spin">
                <RotatingTextContainer ref={rotatingTextRef}>
                  {marketStrategy.rotatingText.split("").map((char, index) => {
                    const angle = (index / marketStrategy.rotatingText.length) * 360;
                    const radius = 80;
                    return (
                      <RotatingLetter key={index}
                        style={{
                          transform: `translate(${radius * Math.cos((angle * Math.PI) / 180)}px, 
                         ${radius * Math.sin((angle * Math.PI) / 180)}px) rotate(${angle}deg)`,
                          fontSize: '12px',
                        }}
                      >
                        {char}
                      </RotatingLetter>
                    );
                  })}
                </RotatingTextContainer>
                <Star sx={{ fontSize: "40px", color: "#919090" }} />
              </CircleWrapper>
            </Grid>
          </Grid>
        </Box>
      </MainContainer>

      <Grid container>
        {/* Business Sections */}
        <Grid item xs={12}  lg={9}>
          <Container maxWidth="xl">


            <CardMedia component="img" image={businessSections.images.service1} alt="Business Section" />
            <CardContent>
              <Typography variant="h3" sx={{ color: "black", fontWeight: 700, mb: 4, textAlign: 'left' }}>{businessSections.title}</Typography>
              <Typography variant="body1" paragraph sx={{ color: "#74787c", textAlign: 'justify' }}>{businessSections.description}</Typography>

              <Box mt={5}>
                {businessSections.subpoints?.map((item, index) => {
                  // Split the text at the first "–" (dash) to separate the bold part
                  const [boldText, ...remainingText] = item.split("–");

                  return (
                    <Stack key={index} direction="row" spacing={4} alignItems="center">
                      <Typography variant="body2" sx={{ color: "#74787C" }}>
                        ✔ <Typography variant="body2"  component="span" fontWeight="500" color='#74787c'>{boldText.trim()}</Typography>
                        {remainingText.length > 0 ? ` –${remainingText.join(" ")}` : ""}
                      </Typography>
                    </Stack>
                  );
                })}
              </Box>
            </CardContent>

            <Grid container spacing={2}>
              <Grid item xs={12} lg={4}>
                {businessSections.servicesList.map((service, index) => (
                  <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: 'start', gap: 2, mt: 1 }}>
                    <FaCircle style={{ color: "#74787c", fontSize: "8px", marginRight: '5px' }} />
                    <Typography sx={{ color: "#74787c", textAlign: 'left' }} >{service}</Typography>
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography fontWeight="bold"
                  sx={{
                    color: "#74787c",

                    borderBottom: "2px solid black",
                    pb: 1,
                    width: "fit-content",

                  }}>
                  {businessSections.challenge.title}
                </Typography>
                <Typography sx={{ color: "#74787c", mt: 2, textAlign: "justify" }}>{businessSections.challenge.description}</Typography>
                <Typography sx={{ color: "#74787C", textAlign: "left" }}>{businessSections.challenge.solution}</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={4}>
              {/* <Grid item xs={12}><CardMedia component="img" image={businessSections.images.service2} /></Grid> */}
              <Grid item xs={12}><CardMedia component="img" image={businessSections.images.service3} /></Grid>
            </Grid>

            {/* Feedback Management Below Images */}
            <CardContent>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "black", mt: 3, textAlign: "left" }}>{businessSections.feedback.title}</Typography>
              <Typography sx={{ color: "#74787c", mt: 2, textAlign: "justify" }}> {businessSections.feedback.challenge}</Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "black", mt: 3, textAlign: "left" }}>{businessSections.feedback.title2}</Typography>
              <Grid item xs={12} md={12}>
                {businessSections.feedback.points?.map((point, index) => (
                  <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: 'start', gap: 2, mt: 1 }}>
                    <FaCircle style={{ color: "#74787c", fontSize: "8px", marginRight: '5px' }} />
                    <Typography sx={{ color: "#74787c", textAlign: 'left' }} >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Grid>
              <Typography sx={{ color: "#74787c", mt: 2, textAlign: "justify" }}> {businessSections.feedback.solution}</Typography>
            </CardContent>

            <Box mt={6}>
              <Grid container spacing={2} alignItems="start">
                {/* Left Side - Image */}
                <Grid item xs={12} lg={6}>
                  <img
                    src={faqData.image}
                    alt="FAQ Illustration"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </Grid>

                {/* Right Side - FAQ */}
                <Grid item xs={12} lg={6}>
                  <Typography variant="h3" fontWeight={700} gutterBottom color="black" sx={{ textAlign: "left", mb: 3, }}>
                    {faqData.title}
                  </Typography>
                  <Divider />
                  {faqData.questions.map((faq, index) => (
                    <Box key={index}>
                      {/* Accordion with First One Open */}
                      <Accordion
                        expanded={expanded === index}
                        onChange={() => handleAccordionChange(index)}
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
                        >
                          <Typography variant="body1" color="black" sx={{ textAlign: "justify" }}>
                            {faq.question}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body2" color="#74787C" sx={{ textAlign: "justify" }}>
                            {faq.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Divider below every FAQ */}
                      <Divider sx={{}} />
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Box>

          </Container>
        </Grid>

        {/* Right Side: Services List */}
        <Grid item xs={12} lg={3}>
          <Container maxWidth="xl">
            <Box sx={{ p: 2, border: "1px solid #ddd" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom color="black">
                All Services
              </Typography>
              {pageData.map((service, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 1,
                    boxShadow: 0,
                    border: "1px solid #eee",
                    cursor: "pointer",
                    // backgroundColor: serviceId === service ? "#000" : "transparent",
                    backgroundColor: formatServiceId(serviceId || "") === formatServiceId(service.id) ? "#000" : "transparent",
                  }}
                  // onClick={() => handleServiceClick(service)}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardActionArea sx={{ display: "flex", justifyContent: "space-between", p: 1.5 }}>
                    <Typography variant="body1"
                      //  sx={{ color: serviceId === service ? "#fff" : "#74787C" }}
                      sx={{ color: formatServiceId(serviceId || "") === formatServiceId(service.id) ? "#fff" : "#74787C", textAlign: 'left' }}
                    >
                      {service.id}
                    </Typography>
                    <GoArrowRight style={{ fontSize: 16 }} color={formatServiceId(serviceId || "") === formatServiceId(service.id) ? "#fff" : "#74787C"} />
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Container>
          <DownloadSection />
          <ProjectForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesDetails;
