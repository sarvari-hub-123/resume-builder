import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TemplateCard from "../components/TemplateCard";
import Footer from "../components/Footer";

import templates from "../data/templates";

import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import DevicesIcon from "@mui/icons-material/Devices";

function Home() {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg">

        {/* Hero Section */}
        <Hero />

        {/* Templates */}
        <Box id="templates" sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Choose Your Resume Template
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Select a professional design and create your resume easily.
          </Typography>

          <Grid
            container
            spacing={4}
            justifyContent="center"
          >
            {templates.map((template) => (
              <Grid item key={template.id}>
                <TemplateCard template={template} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Why Choose Our Resume Builder?
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Everything you need to build a professional resume.
          </Typography>

          <Grid container spacing={4}>

            <Grid item xs={12} md={6} lg={3}>
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: 5,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <DescriptionIcon
                  sx={{
                    fontSize: 55,
                    color: "#2563EB",
                    mb: 2,
                  }}
                />

                <Typography variant="h6" fontWeight="bold">
                  ATS Friendly
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Create resumes optimized for modern recruitment systems.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: 5,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <VisibilityIcon
                  sx={{
                    fontSize: 55,
                    color: "#2563EB",
                    mb: 2,
                  }}
                />

                <Typography variant="h6" fontWeight="bold">
                  Live Preview
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Preview your resume instantly while editing.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: 5,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <DownloadIcon
                  sx={{
                    fontSize: 55,
                    color: "#2563EB",
                    mb: 2,
                  }}
                />

                <Typography variant="h6" fontWeight="bold">
                  PDF Download
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Download your resume as a professional PDF with one click.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: 5,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <DevicesIcon
                  sx={{
                    fontSize: 55,
                    color: "#2563EB",
                    mb: 2,
                  }}
                />

                <Typography variant="h6" fontWeight="bold">
                  Responsive
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Works perfectly across desktop, tablet and mobile devices.
                </Typography>
              </Paper>
            </Grid>

          </Grid>
        </Box>

      </Container>

      <Footer />
    </>
  );
}

export default Home;