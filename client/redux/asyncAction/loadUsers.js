import {loadUsersAC} from "../form-reducer";

const fetchUsers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch(loadUsersAC(json))})

    }
}

export default fetchUsers;