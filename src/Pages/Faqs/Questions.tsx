import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Grid, Container } from "@mui/material";
import { gsap } from "gsap";
import { MdOutlineArrowUpward } from "react-icons/md";
import { AboutImages } from "../../assets";
import AnimatedText from "../../Components/Inputs/AnimatedText";


const faqData = [
    {
        question: "My cousin knows SEO. Why should I hire an agency?",
        answer: "If ranking on Google was as easy as ‘adding keywords,’ your cousin would be a billionaire. Spoiler: He’s not.",
    },
    {
        question: "I have a website. Isn’t that enough?",
        answer: "A website without marketing is like a billboard in the desert—technically there, but no one’s looking",
    },
    {
        question: "Can’t I just copy what my competitors are doing?",
        answer: "Sure, if you’re okay with always being one step behind. We prefer making others copy YOU.",
    },
    {
        question: "Do I really need branding? My business is doing fine",
        answer: "Fine is for average. We build brands that make your competition nervous.",
    },
    {
        question: "Marketing is just about ads, right?",
        answer: "That’s like saying fitness is just about lifting weights. Without strategy, you’re just making noise.",
    },
    {
        question: "Can’t I manage my own digital marketing?",
        answer: "Of course! Just add ‘marketing expert’ to your already-packed schedule and hope for the best.",
    },
    {
        question: "Isn't hiring an agency expensive?",
        answer: "Compared to what? Wasting money on trial-and-error or actually making a return on investment?",
    },
    {
        question: "I have a small business. Do I really need digital marketing?",
        answer: "Nope, only if you want customers. Otherwise, word-of-mouth from your mom should be enough.",
    },
    {
        question: "Why do I need social media marketing? My business isn’t ‘trendy’.",
        answer: "Neither is electricity, but you still use it. Visibility isn’t about trends—it’s about staying relevant.",
    },
    {
        question: "Can’t I just run ads myself?",
        answer: "Of course! Just don’t ask why your ‘clicks’ aren’t turning into customers later.",
    },
    {
        question: "Will I see results in a week?",
        answer: "If instant success was that easy, everyone would be rich. We build sustainable growth, not fairy tales.",
    },
    {
        question: "Why should I invest in content? No one reads anymore!",
        answer: "Oh, so you didn’t read this question either? Interesting.",
    },
    {
        question: "Can’t I just buy followers instead of spending on marketing?",
        answer: "Sure! And while you're at it, buy fake friends too. Let us know how that works out.",
    },
    {
        question: "Do I really need a website? I have a Facebook page!",
        answer: "That’s like saying you don’t need a house because you have a tent in someone else’s backyard.",
    },
    {
        question: "What’s the cheapest way to get more customers?",
        answer: "Make your product free. Or, you know, invest in marketing that actually works.",
    },
    {
        question: "Why should I choose you over other agencies?",
        answer: "Because we don’t sell snake oil. We sell results.",
    },
    {
        question: "Is digital marketing even necessary? My competitor isn’t doing it.",
        answer: "Exactly. And that’s why you’ll be ahead while they wonder where their customers went.",
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
            <Container maxWidth="xl" sx={{ py: 5 }}>

                <AnimatedText

                    sx={{  textAlign: "center",fontSize: { xs: '5em', lg: "3.2em" }  }}
                >
                    FAQ'S
                </AnimatedText>
                <Box
                    sx={{
                        color: "#fff",
                        // padding: "60px",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        mt: 8
                    }}
                >


                    {/* Right Side - FAQ Section */}
                    <Box sx={{ position: "relative" }}>
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
                                <Box key={index} sx={{ position: "relative", cursor: 'none' }}>
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
                                            cursor: "none",
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
                                                        fontSize: '50px',
                                                        color: '#2b2b2b'
                                                    }}
                                                />
                                            </IconButton>
                                        </Box>

                                        {/* Question Text */}
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                flex: 1,
                                                fontSize: { xs: '38px', lg: '28px' },
                                                fontWeight: 700,
                                                textTransform: "uppercase",
                                                pl: { xs: 5, lg: 4 },
                                                cursor: 'none'
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
                                        <Typography variant='body2'
                                            sx={{ fontSize: { xs: '38px', lg: '18px' }, opacity: 0.8, pl: 10 }}>{faq.answer}</Typography>
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
