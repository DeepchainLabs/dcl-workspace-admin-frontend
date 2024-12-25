const BACKEND_API_BASE_URL: any =
  process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL ||
  "https://api-workspace.deepchainlabs.com/api";

const BACKEND_API_PUBLIC_URL: any =
  process.env.NEXT_PUBLIC_BACKEND_API_PUBLIC_URL;
const NEXT_PUBLIC_IMAGE_API_URL: any = process.env.NEXT_PUBLIC_IMAGE_API_URL;
const IS_PRODUCTION: any =
  process.env.NEXT_PUBLIC_IS_PRODUCTION === "yes" ? true : false;
const FRONTEND_API_BASE_URL =
  process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL ||
  "https://workspace.deepchainlabs.com";
const AUTH_COOKIE_KEY = "wrksjvqiuwhviquevjdsvj";
const AUTH_USER_KEY = "x-user-id";
const AUTH_TENANT_KEY = "x-tenant-id";
const GOOGLE_CLIENT_ID: any = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_SECRET: any = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET_ID;
const STRIPE_SUCCESS_URL: any =
  process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL ||
  "https://workspace.deepchainlabs.com";
const STRIPE_CANCEL_URL: any =
  process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL ||
  "https://workspace.deepchainlabs.com";

const config = {
  BACKEND_API_BASE_URL,
  BACKEND_API_PUBLIC_URL,
  NEXT_PUBLIC_IMAGE_API_URL,
  IS_PRODUCTION,
  FRONTEND_API_BASE_URL,
  AUTH_COOKIE_KEY,
  AUTH_USER_KEY,
  AUTH_TENANT_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  STRIPE_SUCCESS_URL,
  STRIPE_CANCEL_URL,
};

export default config;
