"use client";

import { Provider } from 'react-redux';
import store  from './store/store';
import Link from 'next/link';
import './globals.css';


const RootLayout = ({children}:{children: React.ReactNode}) => {

    return (
        <html lang="es"> 
          <body>
            <nav>
              <ul>
                <Link href="/store">
                  <li>Logout</li>
                </Link>
              </ul>
            </nav>
            <Provider store = {store}>
              <main className="app-container">{children}</main>
            </Provider>
          </body>
        </html>
    );
};

export default RootLayout;