interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly PORT: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}