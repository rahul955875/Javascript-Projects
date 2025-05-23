import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { useDeleteUserMutation } from "../features/fetchUserSlice";

const ConfirmBox = ({ openModal, setOpenModal, title, userId }) => {
  const [deleteUser] = useDeleteUserMutation();

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
              deleteUser(userId);
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
