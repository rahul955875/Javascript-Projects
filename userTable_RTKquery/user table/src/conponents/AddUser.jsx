import { Box, Button, TextField } from "@mui/material";

function AddUser({ isOpen, isId, setIsId, formik, setIsOpen }) {
  const { errors, resetForm, touched, handleSubmit } = formik;
  const handleCancel = () => {
    setIsOpen(false);
    resetForm();
    setIsId(null);
  };
  return (
    <Box
      sx={{
        display: isOpen ? "block" : "none",
        backgroundColor: "white",
        minWidth: "100%",
        minHeight: "100%",
        position: "fixed",
        marigin: 0,
        padding: 2,
        zIndex: 1000,
      }}
    >
      <Button
        variant="contained"
        onClick={handleCancel}
        sx={{ float: "right" }}
      >
        X
      </Button>
      <form
        className="row col-6"
        style={{
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 100,
          padding: "20px 40px",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            type="text"
            id="name"
            placeholder="Enter Your Name"
            // onChange={(e) => setInput(e.target.value)}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            {...formik.getFieldProps("name")}
            className="form-control"
            // required
            // minLength={3}
          />
          <div className="text-danger">{touched.name && errors.name}</div>
        </div>
        <div>
          <button type="submit" className="form-control btn btn-primary">
            {isId ? "Update User":"Add User" }
          </button>
        </div>
      </form>
    </Box>
  );
}

export default AddUser;
