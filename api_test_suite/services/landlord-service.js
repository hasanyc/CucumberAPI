import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
    retries: 10,
});


export const createNewLandlord = async () => {
    const { localhost: { baseURL }, headers } = CONFIG.envConfig;
    const url = `${baseURL}/landlords`;
    return axios.get(url, { headers }).catch((err) => {
        throw new Error(`Endpoint is invalid ${err.response.status}`);
    });
};
