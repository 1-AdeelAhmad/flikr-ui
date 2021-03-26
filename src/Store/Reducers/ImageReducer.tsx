import {
   LOAD_IMAGES_FAIL,
   LOAD_IMAGES_PENDING,
   LOAD_IMAGES_SUCCESS,
   UPDATE_PAGE,
   UPDATE_TAG,
} from "../Actions/ActionsTypes";
import { ImageState } from "../State/State";

export interface Action<T, P = {}> {
   type: T;
   payload: P;
}
export const defaultState: ImageState = {
   flikrImages: [],
   error: "",
   isLoading: false,
   page: 1,
   tag: "",
};

const getImages = (
   state = defaultState,
   action: Action<string, any>
): ImageState => {
   switch (action.type) {
      case UPDATE_TAG:
         return { ...state, tag: action.payload };
      case LOAD_IMAGES_PENDING:
         return { ...state, isLoading: true, error: "" };
      case LOAD_IMAGES_SUCCESS:
         return {
            ...state,
            flikrImages: state.flikrImages.concat(action.payload),
            isLoading: false,
         };
      case LOAD_IMAGES_FAIL:
         return { ...state, error: action.payload, isLoading: false };
      case UPDATE_PAGE:
         return { ...state, page: action.payload };
      default:
         return state;
   }
};

export default getImages;
