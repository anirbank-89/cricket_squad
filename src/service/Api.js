import axios from 'axios';

const URL = 'http://localhost:8000/cricketers';

export var getCricketers = async (id) => {
    id = id || '';

    return await axios.get(`${URL}/${id}`);
}

export const addCricketer = async (cricketer) => {
    return await axios.post(`${URL}`, cricketer);
}

export const editCricketer = async (id, cricketer) => {
    return await axios.put(`${URL}/${id}`, cricketer);
}

export const deleteCricketer = async (id) => {
    return await axios.delete(`${URL}/${id}`);
}