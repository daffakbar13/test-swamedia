import axios from "axios";

const instance = axios.create({
    baseURL: 'https://masak-apa.tomorisakura.vercel.app',
    // timeout: 1000
    
})

export const call = instance