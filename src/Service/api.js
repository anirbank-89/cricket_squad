import axios from 'axios';

const url = "http://localhost:8080";

export const getCricketers = async (id)=>{
    id = id || '';
    return await axios.get(`${url}/${id}`);// http://localhost:8000<id>
}

export const addCricketer = async (cricketer)=>{
    return await axios.post(`${url}/add`, cricketer);
}

export const editCricketer = async (id,cricketer)=>{
    return await axios.put(`${url}/${id}`, cricketer);
}

export const deleteCricketer = async (id)=>{
    return await axios.delete(`${url}/${id}`);
}