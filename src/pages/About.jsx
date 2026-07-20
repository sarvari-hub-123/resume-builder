import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
} from "@mui/material";

import Navbar from "../components/Navbar";


function About() {

  const technologies = [
    "React.js",
    "Redux Toolkit",
    "Material UI",
    "React Router",
    "JavaScript",
    "jsPDF",
    "HTML5",
    "CSS3",
  ];


  const features = [
    "Create professional resumes easily",
    "Multiple resume templates",
    "Live resume preview",
    "Download resume as PDF",
    "Responsive design",
    "User-friendly form experience",
  ];


  return (
    <>

      <Navbar />


      <Container maxWidth="lg">


        {/* Heading */}

        <Box
          sx={{
            textAlign:"center",
            mt:6,
            mb:6
          }}
        >

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            About Resume Builder
          </Typography>


          <Typography
            color="text.secondary"
            sx={{
              mt:2,
              fontSize:18
            }}
          >
            A modern web application that helps users create
            professional resumes quickly and easily.
          </Typography>


        </Box>





        <Grid
          container
          spacing={4}
        >


          {/* Project Info */}

          <Grid
            item
            xs={12}
            md={6}
          >

            <Paper
              elevation={3}
              sx={{
                p:4,
                borderRadius:4,
                height:"100%"
              }}
            >

              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                Project Overview
              </Typography>


              <Typography
                color="text.secondary"
              >
                Resume Builder allows users to enter their
                personal information, education details,
                work experience and skills to generate a
                professional resume.
              </Typography>


              <Typography
                color="text.secondary"
                sx={{mt:2}}
              >
                Users can choose different templates,
                preview their resume instantly and download
                it as a PDF file.
              </Typography>


            </Paper>

          </Grid>





          {/* Features */}

          <Grid
            item
            xs={12}
            md={6}
          >

            <Paper
              elevation={3}
              sx={{
                p:4,
                borderRadius:4
              }}
            >

              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                Key Features
              </Typography>



              {
                features.map((feature)=>(
                  <Typography
                    key={feature}
                    sx={{
                      mt:1
                    }}
                  >
                    ✓ {feature}
                  </Typography>
                ))
              }


            </Paper>

          </Grid>



        </Grid>





        {/* Technologies */}


        <Paper
          elevation={3}
          sx={{
            mt:5,
            p:4,
            borderRadius:4
          }}
        >

          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
          >
            Technologies Used
          </Typography>


          <Box
            sx={{
              display:"flex",
              gap:1,
              flexWrap:"wrap",
              mt:2
            }}
          >

            {
              technologies.map((tech)=>(
                <Chip
                  key={tech}
                  label={tech}
                />
              ))
            }


          </Box>


        </Paper>



      </Container>


    </>
  );
}


export default About;