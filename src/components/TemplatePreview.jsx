import { Box, Typography } from "@mui/material";

function TemplatePreview({ color }) {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: color,
          color: "#fff",
          p: 1,
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="bold"
        >
          John Doe
        </Typography>

        <Typography variant="caption">
          Software Engineer
        </Typography>
      </Box>

      {/* Body */}
      <Box sx={{ p: 1.5 }}>
        <Typography
          variant="caption"
          fontWeight="bold"
        >
          EXPERIENCE
        </Typography>

        <Box
          sx={{
            height: 4,
            background: "#ddd",
            my: 0.5,
          }}
        />

        <Typography
          variant="caption"
          fontWeight="bold"
        >
          EDUCATION
        </Typography>

        <Box
          sx={{
            height: 4,
            background: "#ddd",
            my: 0.5,
          }}
        />

        <Typography
          variant="caption"
          fontWeight="bold"
        >
          SKILLS
        </Typography>

        <Box
          sx={{
            height: 4,
            background: "#ddd",
            mt: 0.5,
          }}
        />
      </Box>
    </Box>
  );
}

export default TemplatePreview;