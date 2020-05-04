export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCES = "LOGIN_SUCCES";
export const LOGIN_ERROR = "LOGIN_ERROR";

export function loginPending() {
    return{
        type: LOGIN_PENDING
    }
}

export function loginSucces(token){
    const SerializedToken = JSON.stringify(token);
    localStorage.setItem('token', SerializedToken);
    return{
        type: LOGIN_SUCCES
    }
}

export function loginError(error){
    return{
        type: LOGIN_ERROR,
        error: error
    }
}