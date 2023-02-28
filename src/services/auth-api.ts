/* eslint-disable import/no-unresolved */
import axiosClient from '@/helpers/axios-api'
import { ItemsLoginOption, LoginInterface } from '@/interfaces/login.interface'
import { CallbackLoginInterface, CallbackResponse } from '@/interfaces/oauth.interface'


export const LoginApi = async (payload: LoginInterface) => {
    const response = await axiosClient.post<ItemsLoginOption>('/auth/login', payload)
    if (response.status !== 200) {
        throw new Error('Something went wrong. Network response was not OK')
    }

    return response.data
}

export const CallbackLogin = async (payload: CallbackLoginInterface) => {
    const response = await axiosClient.post<CallbackResponse>('/auth/oauth/callback', payload)
    if (response.status !== 200) {
        throw new Error('Something went wrong. Network response was not OK')
    }

    return response.data
}