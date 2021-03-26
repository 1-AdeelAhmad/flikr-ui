import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { getImages, nextPage } from "../Store/Actions/Actions";
import { ImageState } from "../Store/State/State";
import { Gallery, Loading } from "../Styles";
import Card from "./Card";

const ImageGallery = () => {
   const dispatch = useDispatch();

   const images = useSelector((state: ImageState) => state.flikrImages);
   const isError = useSelector((state: ImageState) => state.error);
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
            <InfiniteScroll
               dataLength={images.length}
               next={getNewPage}
               hasMore={true}
               loader={
                  isError ? (
                     <Loading>{isError}</Loading>
                  ) : (
                     <Loading>Loading...</Loading>
                  )
               }
               endMessage={
                  <p style={{ textAlign: "center" }}>That's All For Now!</p>
               }
            >
               <Gallery>{card}</Gallery>
            </InfiniteScroll>
         )}
      </>
   );
};

export default ImageGallery;
