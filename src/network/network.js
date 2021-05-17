import axios from 'axios';
export function request(obtions) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: "http://152.136.185.210:7878/api/m5",
            timeout: 8000


        })
        instance.interceptors.response.use(res => res.data)

        instance(obtions)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })

}