export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://react-image-upload-server.vercel.app'
  : 'http://localhost:8080'