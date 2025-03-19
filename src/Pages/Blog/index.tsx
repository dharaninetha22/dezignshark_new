import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import { breadcrumbbanner } from '../../assets'
import { Box, Container, Grid } from '@mui/material'
import AllBlogs from './AllBlogs'
import BlogPagination from './BlogPagination'
import Categories from './Categories'
import LatestBlogs from './LatestBlogs'
import GalleryPost from './GalleryPost'
import PopularTags from './PopularTags'

const index = () => {
    return (
        <Box>
            <Breadcrumb
                title="Blog Posts"
                subtitle=" Articles & News"
                backgroundImage={breadcrumbbanner}
                overlayText="Blog Posts"
            />

            <Grid container sx={{ backgroundColor: "#fff",px:{xs:6,lg:0} }}>
                <Container maxWidth='xl'>

                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={8} mt={6}>
                            <AllBlogs />
                            <BlogPagination />
                        </Grid>
                        <Grid item xs={12} lg={4} mt={6}>
                            <Categories />
                            <LatestBlogs />
                            <GalleryPost />
                            <PopularTags/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>


        </Box>
    )
}

export default index
