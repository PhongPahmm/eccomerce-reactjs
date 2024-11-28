

const INITIAL_STATE = {
    account: {
        accessToken: '',
        refreshToken: '',
        username: '',
        role: ''
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, account: {
                    accessToken: action?.payload?.loginResponse?.accessToken,
                    refreshToken: action?.payload?.loginResponse?.refreshToken,
                    username: action?.payload?.loginResponse?.username,
                    role: action?.payload?.loginResponse?.role
                },
                isAuthenticated: true,
            };
        default: return state;
    }
};

export default userReducer;