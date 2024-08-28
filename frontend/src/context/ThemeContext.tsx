"use client"
import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(134, 59, 255, 1)'
        },
        secondary: {
            main: 'rgba(30, 30, 30, 1)'
        }
    },
    components: {        
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            }
        },
    },
    
});