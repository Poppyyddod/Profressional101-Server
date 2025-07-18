declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string
        HTTP_PORT: number
        HTTPS_PORT: number
        HOST: string
        MYSQL_USER: string
        MYSQL_PASSWORD: string
        MYSQL_DATABASE: string
        SECRET_KEY: string
        REFRESH_KEY: string
        DISCORD_CHANNEL_NEW_CLIENT: string
        DISCORD_CHANNEL_NEW_ORDER: string
        DISCORD_CHANNEL_STATUS_CHANGED: string
        DISCORD_CHANNEL_DISPUTE_RAISED: string
        DISCORD_CHANNEL_SERVER_ERROR: string
    }
}
