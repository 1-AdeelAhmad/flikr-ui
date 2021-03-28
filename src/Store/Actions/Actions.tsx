import {
   LOAD_IMAGES_FAIL,
   LOAD_IMAGES_PENDING,
   LOAD_IMAGES_SUCCESS,
   UPDATE_PAGE,
   UPDATE_TAG,
} from "./ActionsTypes";
import axios from "axios";
import { Dispatch } from "redux";

// const apiKey = process.env.REACT_APP_API_KEY; // NOTE: Would Normally Place This KEY in the Back End and have the url point to the endpoint.
const apiKey = "7144f4f55381136dda25363b0d75d00c";

export const updateTag = (tag: string) => (dispatch: Dispatch) => {
   dispatch({
      type: UPDATE_TAG,
      payload: tag,
   });
};

export const getImages = (
   dispatch: Dispatch,
   page: number,
   tag: string
) => async () => {
   dispatch({ type: LOAD_IMAGES_PENDING });
   const getPage = page;

   const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&privacy_filter=1&safe_search=1&extras=description%2C+owner_name%2C+tags&per_page=30&page=${getPage}&format=json&nojsoncallback=1`;

   await axios.get(url).then((data) => {
      if (data.data.stat === "fail") {
         dispatch({
            type: LOAD_IMAGES_FAIL,
            payload: "Unable To Retrieve Images",
         });
      } else {
         dispatch({
            type: LOAD_IMAGES_SUCCESS,
            payload: data.data.photos.photo,
         });
      }
   });
};

export const nextPage = (currentPage: number) => (dispatch: Dispatch) => {
   dispatch({ type: UPDATE_PAGE, payload: currentPage });
};
