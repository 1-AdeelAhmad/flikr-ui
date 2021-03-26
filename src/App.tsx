import * as React from "react";

import TitleBar from "./Components/AppBar";
import ImageGallery from "./Components/ImageGallery";
import { useDispatch } from "react-redux";
import { updateTag } from "./Store/Actions/Actions";

const App = () => {
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(updateTag("mountain"));
   }, [dispatch]);

   return (
      <div>
         <TitleBar />
         <ImageGallery />
      </div>
   );
};

export default App;
