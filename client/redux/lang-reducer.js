let initialState = {
    ru: 'Русский',
    en: 'Английский',
    de: 'Deutsch',
    es: 'Español',
    it: 'Italiano',
}

const langReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default langReducer;