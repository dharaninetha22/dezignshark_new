import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Grid, Container } from "@mui/material";
import { gsap } from "gsap";
import { MdOutlineArrowUpward } from "react-icons/md";
import { AboutImages } from "../../assets";
import AnimatedText from "../../Components/Inputs/AnimatedText";
import CustomButton from "../../Components/Inputs/CustomButton";
import { useNavigate } from "react-router-dom";
import MaskedText from "../../Components/Inputs/MaskedText";



const faqData = [
    {
        question: "If I can design in Canva, why do I need an agency?",
        answer: "Canva is great—for birthday invites. If you want a brand that actually converts, you might need more than drag-and-drop.",
    },
    {
        question: "Can’t I just post randomly on Instagram and get leads?",
        answer: "Sure, if you believe in miracles. But if you prefer strategy over wishful thinking, that’s where we come in..",
    },
    {
        question: "Why should I pay you when I can just boost my posts?",
        answer: "Because ‘boosting’ without a plan is like throwing money into a bonfire—looks cool but burns fast.",
    },
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
    const lineRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            gsap.fromTo(
                contentRefs.current[openIndex],
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [openIndex]);

    useEffect(() => {
        if (lineRef.current) {
            const lastFaq = document.querySelector(".faq-item:last-child");
            if (lastFaq) {
                const lastFaqBottom = lastFaq.getBoundingClientRect().bottom;
                const containerTop = lineRef.current.getBoundingClientRect().top;
                const newHeight = lastFaqBottom - containerTop;

                lineRef.current.style.height = `${newHeight}px`;
            }
        }
    }, [faqData]);

    const toggleFAQ = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box py={5}>
            <Container maxWidth="xl" sx={{ py: 5 }}>

                {/* <MaskedText text="Our Services" /> */}
                <AnimatedText

                    sx={{ mt: 1, textAlign: "center" }}
                >
                    FAQ'S
                </AnimatedText>

                <Grid container>
                    <Grid item xs={12} lg={6}>
                        {/* <MaskedText sx={{ fontSize: { xs: "30px", lg: "50px" },textAlign:'left' }}  >

                            FAQ'S
                        </MaskedText> */}
                        {/* <Typography
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
                       */}

                    </Grid>
                </Grid>

                <Box
                    sx={{
                        color: "#fff",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", lg: "space-evenly" },
                        gap: "10px",
                        mt: 4,
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Side - Image */}
                    <Box
                        component="img"
                        src={AboutImages.aboutshark}
                        alt="FAQ Visual"
                        sx={{
                            width: { xs: "100%", lg: "40%" },
                            maxWidth: { xs: "100%", lg: "400px" },
                            height: "auto",
                            borderRadius: "8px",
                            objectFit: "cover",
                        }}
                    />

                    {/* Right Side - FAQ Section */}
                    <Box sx={{ width: { xs: "100%", lg: "55%" }, position: "relative" }}>
                        {/* Vertical Line Stops at Last FAQ */}
                        <Box
                            ref={lineRef}
                            sx={{
                                position: "absolute",
                                left: "120px",
                                top: "0",
                                width: "1px",
                                backgroundColor: "#2B2B2B",
                                transition: "height 0.3s ease",
                            }}
                        />

                        <Box sx={{ display: "flex", flexDirection: "column", borderTop: "1px solid #2B2B2B" }}>
                            {faqData.map((faq, index) => (
                                <Box key={index} className="faq-item" sx={{ position: "relative" }}>
                                    {/* Horizontal Line for Each FAQ */}
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
                                                        fontSize: "50px",
                                                        color: "#2b2b2b",
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
                                                pl: 2,
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
                                        <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8, pl: 10 }}>
                                            {faq.answer}
                                        </Typography>
                                    </Box>

                                    {/* Last FAQ Bottom Line */}
                                    {index === faqData.length - 1 && (
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "1px",
                                                backgroundColor: "#2B2B2B",
                                                marginTop: "10px",
                                            }}
                                        />
                                    )}
                                </Box>
                            ))}
                        </Box>

                        {/* Read More Button - Positioned Below FAQs */}
                        <Box sx={{ mt: 3, textAlign: "center" }}>
                            <CustomButton onClick={() => navigate("/more-faqs")}>Read More</CustomButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;
