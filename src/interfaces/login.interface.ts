export type ItemsLoginOption = {
    items: AccessResponse,
    status_code: number
    success: boolean
}

export interface LoginInterface {
    e_mail: string
    password: string
}

export type AccessResponse = {
    access_token: string
}