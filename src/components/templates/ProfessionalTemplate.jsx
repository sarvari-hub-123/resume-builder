import { Box, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";

function ProfessionalTemplate() {

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
        minHeight: "1050px",
        padding: 5,
        backgroundColor: "#fff",
      }}
    >

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        {personal.fullName || "Your Name"}
      </Typography>


      <Typography>
        {personal.email}
      </Typography>

      <Typography>
        {personal.phone}
      </Typography>


      <Divider sx={{ my: 3 }} />


      <Typography variant="h5" fontWeight="bold">
        Experience
      </Typography>

      <Typography fontWeight="bold">
        {experience.role}
      </Typography>

      <Typography>
        {experience.company}
      </Typography>

      <Typography>
        {experience.duration}
      </Typography>

      <Typography sx={{ mt: 1 }}>
        {experience.description}
      </Typography>


      <Divider sx={{ my: 3 }} />


      <Typography variant="h5" fontWeight="bold">
        Education
      </Typography>

      <Typography>
        {education.degree}
      </Typography>

      <Typography>
        {education.college}
      </Typography>


      <Divider sx={{ my: 3 }} />


      <Typography variant="h5" fontWeight="bold">
        Skills
      </Typography>

      <Typography>
        • {skills.skill1}
      </Typography>

      <Typography>
        • {skills.skill2}
      </Typography>

      <Typography>
        • {skills.skill3}
      </Typography>


    </Box>
  );
}

export default ProfessionalTemplate;