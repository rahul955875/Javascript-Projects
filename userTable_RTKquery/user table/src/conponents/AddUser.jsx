import { useCallback } from "react";
import {
  useAddUserMutation,
  useUpdateUserMutation,
} from "../features/fetchUser";
import { useFormik } from "formik";
function AddUser({ textfield, isId, setIsId }) {
  const [input, setInput] = textfield;

  const [addUser] = useAddUserMutation();
  const [udpateUser] = useUpdateUserMutation();

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.name.trim()) {
      errors.name = "Enter Your Name";
    } else if (values.name.length < 3) {
      errors.name = "Name should be atleast 3 charachters long.";
    }
    return errors;
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    // e.preventDefault();
    if (isId) {
      udpateUser({ id: isId, name: values.name });
      //   console.log(isId, input);
      setIsId(null);
    } else {
      addUser({ id: crypto.randomUUID(), name: values.name });
    }
    resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validate,
    validateOnChange : false,
    onSubmit: handleSubmit,
  });
  console.log(formik);

  return (
    <div className="mb-4">
      <form className="row col-6" onSubmit={formik.handleSubmit}>
        <div className="col-4">
          <input
            type="text"
            id="name"
            placeholder="enter name"
            // onChange={(e) => setInput(e.target.value)}
            onChange={formik.handleChange}
            value={formik.values.name}
            className="form-control"
            // required
            // minLength={3}
          />
        </div>
        <div className="col-3">
          <button type="submit" className="form-control btn btn-primary">
            {!isId ? "Add User" : "Update User"}
          </button>
        </div>
      </form>
      <div className="text-danger">{formik.errors?.name}</div>
    </div>
  );
}

export default AddUser;
