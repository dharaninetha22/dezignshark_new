import React from "react";
import { Box, Grid, Typography, Container, styled } from "@mui/material";
import { AboutImages } from "../../assets"; // Ensure correct import path
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../../Components/Inputs/AnimatedText";
import Animated from "./Clients";

// ✅ Define an interface for ApproachBox props
interface ApproachBoxProps {
    bgImage: string;
}

// ✅ Styled section wrapper (White Background)
const SectionWrapper = styled(Box)({
    position: "relative",
    padding: "80px 0",
    overflow: "hidden",
    textAlign: "left",
});

// ✅ Grid lines wrapper (Ensure visibility)
const GridLinesWrapper = styled(Box)({
    width: "67%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 1,
});

// ✅ Grid lines (White Color)
const GridLine = styled(Box)({
    width: "1px",
    background: "rgba(243, 235, 235, 0.9)", // Subtle white grid lines
    height: "100%",
});

// ✅ Styled Approach Box with Hover Effect
const ApproachBox = styled(Box)<ApproachBoxProps>(({ bgImage }) => ({
    padding: "32px",
    borderRadius: "6px",
    position: "relative",
    transition: "0.3s",
    overflow: "hidden",
    zIndex: 2,
    border: "1px solid #d8d8d8",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    "&:hover .arrow": {
        opacity: 1,
        transform: "translateX(5px)",
    },
    " &:hover p": {
        color: "#fff",
    },
    "&:hover .title, &:hover .count": {
        color: "#fc0000",
        WebkitTextStrokeColor: "#fc0000",
    },
    "&:hover .title": {
        borderBottom: "2px solid #fff",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        right: 0,
        top: 0,
        width: "0%",
        height: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "width 0.6s ease-in-out",
        zIndex: "-1",
    },
    "&:hover::before": {
        width: "100%",
    },
}));

const ApproachSection: React.FC = () => {


    // ✅ Content Data for Right Side
    const approachContent = [
        {
            title: "Mission",
            description: "Transforming real estate marketing with powerful, data-driven strategies and cutting-edge tech to accelerate visibility, engagement, and sales.",
        },
        {
            title: "Vision",
            description: "To dominate the real estate digital space, leveraging data and technology to fuel unstoppable growth, conversions, and market leadership.",
        },
        {
            title: "Values",
            description: "We operate on Trust, Speed, Accuracy, Revenue Generation, and Client Satisfaction—driving real estate brands to scale faster, convert better, and lead stronger.",
        },
    ];

    return (
        <Box sx={{ background: "#fff" }}>
            <Container maxWidth="xl">
                <SectionWrapper>
                    {/* ✅ Grid Lines */}
                    <GridLinesWrapper>
                        <GridLine />
                        <GridLine />
                        <GridLine />
                        <GridLine />
                    </GridLinesWrapper>

                    <Grid container spacing={4} sx={{ position: "relative", zIndex: 10,px:{xs:6,lg:0}}}>
                        {/* ✅ Left Section */}
                        <Grid item xs={12} lg={6}>
                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        padding: "7px 16px",
                                        borderRadius: "4px",
                                        border: "1px solid #000",
                                        color: "#000",
                                        maxWidth: "max-content",
                                        marginBottom: "20px", 
                                        display: "block",
                                        width:{
                                            xs:'257px',
                                            lg:'auto'
                                        },
                                        fontSize:{
                                             xs:'60px',
                                            lg:'16px'
                                        }
                                    }}
                                >
                                    About Us
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} lg={12} sx={{ mb: 5, textAlign: "left" }}>

                                    <AnimatedText
                                    
                                    sx={{
                                        
                                        color: "#000",
                                         fontSize: { xs: '5em', lg: "3.2em" } 
                                    }}
                                >
                                    Expertise in Strategy,  Design and Development
                                </AnimatedText>
                                 
                                    
                              
                                    </Grid>
                                </Grid>
                                
                                <Typography variant="body2" sx={{ color: "#333", mt: 2, textAlign: 'justify' ,fontSize:{ xs:'16px',lg:'16px' },}}>
                                    Our expertise lies in crafting data-driven strategies, high-performance campaigns, and visually stunning branding that maximize visibility, engagement, and conversions.
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#333", mt: 2, textAlign: 'justify' ,fontSize:{ xs:'16px',lg:'16px' }}}>
                                    We believe in trust, speed, accuracy, and revenue-driven results, ensuring our clients stay ahead of the competition. From lead generation to market domination, we provide tailored solutions that elevate brands and drive measurable success. With Dezign Shark, you don’t just market your business—you transform it.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* ✅ Right Section with Each Content in Separate Grid Item */}
                        <Grid item xs={12} lg={6}>
                            <Grid container spacing={2}>
                                {approachContent.map((item, index) => (
                                    <Grid item xs={12} key={index}>
                                        <ApproachBox bgImage={AboutImages.approach}>
                                            {/* ✅ Title & Counter Positioned Properly */}
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    py:{
                                                        xs:5,
                                                        lg:0
                                                    }
                                                }}
                                            >
                                                <Box

                                                >
                                                    <Typography
                                                        variant="h5"
                                                        fontWeight="bold"
                                                        className="title"
                                                        sx={{
                                                            position: "relative",
                                                            display: "inline-block",
                                                            paddingBottom: "5px",
                                                            transition: "border-bottom 0.3s ease-in-out",
                                                            color: "#000",
                                                            fontSize:{
                                                                xs:'46px',
                                                                lg:'24px'
                                                            },
                                                            mb:{
                                                                xs:3,
                                                                lg:0
                                                            }

                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>

                                                </Box>

                                                <Typography
                                                    variant="h2"
                                                    className="count"

                                                    sx={{
                                                        fontSize:{
                                                            xs:'60px',
                                                            lg:'40px'
                                                        },
                                                        fontWeight: 700,
                                                        WebkitTextFillColor: "rgba(255, 255, 255, 0)",
                                                        WebkitTextStrokeWidth: "1px",
                                                        WebkitTextStrokeColor: "#cccccc",
                                                    }}
                                                >
                                                    0{index + 1}
                                                </Typography>
                                            </Box>

                                            {/* ✅ Description */}
                                            <Typography variant="body1" sx={{ color: "#333", mt: 1, textAlign: 'justify',
                                            fontSize:{
                                                            xs:'22px',
                                                            lg:'18px'
                                                        }, }}>
                                                {item.description}
                                            </Typography>
                                        </ApproachBox>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </SectionWrapper>
            </Container>
        </Box>
    );
};

export default ApproachSection;
