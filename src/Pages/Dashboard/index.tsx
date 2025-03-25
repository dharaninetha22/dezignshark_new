import React from "react";
import { Box } from "@mui/material";
import About from "./About";
import Banner from "./Banner";
import Counter from "./Counter";
import WptbBackground from "../../Components/BodyBackground";
import BodyBackground from "../../Components/BodyBackground";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Client from "./Client";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import FeatureGrid from "./FeatureGrid";
import { sharkbgmaroon, sharkbgred,mobilebgshark2,mobilebgshark1 } from "../../assets";
import Slider1 from "./Slider1";

const Index = () => {
    return (
        <Box
            sx={{
            position: "relative",
            // backgroundImage: `url(${sharkbgmaroon})`,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${sharkbgmaroon})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
            // opacity: 0.8,
            "@media (max-width: 1040px)": {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${mobilebgshark2})`,
                // backgroundAttachment: "scroll",
                backgroundSize: "contain", // Adjust to ensure the full image appears
            },
            }}
        >
            <BodyBackground />

            <Box sx={{}}>
            <Banner />
            <About />
            {/* <Counter /> */}
            {/* <Client/> */}
            <FeatureGrid/>
            {/* <Slider1/> */}
            <Services />
            <Portfolio />
            {/* <Hovering/> */}
            <Testimonials />
            <Client />
            <Blog />
            </Box>
        </Box>
    );
};

export default Index;
