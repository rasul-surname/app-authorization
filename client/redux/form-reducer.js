const ADD_USER = 'ADD_USER';
const LOAD_USERS = 'LOAD_USERS';

let initialState = {
    allUsers: [
        {role: 'Super Admin', login: 'admin@admin.com', password: 'admin'},
        {role: 'Admin', login: 'rasul.surname@yandex.ru', password: 'qwerty'},
    ],
}

const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_USERS:
            return {...state,
                allUsers: [
                    ...state.allUsers,
                    ...action.payload.map(item => {
                        item['role'] = 'Subscriber';
                        item['login'] = item['email'];
                        item['password'] = item['username'];

                        delete item['email'];
                        delete item['username'];

                        return item;
                    })]
            }
        case ADD_USER:
            const newUser = {
                role: 'Subscriber',
                login: action.login,
                password: action.password,
            }
            return {
                ...state,
                allUsers: [...state.allUsers, newUser],
            }
        default:
            return state;
    }
}

export default formReducer;

export const addUserAC = (login, password) => ({type: ADD_USER, login, password});
export const loadUsersAC = (payload) => ({type: LOAD_USERS, payload});