import { Box, Button, Typography } from "@mui/material";

const ErrorElement = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2">404 NOT FOUND</Typography>
      <Button
        sx={{ mt: 4 }}
        variant="outlined"
        size="large"
        onClick={() => window.history.back()}
      >
        Back
      </Button>
    </Box>
  );
};

export default ErrorElement;
