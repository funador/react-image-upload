// express-form-data's types package doesn't augment Express.Request with
// the 'files' property its parse() middleware actually attaches at runtime.
declare namespace Express {
  interface Request {
    files?: Record<string, { path: string }>
  }
}
