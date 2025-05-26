import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ConfirmBox from "./ConfirmBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectProduct } from "../Features/SelectedProductSlice";
const PRODUCTS_TABLE_FIELDS = [
  "ID",
  "Title",
  "Description",
  "Price",
  "Rating",
  "Actions",
];

const ProductList = () => {
  const productsData = useSelector((state) => state.products.products);
  const [openModal, setOpenModal] = useState(false);
  const [productId, setProudctId] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectdProduct = useSelector((state) => state.selectedProduct);

  const handleEdit = (product) => {
    dispatch(selectProduct(product));
    console.log(selectdProduct);
    navigate("/create-products");
  };
  return (
    <>
      <Box sx={{ minWidth: 700, maxWidth: 1000, mx: "auto", mt: 4, p: 4 }}>
        <h2>Product List</h2>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {PRODUCTS_TABLE_FIELDS.map((th) => (
                  <TableCell key={th}>{th}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {productsData &&
                productsData.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      {product.id.length > 5
                        ? product.id.slice(0, 5) + "..."
                        : product.id}
                    </TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.rating}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            setProudctId(product.id);
                            setOpenModal(true);
                          }}
                        >
                          <DeleteIcon />
                        </Button>

                        <Button
                          variant="contained"
                          color="inherit"
                          onClick={() => handleEdit(product)}
                        >
                          <EditIcon />
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ConfirmBox
          title={"Delete this product?"}
          openModal={openModal}
          setOpenModal={setOpenModal}
          productId={productId}
        />
      </Box>
    </>
  );
};

export default ProductList;
