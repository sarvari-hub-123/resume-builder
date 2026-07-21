import { Box, Typography, Container, Grid } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt: 10,
        py: 6,
        background: "#0F172A",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#60A5FA"
            >
              ResumeBuilder
            </Typography>

            <Typography sx={{ mt: 2, opacity: 0.8 }}>
              Create professional ATS-friendly resumes in minutes.
              Choose a template, fill in your details and download a
              beautiful PDF instantly.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>

            <Typography sx={{ mt: 2 }}>Home</Typography>
            <Typography>Templates</Typography>
            <Typography>About</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Features
            </Typography>

            <Typography sx={{ mt: 2 }}>ATS Friendly</Typography>
            <Typography>Live Preview</Typography>
            <Typography>PDF Download</Typography>
          </Grid>

        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 5,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography sx={{ opacity: 0.7 }}>
            © 2026 ResumeBuilder. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;