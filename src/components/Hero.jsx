import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2563EB, #4F46E5)",
        color: "#fff",
        py: 10,
        textAlign: "center",
        borderRadius: 4,
        mt: 4,
        mb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
        >
          Build Your Dream Resume
        </Typography>

        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            mb: 4,
          }}
        >
          Create beautiful, ATS-friendly resumes in just a few
          minutes using professionally designed templates.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#fff",
            color: "#2563EB",
            px: 5,
            py: 1.5,
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
          onClick={() => navigate("/details")}
        >
          Create Resume
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;