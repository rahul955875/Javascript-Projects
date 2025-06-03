import {createApi} from '@reduxjs/toolkit'

const myApi = createApi({
    reducerPath : 'usreApi',
    baseQuery : fetchBaseQuery({baseUrl : 'url'}),
    endPoints : (build)=>({
        getAllUser : build.query({
            query : ()=> '/'
        }),
        addUser : build.mutation({
            query : (user)=> ({
                url : '/user',
                method : 'Post',
                body : user,
            })
        })
    })
})