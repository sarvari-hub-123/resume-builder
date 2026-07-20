import { Box, Typography, Divider, Stack } from "@mui/material";
import { useSelector } from "react-redux";

function ResumeTemplate() {
  const {
    personal,
    experience,
    education,
    skills,
  } = useSelector((state) => state.resume);

  return (
    <Box
      id="resume"
      sx={{
        width: "100%",
        maxWidth: 750,
        minHeight: "1050px",
        margin: "auto",
        padding: 5,
        backgroundColor: "#fff",
        color: "#222",
      }}
    >

      {/* Header */}
      <Box sx={{ mb: 3 }}>

        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 1 }}
        >
          {personal.fullName || "Your Name"}
        </Typography>


        <Stack spacing={0.5}>
          {personal.email && (
            <Typography>
              Email: {personal.email}
            </Typography>
          )}

          {personal.phone && (
            <Typography>
              Phone: {personal.phone}
            </Typography>
          )}

          {personal.address && (
            <Typography>
              Address: {personal.address}
            </Typography>
          )}

          {personal.linkedin && (
            <Typography>
              LinkedIn: {personal.linkedin}
            </Typography>
          )}

          {personal.github && (
            <Typography>
              GitHub: {personal.github}
            </Typography>
          )}

        </Stack>

      </Box>


      <Divider />


      {/* Experience */}

      <Box sx={{ mt: 3 }}>

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          Professional Experience
        </Typography>


        <Typography fontWeight="bold">
          {experience.role || "Job Role"}
        </Typography>


        <Typography>
          {experience.company}
        </Typography>


        <Typography color="text.secondary">
          {experience.duration}
        </Typography>


        <Typography sx={{ mt: 1 }}>
          {experience.description}
        </Typography>

      </Box>



      <Divider sx={{ my: 3 }} />


      {/* Education */}

      <Box>

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          Education
        </Typography>


        <Typography fontWeight="bold">
          {education.degree}
        </Typography>


        <Typography>
          {education.college}
        </Typography>


        <Typography>
          Graduation Year: {education.year}
        </Typography>


        <Typography>
          Score: {education.percentage}
        </Typography>


      </Box>



      <Divider sx={{ my: 3 }} />


      {/* Skills */}

      <Box>

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          Skills
        </Typography>


        <Stack spacing={1}>

          {skills.skill1 && (
            <Typography>
              • {skills.skill1}
            </Typography>
          )}

          {skills.skill2 && (
            <Typography>
              • {skills.skill2}
            </Typography>
          )}

          {skills.skill3 && (
            <Typography>
              • {skills.skill3}
            </Typography>
          )}

        </Stack>

      </Box>


    </Box>
  );
}

export default ResumeTemplate;