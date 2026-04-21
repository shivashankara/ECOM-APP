# JWT Authentication Implementation Guide

This document outlines the JWT authentication system implemented in your e-commerce application.

## Overview

The authentication system uses JSON Web Tokens (JWT) for secure authentication, with support for access tokens (short-lived) and refresh tokens (long-lived).

## Setup

### 1. Environment Variables

Create a `.env.local` file in your project root (copy from `.env.local.example`):

```env
JWT_SECRET=your-secret-key-change-in-production
JWT_REFRESH_SECRET=your-refresh-secret-key-change-in-production
NEXT_PUBLIC_API_URL=http://localhost:3000
MANGODB_URI=mongodb://localhost:27017/ecom-app
```

### 2. Database Security

Ensure your MongoDB has a `users` collection with indexes:

```javascript
db.users.createIndex({ email: 1 }, { unique: true })
```

## API Endpoints

### 1. Login
**Endpoint:** `POST /api/login`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "accessToken": "eyJhbGc...",
  "refreshToken": "eyJhbGc...",
  "user": {
    "userId": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "user@example.com"
  }
}
```

### 2. Register
**Endpoint:** `POST /api/register`

**Request:**
```json
{
  "email": "newuser@example.com",
  "name": "Jane Doe",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "userId": "507f1f77bcf86cd799439011",
  "accessToken": "eyJhbGc...",
  "refreshToken": "eyJhbGc...",
  "user": {
    "name": "Jane Doe",
    "email": "newuser@example.com"
  }
}
```

### 3. Refresh Token
**Endpoint:** `POST /api/refresh-token`

**Request:**
```json
{
  "refreshToken": "eyJhbGc..."
}
```

**Response:**
```json
{
  "message": "Token refreshed successfully",
  "accessToken": "eyJhbGc..."
}
```

### 4. Logout
**Endpoint:** `POST /api/logout`

**Response:**
```json
{
  "message": "Logout successful"
}
```

## Usage in Components

### 1. Using the `useAuth` Hook

```typescript
'use client';

import { useAuth } from '@/CustomHook/useAuth';

export function LoginForm() {
  const { login, isLoading, error } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login({ email, password });
      // Redirect to home or dashboard
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    // Your login form JSX
  );
}
```

### 2. Protecting Routes (Client-Side)

Wrap your protected page with the `ProtectedRoute` component:

```typescript
// src/app/checkout/page.tsx
'use client';

import { ProtectedRoute } from '@/Components/ProtectedRoute';
import CheckoutPage from './CheckoutContent';

export default function Page() {
  return (
    <ProtectedRoute>
      <CheckoutPage />
    </ProtectedRoute>
  );
}
```

### 3. Using the API Client

```typescript
import { apiClient } from '@/lib/apiClient';

// The API client automatically:
// - Attaches access token to requests
// - Refreshes token on 401 response
// - Clears auth on token expiry

const response = await apiClient.api.get('/api/protected-endpoint');
```

## Redux Integration

### Accessing Auth State

```typescript
import { useSelector } from 'react-redux';

function MyComponent() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state: any) => state.auth
  );

  return (
    <>
      {isAuthenticated && <p>Welcome, {user?.name}!</p>}
    </>
  );
}
```

### Auth Actions Available

- `loginSuccess` - Set user and tokens after successful login/registration
- `loginFailure` - Set error message on login failure
- `logout` - Clear auth state
- `setLoading` - Set loading state
- `restoreAuth` - Restore auth from localStorage
- `updateAccessToken` - Update access token after refresh
- `clearError` - Clear error message

## Token Storage

### Frontend Storage Strategy

- **Access Token**: Stored in localStorage for quick access
- **Refresh Token**: Stored in localStorage and set as HttpOnly cookie
- **User Info**: Stored in localStorage for quick access

### Security Considerations

1. **HttpOnly Cookies**: Refresh tokens are set as HttpOnly cookies to prevent XSS attacks
2. **SameSite Policy**: Cookies use SameSite=Strict to prevent CSRF attacks
3. **Token Expiry**: Access tokens expire in 7 days, refresh tokens in 30 days
4. **Password Hashing**: Passwords are hashed using bcryptjs with 10 salt rounds

## Token Lifecycle

```
1. User logs in/registers
   ↓
2. Server generates access token (7 days) and refresh token (30 days)
   ↓
3. Tokens stored in localStorage and refresh token in HttpOnly cookie
   ↓
4. Access token used for API requests
   ↓
5. When access token expires, refresh token used to get new access token
   ↓
6. If refresh token expires, user must login again
```

## Protected Routes (Server-Side)

The middleware in `middleware.ts` protects the following routes:
- `/checkout`
- `/cart`

Add more routes by updating the `protectedRoutes` array in `middleware.ts`.

## Error Handling

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| "Invalid email or password" | Wrong credentials | Verify inputs |
| "User already exists" | Email already registered | Use different email or login |
| "Invalid refresh token" | Refresh token expired | User must login again |
| "All fields are required" | Missing fields | Provide all required fields |

## Best Practices

1. **Always use HTTPS** in production
2. **Rotate JWT secrets regularly**
3. **Add rate limiting** to auth endpoints
4. **Implement CAPTCHA** on login/register for additional security
5. **Add email verification** for new registrations
6. **Implement 2FA** for sensitive operations
7. **Use strong password validation** requirements
8. **Monitor for suspicious login attempts**

## File Structure

```
src/
├── lib/
│   ├── jwt.ts              # JWT utilities
│   ├── apiClient.ts        # API client with token management
│   └── mangodb.ts          # MongoDB connection
├── models/
│   └── User.ts             # User interface/model
├── app/api/
│   ├── login/route.ts      # Login endpoint
│   ├── register/route.ts   # Register endpoint
│   ├── logout/route.ts     # Logout endpoint
│   └── refresh-token/route.ts # Token refresh endpoint
├── Redux/Slices/
│   └── authSlice.ts        # Auth Redux state
├── CustomHook/
│   └── useAuth.ts          # Authentication hook
└── Components/
    └── ProtectedRoute.tsx  # Protected route wrapper
middleware.ts              # Route protection middleware
```

## Troubleshooting

### Issue: Token not persisting after refresh
**Solution**: Ensure localStorage is enabled in browser and not cleared on logout

### Issue: Infinite redirect loop
**Solution**: Check that protected routes are correctly configured and the ProtectedRoute component is wrapping the right pages

### Issue: CORS errors
**Solution**: Ensure NEXT_PUBLIC_API_URL matches your API server and CORS headers are properly configured

### Issue: Token refresh not working
**Solution**: Verify JWT_REFRESH_SECRET environment variable is set and matches server-side configuration

## Next Steps

1. Configure JWT_SECRET and JWT_REFRESH_SECRET in `.env.local`
2. Set up MongoDB connection
3. Test authentication endpoints using Postman or similar tool
4. Integrate `useAuth` hook in login/register components
5. Wrap protected pages with `ProtectedRoute` component
6. Deploy with proper environment variables
