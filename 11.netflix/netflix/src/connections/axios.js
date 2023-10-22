import axios from 'axios';
import { THEMOVIEDB_BASEURL } from '../constants/constants';

const axiosInstance = axios.create({
    baseURL: THEMOVIEDB_BASEURL
});

export default axiosInstance;
