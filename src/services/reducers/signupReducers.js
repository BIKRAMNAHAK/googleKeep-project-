const signupState = {
    users: null,
    user: null,
    errMsg: null,
    isSignup: false,
    isLogin : false
};

function signupReducers(state = signupState, action) {
    switch (action.type) {
        case 'NEWUSER':
            return {
                ...state,
                users: action.payload,
                isSignup: true
            };
        case 'SIGNUPERR':
            return {
                ...state,
                errMsg: action.payload,
                isSignup: false
            };

        case 'USERLOGIN':
        return {
            ...state,
            users: action.payload,
            isLogin: true
        }
        case 'LOGINERR':
            return {
                ...state,
                errMsg: action.payload,
                isLogin : false,
            }

        case "LOGOUT" :
            return{
                ...state,
                isLogin : false,
            }
        default:
            return state;
    }
}

export default signupReducers;
