import { NextResponse } from "next/server";
import { authRoutes, protectedRoutes } from "./routes/routes";

export function middleware(request) {
    const authToken = request.cookies.get("auth-token");
    if (
        protectedRoutes.includes(request.nextUrl.pathname) &&
        !authToken
    ) {
        request.cookies.delete("auth-token");
        const response = NextResponse.redirect(new URL("/login", request.url));
        request.cookies.delete("auth-token");
        return response;
    }
    if (authRoutes.includes(request.nextUrl.pathname) && authToken) {
        return NextResponse.redirect(new URL("/profile", request.url));
    }
    return NextResponse.next();
}