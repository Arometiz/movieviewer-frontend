import { loginPending, loginSucces, loginError } from "../actions/loginAction";

function login(loginData){
    return dispatch => {
        const serializedData = JSON.stringify(loginData);
        dispatch(loginPending());
        fetch('http://localhost:3030/user/login', {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: serializedData,
        })
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(loginSucces(res.token));
            return res;
        })
        .catch(error => {
            dispatch(loginError(error));
        })
    }
}

export default login;