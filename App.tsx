import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { Header } from './src/components/Header/Header'
import { RoutesList } from './src/Routes/Routes'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

export const App = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#342e2e',
            },
        },
    })
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={darkTheme}>
                    <BrowserRouter>
                        <Header />
                        <Routes>{RoutesList.map((route) => route)}</Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </>
    )
}
