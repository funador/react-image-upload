# React Image Upload

![React Image Upload](https://cdn-images-1.medium.com/max/1600/1*2a5Zidam3OI-Ep19-tT1AQ.gif)

Drag-free image upload with React and a small Node server - files go straight to Cloudinary, and the client just gets back URLs to render. Client and server are both TypeScript.

## Demo

[Live demo](https://react-image-upload-client.vercel.app)

## Medium post

[Simple Image Upload with React](https://medium.com/p/cc96430eaece)

## Getting Started

```shell
git clone https://github.com/funador/react-image-upload.git

cd react-image-upload/client
npm i && npm start

# open another terminal tab
cd react-image-upload/server
npm i && npm run dev
```

### Cloudinary

This project needs a [Cloudinary](https://cloudinary.com/users/register/free) account (the free tier is generous enough for a demo). Grab your keys from the Cloudinary dashboard and drop them into `server/.env`:

```shell
# server/.env
CLOUD_NAME=your_cloud_name
API_KEY=your_cloud_key
API_SECRET=your_cloud_secret
```

That's it for setup.

### Issues

Something not working? Please [open an issue](https://github.com/funador/react-image-upload/issues) or submit a PR.
