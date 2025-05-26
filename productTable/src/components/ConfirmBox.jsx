import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeItem } from "../Features/productSlice";

const ConfirmBox = ({ openModal, setOpenModal, title, productId }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="confirm-box"
      >
        <DialogTitle id="confirm-box">{title}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              if (productId) {
                console.log(productId);
                dispatch(removeItem(productId));
              }
              setOpenModal(false);
            }}
          >
            Yes
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmBox;
