import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
    auth_token: null,
}

function reducer(state, action) {
    if (action.type === "setToken") {
        state = { ...state, auth_token: action.payload }
    }
    return state;
}

export const AuthProvider = ({ children, defaultState = initialState }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return (
        <AuthContext.Provider value={[ state, dispatch ]}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;