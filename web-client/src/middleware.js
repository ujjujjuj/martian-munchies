import { NextResponse } from "next/server";
import { authRoutes, protectedRoutes } from "./routes/routes";

export function middleware(request) {
    const authToken = request.cookies.get("authToken");
    if (
        protectedRoutes.includes(request.nextUrl.pathname) &&
        !authToken
    ) {
        request.cookies.delete("authToken");
        const response = NextResponse.redirect(new URL("/login", request.url));
        request.cookies.delete("authToken");
        return response;
    }
    if (authRoutes.includes(request.nextUrl.pathname) && authToken) {
        return NextResponse.redirect(new URL("/profile", request.url));
    }
    return NextResponse.next();
}