import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import PageContextProvider from 'src/context/contextProvider'
import './index.css'
import router from "./router/router";
import Header from 'src/components/header';
import Homepage from 'src/pages/homepage';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PageContextProvider>
		<RouterProvider router={router}>
			<Header />
			<Homepage />
		</RouterProvider>
		</PageContextProvider>
	</React.StrictMode>,
)
