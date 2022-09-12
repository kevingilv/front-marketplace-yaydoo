// import axios from "./../../services/axiosConfig";
import axios from "./axiosConfig";


export async function createProductService(payload) {
    const response = await axios.post('product/create', payload);
    return response.data;
}

export async function getAllProductService(payload) {
    const response = await axios.get('product/get-all', payload);
    return response.data;
}






