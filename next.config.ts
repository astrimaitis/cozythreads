import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env = {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
    NEXT_PUBLIC_STRIPE_SECRET_KEY = 
    NEXT_PUBLIC_SUCCESS_URL=http://localhost:3000
  }
};

export default nextConfig;
