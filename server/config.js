exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://react-image-upload.surge.sh'
  : 'http://localhost:3000'