import {
  Box,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { useSelector } from "react-redux";

function SimpleTemplate() {
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
        p: 5,
        boxShadow: 3,
      }}
    >

      {/* Header */}

      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
      >
        {personal.fullName}
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
      >
        {personal.jobTitle}
      </Typography>

      <Typography
        align="center"
        sx={{ mt: 1 }}
      >
        {personal.email} | {personal.phone}
      </Typography>

      <Typography
        align="center"
      >
        {personal.address}
      </Typography>

      <Typography
        align="center"
      >
        {personal.linkedin}
      </Typography>

      <Typography
        align="center"
      >
        {personal.github}
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Summary */}

      <Typography
        variant="h5"
        fontWeight="bold"
      >
        Professional Summary
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        {personal.summary}
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Education */}

      <Typography
        variant="h5"
        fontWeight="bold"
      >
        Education
      </Typography>
            <Divider sx={{ my: 2 }} />

      {education.map((item, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography fontWeight="bold">
            {item.degree}
          </Typography>

          <Typography>
            {item.college}
          </Typography>

          <Typography color="text.secondary">
            {item.year}
          </Typography>

          <Typography color="text.secondary">
            {item.percentage}
          </Typography>
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      {/* Experience */}

      <Typography
        variant="h5"
        fontWeight="bold"
      >
        Experience
      </Typography>

      <Divider sx={{ my: 2 }} />

      {experience.map((item, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography fontWeight="bold">
            {item.role}
          </Typography>

          <Typography>
            {item.company}
          </Typography>

          <Typography color="text.secondary">
            {item.duration}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            {item.description}
          </Typography>
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      {/* Projects */}

      <Typography
        variant="h5"
        fontWeight="bold"
      >
        Projects
      </Typography>

      <Divider sx={{ my: 2 }} />

      {projects.map((item, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography fontWeight="bold">
            {item.title}
          </Typography>

          <Typography color="text.secondary">
            Tech Stack: {item.techStack}
          </Typography>

          {item.github && (
            <Typography variant="body2">
              GitHub: {item.github}
            </Typography>
          )}

          {item.liveDemo && (
            <Typography variant="body2">
              Live Demo: {item.liveDemo}
            </Typography>
          )}

          <Typography sx={{ mt: 1 }}>
            {item.description}
          </Typography>
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      {/* Skills */}

      <Typography
        variant="h5"
        fontWeight="bold"
      >
        Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mt: 2,
        }}
      >
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            color="primary"
            variant="outlined"
          />
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Certifications */}

      <Typography
        variant="h5"
        fontWeight="bold"
      >
        Certifications
      </Typography>

      <Divider sx={{ my: 2 }} />

      {certifications.map((item, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography fontWeight="bold">
            {item.certificate}
          </Typography>

          <Typography>
            {item.organization}
          </Typography>

          <Typography color="text.secondary">
            {item.year}
          </Typography>
        </Box>
      ))}

    </Box>
  );
}

export default SimpleTemplate;