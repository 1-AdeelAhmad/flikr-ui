import * as React from "react";
import TitleBar from "./Components/AppBar";
import ImageGallery from "./Components/ImageGallery";
import { useDispatch } from "react-redux";
import { updateTag } from "./Store/Actions/Actions";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/themes";
import { Container } from "./Styles";

const App = () => {
   const dispatch = useDispatch();
   const [isDarkMode, setIsDarkMode] = React.useState(false);

   React.useEffect(() => {
      dispatch(updateTag("mountain"));
   }, [dispatch]);

   const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
   };

   return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
         <Container>
            <TitleBar toggleTheme={toggleTheme} />
            <ImageGallery />
         </Container>
      </ThemeProvider>
   );
};

export default App;
