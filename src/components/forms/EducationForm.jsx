import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveEducation } from "../../redux/resumeSlice";

function EducationForm({ nextStep, prevStep }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(saveEducation(data));
    nextStep();
  };

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Education Details
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Add your academic background to complete your resume.
      </Typography>


      <form onSubmit={handleSubmit(onSubmit)}>

        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField
              label="College / University Name"
              fullWidth
              {...register("college")}
            />
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField
              label="Degree"
              placeholder="Example: B.Tech Computer Science"
              fullWidth
              {...register("degree")}
            />
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField
              label="Passing Year"
              placeholder="Example: 2026"
              fullWidth
              {...register("year")}
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              label="Percentage / CGPA"
              placeholder="Example: 8.5 CGPA"
              fullWidth
              {...register("percentage")}
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

export default EducationForm;