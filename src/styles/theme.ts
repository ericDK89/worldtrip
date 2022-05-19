import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    yellow: {
      "500": "#FFBA08",
    },
    gray: {
      "100": "#F5F8FA",
      "200": "#DADADA",
      "300": "#F5F5F5",
      "400": "#999999",
      "500": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body:{
        bg: "gray.200"
      }
    }
  }
});
