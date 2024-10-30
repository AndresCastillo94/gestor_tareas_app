"use client";

import { Provider } from 'react-redux';
import store  from './store/store';
import './globals.css';
import { ReactDOM } from "react";


const RootLayout = ({children}:{children: React.ReactNode}) => {
   

    return (
        <html lang="es"> 
          <body>
            <div id='modal'></div>
            <Provider store = {store}>
              <main>{children}</main>
            </Provider>
          </body>
        </html>
    );
};

export default RootLayout;