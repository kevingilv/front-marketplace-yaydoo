// import axios from "./../../services/axiosConfig";
import { IS_LOGGED, ID_USER, USER_EMAIL } from "../constants";
import axios from "./axiosConfig";

export async function createUserService(payload) {

    let response = await axios.post('user/create', payload);
    if (response.status === 200 && response.data.success) {
        loadRegisteredUser(response);
    }
    return response.data;
}

export async function loginUserService(payload) {
    const response = await axios.post('user/login', payload);
    if (response.status === 200 && response.data.success) {
        //loadRegisteredUser(response);
    }
    return response.data;
}

export async function singOutUserService() {
    sessionStorage.removeItem(IS_LOGGED);
    sessionStorage.removeItem(ID_USER);
    sessionStorage.removeItem(USER_EMAIL);
    window.location.reload();
}

function loadRegisteredUser(response) {
    sessionStorage.setItem(IS_LOGGED, true);
    sessionStorage.setItem(ID_USER, response.data.data.id);
    sessionStorage.setItem(USER_EMAIL, response.data.data.email);
}




