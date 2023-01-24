const config = {
    API_PATH: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8080',
    IMAGE_PATH: "users/image"
}

export default config