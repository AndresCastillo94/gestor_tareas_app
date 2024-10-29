"use client";

import { Provider } from 'react-redux';
import store  from './store/store';
import './globals.css';


const RootLayout = ({children}:{children: React.ReactNode}) => {

    return (
        <html lang="es"> 
          <body>
            <Provider store = {store}>
              <main>{children}</main>
            </Provider>
          </body>
        </html>
    );
};

export default RootLayout;