import React, { useEffect, useState } from "react";
import styles from "./Ideas.module.css";

let NewIdea = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [idea, setIdea] = useState();
  const loadingData = () => {
    fetch("http://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then(
        (result) => {
          if (props.newMyIdea.length < 40) {
            if (idea && idea.key === result.key) {
              loadingData();
            }

            props.newMyIdea.forEach((element) => {
              if (element.key === result.key) {
                loadingData();
              }
            });

            setIsLoaded(true);
            setIdea(result);
          } else {
            alert("Ideas is over");
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    loadingData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className={styles.idea}
        onDoubleClick={() => {
          props.getIdeas(idea);
          loadingData();
        }}
      >
        <p key={idea.key}>{idea.activity}</p>
        <div className={styles.cardFooterr}>
          <hr />
          <p>{idea.type.charAt(0).toUpperCase() + idea.type.slice(1)}</p>
        </div>
      </div>
    );
  }
};

export default NewIdea;
