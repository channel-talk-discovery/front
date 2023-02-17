import React, {useState} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainTabs from "./Tabs";
import CardContainer from "./CardContainer";

const theme = createTheme();

export default function Main() {
    const [tab, setTab] = useState(0) 

    const handleTabChange = (newTab) => {
        setTab(newTab)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <MainTabs handleTabChange={handleTabChange} initialTab={tab}/>
                <CardContainer tab={tab}/>
            </main>
        </ThemeProvider>
    );
}

