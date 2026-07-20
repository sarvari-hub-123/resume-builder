import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TemplateCard from "../components/TemplateCard";
import templates from "../data/templates";

import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate();


  return (
    <>
      <Navbar />


      <Container maxWidth="lg">


        {/* Hero Section */}

        <Hero />



        {/* Call To Action */}

        <Box
          sx={{
            textAlign:"center",
            mt:5,
            mb:8
          }}
        >

          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Build Your Professional Resume Today
          </Typography>


          <Typography
            color="text.secondary"
            sx={{mt:1}}
          >
            Create, customize and download your resume in minutes.
          </Typography>


          <Button
            variant="contained"
            size="large"
            sx={{
              mt:3,
              px:5,
              py:1.5,
              borderRadius:3,
              textTransform:"none",
              fontWeight:"bold"
            }}
            onClick={() =>
              navigate("/details")
            }
          >
            Create Resume
          </Button>


        </Box>





        {/* Templates Section */}


        <Box
          id="templates"
          sx={{mb:8}}
        >

          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
          >
            Choose Your Resume Template
          </Typography>


          <Typography
            align="center"
            color="text.secondary"
            sx={{mt:2, mb:5}}
          >
            Select a professional design and create your resume easily.
          </Typography>



          <Grid
            container
            spacing={4}
            justifyContent="center"
          >

            {
              templates.map((template)=>(
                
                <Grid
                  item
                  key={template.id}
                >

                  <TemplateCard
                    template={template}
                  />

                </Grid>

              ))
            }


          </Grid>


        </Box>






        {/* Features */}


        <Box sx={{mb:8}}>


          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Why Choose Our Resume Builder?
          </Typography>



          <Grid
            container
            spacing={4}
            sx={{mt:3}}
          >


            {
              [
                {
                  title:"ATS Friendly",
                  desc:"Create resumes optimized for modern recruitment systems."
                },

                {
                  title:"Live Preview",
                  desc:"See your resume design instantly while editing."
                },

                {
                  title:"PDF Download",
                  desc:"Download your professional resume anytime."
                },

                {
                  title:"Responsive",
                  desc:"Works perfectly across all devices."
                }

              ].map((feature)=>(
                
                <Grid
                  item
                  xs={12}
                  md={3}
                  key={feature.title}
                >

                  <Paper
                    elevation={4}
                    sx={{
                      p:4,
                      textAlign:"center",
                      borderRadius:4,
                      height:"100%"
                    }}
                  >

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                    >
                      {feature.title}
                    </Typography>


                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{mt:2}}
                    >
                      {feature.desc}
                    </Typography>


                  </Paper>


                </Grid>

              ))
            }


          </Grid>


        </Box>


      </Container>

    </>
  );
}


export default Home;