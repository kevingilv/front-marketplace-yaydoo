// import axios from "./../../services/axiosConfig";
import axios from "./axiosConfig";


export async function createUserService(payload) {

    const response = await axios.post('user/create', payload);

    //TODO: Meter el ID en la sesión si se creo el usuario de manera correcta

    return response.data;
}

export async function loginUserService(payload) {

    const response = await axios.post('user/login', payload);

    //TODO: Meter el ID en la sesión si se creo el usuario de manera correcta

    return response.data;
}




