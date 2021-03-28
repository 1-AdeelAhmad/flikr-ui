import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { getImages, nextPage } from "../Store/Actions/Actions";
import { ImageState } from "../Store/State/State";
import { Gallery, Scroll } from "../Styles";
import Card from "./Card";

const ImageGallery = () => {
   const dispatch = useDispatch();

   const images = useSelector((state: ImageState) => state.flikrImages);
   const page = useSelector((state: ImageState) => state.page);
   const tag = useSelector((state: ImageState) => state.tag);

   React.useEffect(() => {
      if (images.length === 0) {
         dispatch(getImages(dispatch, page, tag));
      }
   }, [images, dispatch, page, tag]);

   const getNewPage = async () => {
      let newPage = page + 1;
      dispatch(nextPage(newPage));
      dispatch(getImages(dispatch, newPage, tag));
   };

   const card =
      images &&
      images.map((image, i) => {
         return (
            <Card
               key={i}
               photoTitle={image.title}
               author={image.ownername}
               url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
               description={
                  image.description._content
                     ? image.description._content
                     : "No Description Available"
               }
               ownerId={image.owner}
               imageId={image.id}
               tags={image.tags}
            />
         );
      });

   return (
      <>
         {images && (
            <Gallery>
               <InfiniteScroll
                  dataLength={images.length}
                  next={getNewPage}
                  hasMore={true}
                  style={{ display: "flex", flexDirection: "column-reverse" }}
                  loader={""}
                  endMessage={
                     <p style={{ textAlign: "center" }}>That's All For Now!</p>
                  }
               >
                  <Scroll>{card}</Scroll>
               </InfiniteScroll>
            </Gallery>
         )}
      </>
   );
};

export default ImageGallery;
