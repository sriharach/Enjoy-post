const ACCESS_TOKEN_KEY = 'access_token'
const STATE_KEY = 'state'

export const accessTokenStore = {
    load: () => localStorage.getItem(ACCESS_TOKEN_KEY) || undefined,
    set: (newAccessToken: string) => localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken),
    reset: () => localStorage.removeItem(ACCESS_TOKEN_KEY),
}

export const stateStore = {
    load: () => localStorage.getItem(STATE_KEY) || undefined,
    set: (newState: string) => localStorage.setItem(STATE_KEY, newState),
    reset: () => localStorage.removeItem(STATE_KEY),
}

export const resetUserAuthLocalStorage = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
}
