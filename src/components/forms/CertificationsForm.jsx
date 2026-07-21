import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveCertifications } from "../../redux/resumeSlice";
import { useNavigate } from "react-router-dom";

function CertificationsForm({ prevStep }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      certifications: [
        {
          certificate: "",
          organization: "",
          year: "",
          credentialId: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certifications",
  });

  const onSubmit = (data) => {
    dispatch(saveCertifications(data.certifications));
    navigate("/preview");
  };

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Certifications
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Add your certifications.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>

        {fields.map((field, index) => (
          <Box
            key={field.id}
            sx={{
              mb: 4,
              p: 3,
              border: "1px solid #ddd",
              borderRadius: 2,
            }}
          >

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Certificate Name"
                  {...register(`certifications.${index}.certificate`)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Organization"
                  {...register(`certifications.${index}.organization`)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Year"
                  {...register(`certifications.${index}.year`)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Credential ID"
                  {...register(`certifications.${index}.credentialId`)}
                />
              </Grid>

              {fields.length > 1 && (
                <Grid item xs={12}>
                  <Button
                    color="error"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </Grid>
              )}

            </Grid>

          </Box>
        ))}

        <Button
          variant="outlined"
          sx={{ mb: 3 }}
          onClick={() =>
            append({
              certificate: "",
              organization: "",
              year: "",
              credentialId: "",
            })
          }
        >
          + Add Certification
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            onClick={prevStep}
          >
            ← Back
          </Button>

          <Button
            variant="contained"
            type="submit"
          >
            Preview Resume
          </Button>
        </Box>

      </form>

    </Box>
  );
}

export default CertificationsForm;