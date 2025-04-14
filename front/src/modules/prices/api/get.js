import axios from 'axios';

const host = import.meta.env.VITE_URL

export async function getActive() {
    try {
        return await axios.get(`${host}/price/active`);
    }
    catch (error) {
        console.error('Ошибка при получении услуг:', error);
        throw error;
    }
}

export async function getForClient() {
    try {
        return await axios.get(`${host}/price/forClients`);
    }
    catch (error) {
        console.error('Ошибка при получении услуг для клиентов:', error);
        throw error;
    }
}

export async function getForCorparation() {
    try {
        return await axios.get(`${host}/price/forCorparations`);
    }
    catch (error) {
        console.error('Ошибка при получении услуг для корпаративных клиентов:', error);
        throw error;
    }
}