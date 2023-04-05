import React from "react";
import styles from "./Header.module.css";
import imgDone from "../../assets/pngwing.com.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        alt="Lets Do IT!"
        src="https://img.icons8.com/dusk/344/kawaii-coffee.png"
      ></img>
      <h1>
        Let's do it!
        <img className={styles.logoImg} src={imgDone} alt="Lets Do IT!"></img>
      </h1>
    </header>
  );
};

export default Header;
