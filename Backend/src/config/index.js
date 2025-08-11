export default {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "*",
    JWT_SECRET : process.env.JWT_SECRET
}