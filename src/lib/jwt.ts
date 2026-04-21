"use server";

import crypto from "crypto";
import { IUserPayload } from "@/models/User";

const SECRET_KEY =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
const REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key";

// Simple JWT implementation without external dependencies
function base64UrlEncode(str: string): string {
  return Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

function base64UrlDecode(str: string): string {
  const padding = "=".repeat((4 - (str.length % 4)) % 4);
  return Buffer.from(
    str.replace(/-/g, "+").replace(/_/g, "/") + padding,
    "base64",
  ).toString();
}

function createHmacSignature(data: string, secret: string): string {
  return base64UrlEncode(
    crypto.createHmac("sha256", secret).update(data).digest("base64"),
  );
}

function createToken(
  payload: IUserPayload,
  secret: string,
  expiresIn: number,
): string {
  const header = base64UrlEncode(
    JSON.stringify({ alg: "HS256", typ: "JWT" }),
  );
  const now = Math.floor(Date.now() / 1000);
  const tokenPayload = base64UrlEncode(
    JSON.stringify({
      ...payload,
      iat: now,
      exp: now + expiresIn,
    }),
  );

  const signature = createHmacSignature(`${header}.${tokenPayload}`, secret);
  return `${header}.${tokenPayload}.${signature}`;
}

function verifyTokenSignature(token: string, secret: string): boolean {
  const [header, payload, signature] = token.split(".");
  const expectedSignature = createHmacSignature(
    `${header}.${payload}`,
    secret,
  );
  return signature === expectedSignature;
}

export const signToken = (payload: IUserPayload): string => {
  // 7 days in seconds
  return createToken(payload, SECRET_KEY, 7 * 24 * 60 * 60);
};

export const signRefreshToken = (payload: IUserPayload): string => {
  // 30 days in seconds
  return createToken(payload, REFRESH_SECRET, 30 * 24 * 60 * 60);
};

export const verifyToken = (token: string): IUserPayload | null => {
  try {
    const [, payloadStr] = token.split(".");
    if (!payloadStr) return null;

    if (!verifyTokenSignature(token, SECRET_KEY)) {
      return null;
    }

    const payloadJson = base64UrlDecode(payloadStr);
    const payload = JSON.parse(payloadJson) as IUserPayload & { exp: number };

    // Check expiration
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch (error) {
    return null;
  }
};

export const verifyRefreshToken = (
  token: string,
): IUserPayload | null => {
  try {
    const [, payloadStr] = token.split(".");
    if (!payloadStr) return null;

    if (!verifyTokenSignature(token, REFRESH_SECRET)) {
      return null;
    }

    const payloadJson = base64UrlDecode(payloadStr);
    const payload = JSON.parse(payloadJson) as IUserPayload & { exp: number };

    // Check expiration
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch (error) {
    return null;
  }
};

export const decodeToken = (token: string): IUserPayload | null => {
  try {
    const [, payloadStr] = token.split(".");
    if (!payloadStr) return null;

    const payloadJson = base64UrlDecode(payloadStr);
    const payload = JSON.parse(payloadJson) as IUserPayload;

    return payload;
  } catch (error) {
    return null;
  }
};
