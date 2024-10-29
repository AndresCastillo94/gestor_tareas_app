import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const inLoggedIn: boolean = false;

export function middleware(request: NextRequest){

    // if(!inLoggedIn && request.url === "http://127.0.0.1:3000"){
    //     return NextResponse.redirect(new URL('/auth/login',request.url));
    // }
    return NextResponse.redirect(new URL('/auth/login',request.url));
    

}

export const config = {
    matcher:['/']
}