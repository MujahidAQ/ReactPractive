import { APIS } from '../Constants';
import axios from 'axios';
export const getTodos = async () => {
    try {
        const response = await axios.get(`${APIS.GET_TODOS}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
