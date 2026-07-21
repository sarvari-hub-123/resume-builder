import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { savePersonal } from "../../redux/resumeSlice";

function PersonalForm({ nextStep }) {
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    dispatch(
      savePersonal({
        ...data,
        photo,
      })
    );

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
        Enter your personal information.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Grid container spacing={3}>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src={photo}
              sx={{
                width: 120,
                height: 120,
                mb: 2,
              }}
            />

            <Button
              variant="outlined"
              component="label"
            >
              Upload Photo

              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handlePhoto}
              />
            </Button>

          </Grid>

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
              label="Job Title"
              fullWidth
              placeholder="Frontend Developer"
              {...register("jobTitle")}
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

          <Grid item xs={12}>
            <TextField
              label="Address"
              fullWidth
              {...register("address")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="LinkedIn URL"
              fullWidth
              {...register("linkedin")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="GitHub URL"
              fullWidth
              {...register("github")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Portfolio Website"
              fullWidth
              {...register("portfolio")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Professional Summary"
              fullWidth
              multiline
              rows={5}
              placeholder="Write a short professional summary..."
              {...register("summary")}
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                size="large"
                type="submit"
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