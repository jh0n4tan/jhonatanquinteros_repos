import dotenv from 'dotenv';
dotenv.config()

export default {
    PORT: process.env.PORT,
    DATABASE_URL:`postgresql://${process.env.COCKROACH_USER}:${process.env.COCKROACH_PASS}@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/${process.env.COCKROACH_DB}?sslmode=verify-full&options=--cluster%3Dharbor-hornet-3359`
}