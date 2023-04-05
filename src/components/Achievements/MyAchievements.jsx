import React from "react";
import styles from "./MyAchievements.module.css";

const MyAchievements = (props) => (
  <div className={styles.achievementsBlock}>
    <h2>Achievements:</h2>
    <div className={styles.achievementsElements}>
      {Object.entries(props.ideasCounter).map(([key, value]) => {
        return (
          <div key={key + 1} className={styles.achievementsElementsBody}>
            <div className={styles.sphere}>{value}</div>
            <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default MyAchievements;
