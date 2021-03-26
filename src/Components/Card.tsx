import * as React from "react";
import {
   PhotoCard,
   PhotoCardImage,
   PhotoCardTitle,
   PhotoCardDesc,
   PhotoCardTags,
   Author,
   By,
   PhotoCardTitleLink,
} from "../Styles";

export interface CardProps {
   photoTitle: string;
   author: string;
   url: string;
   description: string;
   tags: [];
   ownerId: string;
   imageId: string;
}

const Card = ({
   photoTitle,
   author,
   url,
   description,
   tags,
   ownerId,
   imageId,
}: CardProps) => {
   return (
      <PhotoCard>
         <PhotoCardImage src={url} />
         <PhotoCardTitle>
            <PhotoCardTitleLink
               href={`https://www.flickr.com/photos/${ownerId}/${imageId}`}
               target="_blank"
            >
               {photoTitle.length > 5
                  ? photoTitle.substring(0, 30) + " ..."
                  : photoTitle}
            </PhotoCardTitleLink>{" "}
            <By>by</By>{" "}
            <Author
               href={`https://www.flickr.com/people/${ownerId}`}
               target="_blank"
            >
               {author}
            </Author>
         </PhotoCardTitle>
         <PhotoCardDesc>
            {description.length > 5
               ? description.substring(0, 50) + " ..."
               : description}
         </PhotoCardDesc>
         {/* {handleTags()} */}
         <PhotoCardTags>
            {tags ? tags.toString().substring(0, 50) + " ..." : tags}
         </PhotoCardTags>
      </PhotoCard>
   );
};

export default Card;
