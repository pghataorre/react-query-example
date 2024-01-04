import {useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {getusers, adduser} from '../../apiCall';

const UserList = () => {

    const queryClient= useQueryClient();

    const getUsersQuery = useQuery({
        queryKey: ['users'],
        queryFn: (param) => {
            console.log(param)
            return getusers()
        },
    });

    const postAddUsersQuery = useMutation({
        mutationFn: () => adduser(),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries(['users']);
            // console.log('VARR', variables)
            console.log(data)
            context.push(data)
            console.log("CONTEXT", context)
        },
        onMutate: variables => {
            return getUsersQuery.data
        }
    })


    if (getUsersQuery.isLoading) return (<p>LOADING ...........</p>);
    if (getUsersQuery.isError) return (<p>ERROR STOP HERE</p>);

   return (
    <div>
        <p>In new component</p>
        <ul>
        {getUsersQuery.data.map((user) => {
            return (
                <p key={`${user.id}`}>{user.name}</p>
            )
        })}
        </ul>
        <button disabled={postAddUsersQuery.isLoading} onClick={() => postAddUsersQuery.mutate()}>click me</button>
    </div>
   ) 
}

export default UserList;