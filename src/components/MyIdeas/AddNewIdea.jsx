import React from "react";
import styles from "./MyIdeas.module.css";

const AddNewIdea = (props) => {
  return props.newMyIdea.map((element, index) => (
    <div
      key={element.key + index}
      className={styles.idea}
      ref={props.slideEl}
      onClick={() => {
        props.setcurrentSlideIndex(index);
      }}
      onDoubleClick={() => {
        props.doneMyIdea(element.key);
        if ((props.newMyIdea.length = props.currentSlideIndex + 1)) {
          props.prevSlide();
        }
      }}
    >
      <p>{element.activity}</p>
      {props.currentSlideIndex !== index || (
        <div className={styles.cardFooter}>
          <hr />
          <p>{element.type.charAt(0).toUpperCase() + element.type.slice(1)}</p>
        </div>
      )}
    </div>
  ));
};
export default AddNewIdea;
