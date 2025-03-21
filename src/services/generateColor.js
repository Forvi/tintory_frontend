import axios from 'axios'

const API_URL = 'https://localhost:7169/GenerateColor/'; // ЗДЕСЬ УКАЗЫАВЕТСЯ АКТУАЛЬНЫЙ МАРШРУТ ЗАПРОСА 

export const generateColor = async (quantity) => {
    try {
        let response = await axios.post(`${API_URL}?quantity=${quantity}`);
        return response.data;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
