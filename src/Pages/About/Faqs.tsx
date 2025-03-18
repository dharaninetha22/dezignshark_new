import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Grid, Container } from "@mui/material";
import { gsap } from "gsap";
import { MdOutlineArrowUpward } from "react-icons/md";
import { AboutImages } from "../../assets";



const faqData = [
    {
        question: "A DOCUMENTARY FILMMAKING PORTFOLIO",
        answer: "Details about the documentary filmmaking portfolio.",
    },
    {
        question: "TRANSFORMING SPACES: AN INTERIOR DESIGN PORTFOLIO",
        answer: "Details about the interior design portfolio.",
    },
    {
        question: "ADVENTURES IN CODE: A WEB DEVELOPMENT PORTFOLIO",
        answer: "Details about the web development portfolio.",
    },
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            gsap.fromTo(
                contentRefs.current[openIndex],
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [openIndex]);

    const toggleFAQ = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box py={5}>
            <Container maxWidth="xl" sx={{py:5}}>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                                opacity: 0.7,
                                textAlign: "left",
                            }}
                        >
                            Achievements
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{ fontSize: "24px", fontWeight: "bold", mt: 1, textAlign: "left" }}
                        >
                            FREQUENTLY ASKED QUESTIONS
                        </Typography>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        color: "#fff",
                        // padding: "60px",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: {xs:"center",lg:"space-between"},
                        gap: "50px",
                        mt:8,
                        flexWrap:'wrap'
                    }}
                >
                    {/* Left Side - Image */}
                    <Box
                        component="img"
                        src={AboutImages.faqs}
                        alt="FAQ Visual"
                        sx={{
                            width:  {
                                xs:"100%",
                                lg:"40%"
                            },
                            maxWidth: {
                                xs:"100%",
                                lg:"400px"
                            },
                            height: "auto",
                            borderRadius: "8px",
                            objectFit: "cover",
                            display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    />

                    {/* Right Side - FAQ Section */}
                    <Box sx={{ width: {xs:"100%",lg:"55%"}, position: "relative" }}>
                        {/* Persistent Vertical Line Running Through FAQs */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: "120px",
                                top: "0",
                                bottom: "0",
                                width: "1px",
                                backgroundColor: "#2B2B2B",
                            }}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                // mt: 3,
                                borderTop: "1px solid #2B2B2B", // Top border line
                               
                            }}
                        >
                            {faqData.map((faq, index) => (
                                <Box key={index} sx={{ position: "relative" ,}}>
                                    {/* Horizontal Separator Line */}
                                    {index !== 0 && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "1px",
                                                backgroundColor: "#2B2B2B",
                                            }}
                                        />
                                    )}

                                    {/* Question Section */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            cursor: "pointer",
                                            padding: "20px 0",
                                            gap: "15px",
                                            position: "relative",
                                        }}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        {/* Circular Expand Icon beside Line */}
                                        <Box sx={{ display: "flex", alignItems: "start", gap: "15px" }}>
                                            <IconButton
                                                sx={{
                                                    color: "#fff",
                                                    border: "1px solid #2B2B2B",
                                                    borderRadius: "50%",
                                                    transition: "0.3s",
                                                    width: "100px",
                                                    height: "100px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <MdOutlineArrowUpward
                                                    style={{
                                                        transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                                        transition: "0.3s",
                                                        fontSize:'50px',
                                                        color:'#2b2b2b'
                                                    }}
                                                />
                                            </IconButton>
                                        </Box>

                                        {/* Question Text */}
                                        <Typography
                                        variant="h4"
                                            sx={{
                                                flex: 1,
                                                fontSize: "16px",
                                                fontWeight: 700,
                                                textTransform: "uppercase",
                                                pl:2
                                            }}
                                        >
                                            {faq.question}
                                        </Typography>
                                    </Box>

                                    {/* Answer Section */}
                                    <Box
                                        ref={(el) => {
                                            contentRefs.current[index] = el as HTMLDivElement | null;
                                        }}
                                        sx={{
                                            maxHeight: openIndex === index ? "100px" : "0px",
                                            overflow: "hidden",
                                            opacity: openIndex === index ? 1 : 0,
                                            transition: "max-height 0.5s ease, opacity 0.3s ease",
                                            paddingLeft: "60px",
                                            marginBottom: openIndex === index ? "10px" : "0px",
                                        }}
                                    >
                                        <Typography variant='body2' sx={{ fontSize: "14px", opacity: 0.8 ,pl:10}}>{faq.answer}</Typography>
                                    </Box>

                                    {/* Bottom Line */}
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "1px",
                                            backgroundColor: "#2B2B2B",
                                            marginTop: "10px",
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;
