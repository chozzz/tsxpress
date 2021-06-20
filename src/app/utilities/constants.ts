export const IS_PROD = process.env.NODE_ENV === "production";
export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_TEST = process.env.NODE_ENV === "test";

// Apps
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const APP_TITLE = process.env.NEXT_PUBLIC_APP_TITLE || "";

// Metas
export const META_URL = process.env.NEXT_PUBLIC_META_URL || APP_URL;
export const META_TITLE = process.env.NEXT_PUBLIC_META_TITLE || APP_TITLE;
export const META_DESCRIPTION = process.env.NEXT_PUBLIC_META_DESCRIPTION || "";
export const META_TWITTER = process.env.NEXT_PUBLIC_META_TWITTER || "@";
export const META_KEYWORDS = process.env.NEXT_PUBLIC_META_KEYWORDS || "";

// Socials
export const SOCIAL_FACEBOOK = process.env.NEXT_PUBLIC_APP_SOCIAL_FACEBOOK || "";
export const SOCIAL_LINKEDIN = process.env.NEXT_PUBLIC_APP_SOCIAL_LINKEDIN || "";
export const SOCIAL_IG = process.env.NEXT_PUBLIC_APP_SOCIAL_IG || "";
export const SOCIAL_TWITTER = process.env.NEXT_PUBLIC_APP_SOCIAL_TWITTER || "";

// Api Endpoints
export const MOCK_API_PORT = process.env.NEXT_PUBLIC_APP_MOCK_ENDPOINT || "";

// Query methods
export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";
