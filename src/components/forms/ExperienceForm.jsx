import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveExperience } from "../../redux/resumeSlice";

function ExperienceForm({ nextStep, prevStep }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(saveExperience(data));
    nextStep();
  };

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Work Experience
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Add your professional experience and highlight your skills.
      </Typography>


      <form onSubmit={handleSubmit(onSubmit)}>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>
            <TextField
              label="Company Name"
              fullWidth
              {...register("company")}
            />
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField
              label="Job Role"
              fullWidth
              {...register("role")}
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              label="Duration"
              placeholder="Example: Jan 2024 - Dec 2025"
              fullWidth
              {...register("duration")}
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              label="Job Description"
              fullWidth
              multiline
              rows={5}
              placeholder="Describe your responsibilities and achievements..."
              {...register("description")}
            />
          </Grid>


          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >

              <Button
                variant="outlined"
                size="large"
                onClick={prevStep}
                sx={{
                  px: 4,
                  py: 1.2,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                ← Back
              </Button>


              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  px: 5,
                  py: 1.2,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Next →
              </Button>

            </Box>
          </Grid>

        </Grid>

      </form>

    </Box>
  );
}

export default ExperienceForm;