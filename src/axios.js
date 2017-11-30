import axios from 'axios';

//for specific instance not globally.
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;