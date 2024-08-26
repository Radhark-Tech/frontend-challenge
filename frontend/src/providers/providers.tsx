import { Theme } from "@/context/ThemeContext";
import UserProvider from "@/context/UserContext";
import { ThemeProvider } from "@mui/material";

export const Providers = ({ children }: {children: React.ReactNode}) => {
    return(
        <>
            <ThemeProvider theme={Theme}>
                <UserProvider>
                    {children}
                </UserProvider>
            </ThemeProvider>
        </>
    );
};