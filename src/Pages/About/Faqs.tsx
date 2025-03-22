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
    {
        question: "My cousin knows SEO. Why should I hire an agency?",
        answer: "If ranking on Google was as easy as ‘adding keywords,’ your cousin would be a billionaire. Spoiler: He’s not.",
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
            const lastFaqAnswer = contentRefs.current[faqData.length - 1];
            if (lastFaq && lastFaqAnswer) {
                const lastFaqBottom = lastFaq.getBoundingClientRect().bottom;
                const containerTop = lineRef.current.getBoundingClientRect().top;
                const answerHeight = openIndex === faqData.length - 1 ? lastFaqAnswer.scrollHeight : 0;
                const newHeight = lastFaqBottom + answerHeight - containerTop;

                lineRef.current.style.height = `${newHeight}px`;
            }
        }
    }, [faqData, openIndex]);

    const toggleFAQ = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box py={5}>
            <Container maxWidth="xl" sx={{ py: 2 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    {/* Grid Item 1 - Left Side Image */}
                    <Grid item xs={12} lg={5} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            
                            <Box
                                component="img"
                                src={AboutImages.aboutshark}
                                alt="FAQ Visual"
                                sx={{
                                    width: { xs: "100%", lg: "100%" },
                                    
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Grid Item 2 - Right Side FAQ Section */}
                    <Grid item xs={12} lg={7}>
                    <AnimatedText sx={{ mb: 4, textAlign: "left" }}>
                                FAQ'S
                            </AnimatedText>
                        <Box sx={{ width: "100%", position: "relative" }}>
                            {/* Vertical Line Stops at Last FAQ */}
                            <Box
                                ref={lineRef}
                                sx={{
                                    position: "absolute",
                                    left: "100px",
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
                                                padding: "10px 0",
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
                                                        width: "70px",
                                                        height: "70px",
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
                                                    fontSize: { xs: '38px', lg: '18px' },
                                                    fontWeight: 700,
                                                    textTransform: "uppercase",
                                                    pl: { xs: 5, lg: 4 },
                                                    textAlign:'left'
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
                                            <Typography variant="body2"
                                                sx={{ fontSize: { xs: '38px', lg: '20px' }, opacity: 0.8, pl: { xs: 12, lg: 10 } ,textAlign:'left'}}>
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
                        </Box>
                    </Grid>

                    {/* Grid Item 3 - Read More Button */}
                    <Grid item xs={12}>
                        <Box sx={{ mt: { xs: 5, lg: 0 }, textAlign: "center" }}>
                            <CustomButton
                                sx={{
                                    height: { xs: '120px', lg: '40px' },
                                    width: { xs: '400px', lg: '160px' },
                                    fontSize: { xs: '35px', lg: '14px' }
                                }}
                                onClick={() => navigate("/faqs")}
                            >
                                Read More
                            </CustomButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FAQSection;
