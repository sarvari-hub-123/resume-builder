import {
  Box,
  Typography,
  Divider,
  Grid,
  Avatar,
  Chip,
} from "@mui/material";
import { useSelector } from "react-redux";

function ModernTemplate() {
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
      }}
    >
      <Grid container>

        {/* Left Sidebar */}

        <Grid item xs={4}>
          <Box
            sx={{
              background: "#0F172A",
              color: "white",
              minHeight: "297mm",
              p: 4,
            }}
          >

            <Avatar
              src={personal.photo}
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 3,
              }}
            />

            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
            >
              {personal.fullName}
            </Typography>

            <Typography
              align="center"
              sx={{ mb: 3 }}
            >
              {personal.jobTitle}
            </Typography>

            <Typography>{personal.email}</Typography>
            <Typography>{personal.phone}</Typography>
            <Typography>{personal.address}</Typography>

            <Divider
              sx={{
                my: 3,
                bgcolor: "rgba(255,255,255,0.3)",
              }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Skills
            </Typography>

            <Box
              sx={{
                mt: 2,
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
                  sx={{
                    bgcolor: "white",
                  }}
                />
              ))}
            </Box>

            <Box sx={{ mt: 4 }}>

              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Education
              </Typography>

              <Divider
                sx={{
                  my: 2,
                  bgcolor: "rgba(255,255,255,0.3)",
                }}
              />
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

            <Box sx={{ mt: 4 }}>

              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Certifications
              </Typography>

              <Divider
                sx={{
                  my: 2,
                  bgcolor: "rgba(255,255,255,0.3)",
                }}
              />

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

        {/* Right Side */}

        <Grid item xs={8}>
          <Box sx={{ p: 4 }}>

            <Typography
              variant="h4"
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
                    Tech Stack: {item.techStack}
                  </Typography>

                  <Typography variant="body2">
                    GitHub: {item.github}
                  </Typography>

                  <Typography variant="body2">
                    Live Demo: {item.liveDemo}
                  </Typography>

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

export default ModernTemplate;