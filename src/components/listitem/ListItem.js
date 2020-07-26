import React from "react";
import "./ListItem.css";
import ReactModal from "react-modal";

const ListItem = props => {
  const results = props.image;

  return (
    <div style={{ padding: "5px" }}>
      <img
        src={results.urls.regular}
        alt={results.alt_description}
        onClick={props.onOpenModal}
      />
      <ReactModal
        isOpen={props.showModal}
       
        className="Modal"
        overlayClassName="Overlay"
        onRequestClose={props.onCloseModal}
      >
        <div className="modal-picture">
          <img
            src={results.urls.full}
            alt={results.alt_description}
            style={{ width: "400px", height: "400px" }}
          />
          <button>
            <span
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Download
            </span>
          </button>
          <button onClick={props.onCloseModal}>
            <span
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Close
            </span>
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default ListItem;
