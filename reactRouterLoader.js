const router = createBrowserRouter([
  {
    path: "/:id",
    element: App,
    children: [{ index: true, element: Home, loader: fetchLoader }],
  },
]);

async function fetchLoader({ params }) {
  const req = await fetch(`/users/${params.id}`);
  const res = await req.json();
  return res;
}

function Home() {
  const user = useLoaderData();
  return <h1>{user.name}</h1>;
}

//fetch before rendering the route
