import React from "react";
import styles from "./Ideas.module.css";
import NewIdea from "./newIdea";

const Ideas = (props) => {
  return (
    <div className={styles.ideasBlock}>
      <h2>Choose fresh ideas to do:</h2>
      <div className={styles.caruselBlock}>
        <NewIdea getIdeas={props.getIdeas} newMyIdea={props.newMyIdea} />
        <NewIdea getIdeas={props.getIdeas} newMyIdea={props.newMyIdea} />
        <NewIdea getIdeas={props.getIdeas} newMyIdea={props.newMyIdea} />
        <NewIdea getIdeas={props.getIdeas} newMyIdea={props.newMyIdea} />
      </div>
    </div>
  );
};

export default Ideas;
