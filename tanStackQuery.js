const fetchUsers = async () => {
  const response = await fetch("api/users");
  return response.json();
};
//fetching
const UsersList = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isError) return <h4>Something went wrong!!!</h4>;
  if (isLoading) return <h4>Loading...</h4>;
  return (
    <div>{data && data.map((user) => <h4 key={user.id}>{user.name}</h4>)}</div>
  );
};

//mutation

export const AddUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newUser) =>
      fetch("api/users/", {
        method: "POST",
        body: JSON.stringify(newUser),
      }),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = { name: form.get("name") };
    mutation.mutate(formData);
  };
  if (mutation.isError) return <h4>something went wrong</h4>;
  return (
    <form onSubmit={handleSubmit} id="userForm">
      <input type="text" name="name" id="" />
      <button type="submit">
        {mutation.isLoading ? "submiting..." : "submit"}
      </button>
    </form>
  );
};

// update User
const UpdateUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (updatedUser) =>
      fetch("api/user/" + updatedUser.id, {
        method: "PATCH",
        body: JSON.stringify({ name: updatedUser.name }),
      }),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = { id: form.get("id"), name: form.get("name") };
    mutation.mutate(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="id" />
      <input type="text" placeholder="update name" />
      <button type="submit">submit</button>
    </form>
  );
};

// delte user

const DeleteUserBtn = (baseurl, userId, Tags) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (userId) =>
      fetch(baseurl + userId, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries([Tags]);
    },
  });
  return (
    <button onClick={() => mutation.mutate(userId)}>
      {mutation.isLoading ? "Deleting..." : "Delete"}
    </button>
  );
};
