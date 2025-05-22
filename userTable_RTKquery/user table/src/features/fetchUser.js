import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const fetchUserApi = createApi({
  reducerPath: "fetchUser",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/response" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => "/",
      providesTags: ["User"],
      transformResponse: (res) => res.reverse(),
    }),
    addUser: build.mutation({
      query: (user) => ({
        url: `/`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: build.mutation({
      query: ({ id, name }) => ({
        url: "/" + id,
        method: "PATCH",
        body: { name },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = fetchUserApi;
