import { useState } from "react";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import {
  useAddUserMutation,
  useGetAllUserQuery,
  useUpdateUserMutation,
} from "../features/fetchUserSlice";
import AddUser from "./AddUser";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useFormik } from "formik";
import ConfirmBox from "./ConfirmBox";
import { USER_TABLE_FIELDS } from "../utils/const";

const UserTable = () => {
  const [addUser] = useAddUserMutation();
  const [udpateUser] = useUpdateUserMutation();
  const { data, isLoading, error } = useGetAllUserQuery();

  const [input, setInput] = useState("");
  const [isId, setIsId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleEdit = (user) => {
    setIsOpen(true);
    setIsId(user.id);
    formik.setFieldValue("name", user.name);
    formik.setErrors({ errors: {} });
  };

  const handleDelete = (id) => {
    setOpenModal(true);
    setUserId(id);
  };

  // formik
  // const validate = useCallback((values) => {
  //   const errors = {};
  //   if (!values.name.trim()) {
  //     errors.name = "Enter Your Name";
  //   } else if (values.name.length < 3) {
  //     errors.name = "Name should be atleast 3 charachters long.";
  //   }
  //   return errors;
  // }, []);

  const handleSubmit = async (values, { setErrors, setFieldValue }) => {
    // e.preventDefault();
    if (isId) {
      await udpateUser({ id: isId, name: values.name });
      setIsId(null);
    } else {
      await addUser({ id: crypto.randomUUID(), name: values.name });
    }
    setIsOpen(false);
    setFieldValue("name", "");
    setErrors({ errors: {} });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    // validate,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3)
        .test(
          "is valid",
          () => "invalid Name (Name should be string Only)",
          (value) => /[a-z]/gi.test(value)
        )
        .required("Enter Your Name."),
    }),
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  // console.log(formik)
  if (error) {
    return <p className="display-4">somthing went wrong!!!</p>;
  }
  if (isLoading) {
    return (
      <Typography variant="h3" sx={{ textAlign: "center", mt: 10 }}>
        Loading...
      </Typography>
    );
  }
  return (
    <>
      <AddUser
        isId={isId}
        formik={formik}
        setIsId={setIsId}
        textfield={[input, setInput]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setFieldValue={formik.setFieldValue}
      />
      <ConfirmBox
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={"You want to delete this user?"}
        userId={userId}
      />

      <Box sx={{ minWidth: 700, maxWidth: 1000, mx: "auto", mt: 4, p: 4 }}>
        <h2>UserTable</h2>
        <Button
          variant="contained"
          sx={{ float: "inline-end" }}
          size="large"
          startIcon={<AddIcon />}
          onClick={() => setIsOpen(true)}
        >
          Create User
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {USER_TABLE_FIELDS.map((th) => (
                  <TableCell key={th}>{th}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      {user.id.length > 5
                        ? user.id.slice(0, 5) + "..."
                        : user.id}
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        // startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(user.id)}
                      >
                        <DeleteIcon />
                      </Button>

                      <Button
                        variant="contained"
                        color="inherit"
                        onClick={() => handleEdit(user)}
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UserTable;
