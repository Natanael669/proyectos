import React, { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UseContext'
import axios from 'axios'

const UserState = (props) => {
    const estadoInicial = {
        user: [],
        userSelected: null,
    }

    const [state, dispatch] = useReducer(UserReducer, estadoInicial)

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        // en la misma consola podemos ver de donde proviene (data.data)
        //console.log(res.data.data);
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }

    const getSelectedUsers = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id)
        //console.log(res.data.data);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

    return (
        <UserContext.Provider value={
            { user: state.user, userSelected: state.userSelected, getUsers, getSelectedUsers }
        }>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState