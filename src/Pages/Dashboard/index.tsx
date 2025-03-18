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



const Index = () => {
    return (
        <Box sx={{ position: "relative", }}>
            {/* Apply WptbBackground only to this page */}
            <BodyBackground />

            <Box sx={{}}>
                <Banner />
                <About />
                {/* <Counter /> */}
                {/* <Client/> */}
                {/* <FeatureGrid/> */}
                <Services />
                <Portfolio />
                <Testimonials />
                <Client />
                <Blog />
            </Box>
        </Box>
    );
};

export default Index;
