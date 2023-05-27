import {$authHost, $host} from "./index";

export const fetchWorker = async () => {
    const {data} = await $host.get('api/worker')
    return data
}

export const fetchOneWorker = async (id) => {
    const {data} = await $host.get('api/worker/'+ id)
    return data
}