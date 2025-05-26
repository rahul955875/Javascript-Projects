import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { addProuduct, updateProduct } from "../Features/productSlice";
import { useNavigate } from "react-router-dom";
import { deSelecteProduct } from "../Features/SelectedProductSlice";

const AddProduct = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: selectedProduct.title || "",
      description: selectedProduct.description || "",
      price: selectedProduct.price || "",
      rating: selectedProduct.rating || "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      title: yup.string().required("Must Enter Prouct Title").min(3),
      description: yup.string().required().min(5),
      price: yup.number().required().min(0),
      rating: yup.number().required().min(1).max(5),
    }),
    onSubmit: (values, { resetForm }) => {
      //   console.log(values);
      if (selectedProduct.id) {
        dispatch(updateProduct({ ...values, id: selectedProduct.id }));
      } else {
        dispatch(addProuduct({ ...values, id: crypto.randomUUID() }));
      }

      dispatch(deSelecteProduct());
      resetForm();
      navigate("/");
    },
  });
  const { getFieldProps, errors, touched, handleSubmit } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} sx={{ maxWidth: 700, mx: "auto" }}>
          <h2>{selectedProduct.id ? "Update Product" : "Add Product"}</h2>
          <Grid size={12}>
            <TextField
              id="title"
              {...getFieldProps("title")}
              type="text"
              placeholder="Enter product title"
              fullWidth
            />
            <p style={{ color: "red" }}>{touched.title && errors.title}</p>
          </Grid>
          <Grid size={12}>
            <TextField
              id="description"
              {...getFieldProps("description")}
              type="text"
              placeholder="Enter product description"
              fullWidth
            />
            <p style={{ color: "red" }}>
              {touched.description && errors.description}
            </p>
          </Grid>
          <Grid size={12}>
            <TextField
              id="price"
              {...getFieldProps("price")}
              type="number"
              placeholder="Enter product price"
              fullWidth
            />
            <p style={{ color: "red" }}>{touched.price && errors.price}</p>
          </Grid>
          <Grid size={12}>
            <TextField
              id="rating"
              {...getFieldProps("rating")}
              type="number"
              placeholder="Enter product rating"
              fullWidth
            />
            <p style={{ color: "red" }}>{touched.rating && errors.rating}</p>
          </Grid>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button type="submit" size="large" variant="contained">
              {selectedProduct.id ? "Update Product" : "Add Product"}
            </Button>
            {selectedProduct.id ? (
              <Button
                type="submit"
                size="large"
                color="error"
                variant="contained"
                onClick={() => {
                  dispatch(deSelecteProduct());
                  navigate("/");
                }}
              >
                Cancel
              </Button>
            ) : null}
          </Box>
        </Grid>
      </form>
    </>
  );
};

export default AddProduct;
