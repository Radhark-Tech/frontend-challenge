"use client";

import type React from "react";

import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ptBR } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#9c27b0",
      },
      secondary: {
        main: "#424242",
      },
      background: {
        default: "#f5f5f5",
      },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  },
  ptBR
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
