import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./Routes/routes";
import { theme } from "./Theme/theme";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Preloader from "./Components/Preloader"; // Import Preloader
import "@fontsource/montez";
import { useState } from "react";
import CustomCursor from "./Components/CustomCursor ";

function App() {
  const [loading, setLoading] = useState<boolean>(true); // Track Preloader state

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {loading ? (
            // <Preloader onFinish={() => setLoading(false)}/>
            <Preloader videoSrc="./dspreloader.mp4" onEnd={() => setLoading(false)} />
          ) : (
            <RouterProvider router={router} />
          )}
        </QueryClientProvider>
          <CustomCursor />
        {/* <NewCursor /> */}
        <ToastContainer position="top-right" autoClose={5000} />
      </ThemeProvider>
      
    </Box>
  );
}

export default App;
