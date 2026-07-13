// Shape of a single upload result as returned by Cloudinary's uploader
// (see server/server.js) - only the fields this app actually uses.
export interface CloudinaryImage {
  public_id: string
  secure_url: string
}
