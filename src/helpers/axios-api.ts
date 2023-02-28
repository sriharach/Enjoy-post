import { accessTokenStore } from './local-storage'
import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_SERVICE_API

export default axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: [function (data, header) {
        const tok = accessTokenStore.load()
        // if (!tok || typeof tok === 'undefined')
        //     throw new Error('valid token.')

        header.Authorization = "Bearer " + tok
        return JSON.stringify(data)
    }]
})
