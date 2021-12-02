let initialState = {
    login: 'admin@admin.com',
    password: 'admin',
}

const formReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default formReducer;