import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Obtener el token de las cookies de la solicitud
    const token = request.cookies.get('authToken')?.value;

    // Si el token no existe, redirige al login
    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Permitir la continuación de la solicitud si el token está presente
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/tasks'], // Definir aquí solo las rutas protegidas
};
