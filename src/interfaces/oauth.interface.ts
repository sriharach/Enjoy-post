export interface CallbackLoginInterface {
    code: string
    state: string
}

export type CAllbackItems = {
    user_name: string
    id: string
    e_mail: string
    profile_name: string
    activate: number
    picture: string
    is_oauth: boolean
    access_token: string
}

export type CallbackResponse = {
    items: CAllbackItems,
    status_code: number
    success: boolean
}