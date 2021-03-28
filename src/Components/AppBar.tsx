import * as React from "react";
import { AppBar, Button, Title } from "../Styles";

export interface AppBarProps {
   toggleTheme: () => void;
}

const TitleBar = ({ toggleTheme }: AppBarProps) => {
   return (
      <AppBar>
         <Title>Flikr Photo Stream</Title>
         <Button onClick={toggleTheme}>Toggle Dark Mode</Button>
      </AppBar>
   );
};

export default TitleBar;
