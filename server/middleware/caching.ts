import { NextFunction, Request, Response } from "express";

export function assetsCacheMiddleware(req: Request, res: Response, next: NextFunction) {
  const pathname = req.path,
    rFonts = /\/static\/.+\.(woff2?|eot|ttf|otf)$/i,
    rFavicons = /\/favicon\.ico$/i,
    rImages = /\/static\/images\/.+\.(png|svg|jpg)$/i;

  if (rFonts.test(pathname) || rFavicons.test(pathname) || rImages.test(pathname)) {
    const ttlSeconds = 31536000; // 1 Year
    res.setHeader("Cache-Control", "public,max-age=" + ttlSeconds);
  }

  next();
}
