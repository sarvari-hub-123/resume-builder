import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { savePersonal } from "../../redux/resumeSlice";

function PersonalForm({ nextStep }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(savePersonal(data));
    nextStep();
  };

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Personal Information
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Enter your personal details to begin building your resume.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              fullWidth
              {...register("fullName", {
                required: "Full Name is required",
              })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              fullWidth
              {...register("email", {
                required: "Email is required",
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Phone Number"
              fullWidth
              {...register("phone")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Address"
              fullWidth
              {...register("address")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="LinkedIn Profile"
              fullWidth
              {...register("linkedin")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="GitHub Profile"
              fullWidth
              {...register("github")}
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  px: 5,
                  py: 1.3,
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

export default PersonalForm;