import {
  Box,
  Typography,
  Divider,
  Grid,
  Avatar,
  Chip,
} from "@mui/material";
import { useSelector } from "react-redux";

function ProfessionalTemplate() {
  const {
    personal,
    education,
    experience,
    projects,
    skills,
    certifications,
  } = useSelector((state) => state.resume);

  return (
    <Box
      id="resume"
      sx={{
        width: "210mm",
        minHeight: "297mm",
        background: "#fff",
        mx: "auto",
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      {/* Header */}

      <Box
        sx={{
          background: "#1E3A8A",
          color: "white",
          p: 4,
        }}
      >
        <Grid container spacing={3} alignItems="center">

          <Grid item xs={3}>
            <Avatar
              src={personal.photo}
              sx={{
                width: 120,
                height: 120,
                border: "4px solid white",
              }}
            />
          </Grid>

          <Grid item xs={9}>

            <Typography
              variant="h3"
              fontWeight="bold"
            >
              {personal.fullName}
            </Typography>

            <Typography sx={{ mt: 1 }}>
              {personal.jobTitle}
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Email: {personal.email}
            </Typography>

            <Typography>
              Phone: {personal.phone}
            </Typography>

            <Typography>
              Address: {personal.address}
            </Typography>

            <Typography>
              LinkedIn: {personal.linkedin}
            </Typography>

            <Typography>
              GitHub: {personal.github}
            </Typography>

            <Typography>
              Portfolio: {personal.portfolio}
            </Typography>

          </Grid>

        </Grid>

      </Box>

      <Grid container>

        {/* Left Column */}

        <Grid item xs={4}>

          <Box
            sx={{
              background: "#F8FAFC",
              minHeight: "100%",
              p: 3,
            }}
          >
                        <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
            >
              Skills
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>

            <Box sx={{ mt: 5 }}>

              <Typography
                variant="h6"
                fontWeight="bold"
                color="primary"
              >
                Education
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {education.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>

                  <Typography fontWeight="bold">
                    {item.degree}
                  </Typography>

                  <Typography variant="body2">
                    {item.college}
                  </Typography>

                  <Typography variant="body2">
                    {item.year}
                  </Typography>

                  <Typography variant="body2">
                    {item.percentage}
                  </Typography>

                </Box>
              ))}

            </Box>

            <Box sx={{ mt: 5 }}>

              <Typography
                variant="h6"
                fontWeight="bold"
                color="primary"
              >
                Certifications
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {certifications.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>

                  <Typography fontWeight="bold">
                    {item.certificate}
                  </Typography>

                  <Typography variant="body2">
                    {item.organization}
                  </Typography>

                  <Typography variant="body2">
                    {item.year}
                  </Typography>

                </Box>
              ))}

            </Box>

          </Box>

        </Grid>

        {/* Right Column */}

        <Grid item xs={8}>

          <Box sx={{ p: 4 }}>

            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
            >
              Professional Summary
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography color="text.secondary">
              {personal.summary}
            </Typography>

            <Box sx={{ mt: 5 }}>

              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
              >
                Experience
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {experience.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>

                  <Typography fontWeight="bold">
                    {item.role}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.company}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.duration}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {item.description}
                  </Typography>

                </Box>
              ))}

            </Box>

            <Box sx={{ mt: 5 }}>

              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
              >
                Projects
              </Typography>

              <Divider sx={{ mb: 2 }} />
                          {projects.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>

                  <Typography fontWeight="bold">
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    <strong>Tech Stack:</strong> {item.techStack}
                  </Typography>

                  {item.github && (
                    <Typography variant="body2">
                      <strong>GitHub:</strong> {item.github}
                    </Typography>
                  )}

                  {item.liveDemo && (
                    <Typography variant="body2">
                      <strong>Live Demo:</strong> {item.liveDemo}
                    </Typography>
                  )}

                  <Typography sx={{ mt: 1 }}>
                    {item.description}
                  </Typography>

                </Box>
              ))}

            </Box>

          </Box>

        </Grid>

      </Grid>

    </Box>
  );
}

export default ProfessionalTemplate;
          