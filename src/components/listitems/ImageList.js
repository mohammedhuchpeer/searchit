import React from "react";
import ListItem from "../listitem/ListItem";
import "./ImageList.css";

const ImageList = props => {
  const imgs = props.images.map(image => {
    return (
      <ListItem
        key={image.id}
        image={image}
        showModal={props.showModal}
        onOpenModal={props.onOpenModal}
        onCloseModal={props.onCloseModal}
      />
    );
  });
  return (
    <div className="pages">
      {imgs}
    </div>
  );
};

export default ImageList;
