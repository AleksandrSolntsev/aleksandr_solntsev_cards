import React, { useRef, useState } from "react";
import styles from "./MyIdeas.module.css";
import { dataApi } from "../../API/api.js";
import AddNewIdea from "./AddNewIdea";

const MyIdeas = (props) => {
  let [currentSlideIndex, setcurrentSlideIndex] = useState(0);
  const slideEl = useRef(null);

  const nextSlide = () => {
    if (currentSlideIndex < props.newMyIdea.length - 1) {
      setcurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setcurrentSlideIndex(0);
    }
  };
  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setcurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setcurrentSlideIndex(props.newMyIdea.length - 1);
    }
  };

  let stepSlide = 0;
  if (slideEl && slideEl.current && slideEl.current.offsetWidth) {
    stepSlide =
      -slideEl.current.offsetWidth * currentSlideIndex - 60 * currentSlideIndex;
  }

  const sendData = () => {
    dataApi.sendData(props.newMyIdea, props.achievments);
    localStorage.clear();
  };
  const getData = async () => {
    const resIdeas = await dataApi.getIdeasData();
    props.setMyIdea(resIdeas);
    const resAchivs = await dataApi.getAchivsData();
    props.setAchievments(resAchivs);
  };

  return (
    <div className={styles.ideasBlock}>
      <h2>Choose fresh ideas to do:</h2>
      <div className={styles.navigateKeys}>
        {!!props.newMyIdea.length && (
          <div
            className={styles.triangleLeft}
            onClick={() => {
              prevSlide();
            }}
          ></div>
        ) }

        <div className={styles.ideasBlockNavigate}>
          <div
            className={styles.caruselBlock}
            style={{ transform: `translateX(${stepSlide}px)` }}
          >
            <AddNewIdea
              newMyIdea={props.newMyIdea}
              slideEl={slideEl}
              setcurrentSlideIndex={setcurrentSlideIndex}
              currentSlideIndex={currentSlideIndex}
              doneMyIdea={props.doneMyIdea}
              prevSlide={prevSlide}
            />
          </div>
        </div>
        {!!props.newMyIdea.length && (
          <div
            className={styles.triangleRight}
            onClick={nextSlide}
          ></div>
        )}
      </div>
      <p>
        {props.newMyIdea.length ? currentSlideIndex + 1 : 0}/
        {props.newMyIdea.length}
      </p>
      <div className={styles.storageButtons}>
        <button onClick={sendData}>SendData</button>
        <button onClick={getData}>GetData</button>
      </div>
    </div>
  );
};

export default MyIdeas;
