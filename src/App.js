import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import MyAchievements from "./components/Achievements/MyAchievements";
import CompletedChallenges from "./components/CompletedChallenges/CompletedChallenges";
import Header from "./components/Header/Header";
import Ideas from "./components/Ideas/Ideas";
import MyIdeas from "./components/MyIdeas/MyIdeas";
import moment from "moment-timezone";

function App() {
  const [newMyIdea, setMyIdea] = useState(
    localStorage.getItem("newMyIdea")
      ? JSON.parse(localStorage.getItem("newMyIdea"))
      : []
  );
  const [achievments, setAchievments] = useState(
    localStorage.getItem("achievments")
      ? JSON.parse(localStorage.getItem("achievments"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("achievments", JSON.stringify(achievments));
    localStorage.setItem("newMyIdea", JSON.stringify(newMyIdea));
  }, [achievments, newMyIdea]);

  const getIdeas = (value) => {
    setMyIdea([...newMyIdea, value]);
  };

  const doneMyIdea = (myIdeaId) => {
    const dateNow = moment().format("DD.MM.YYYY HH:mm");
    const selectedIdea = newMyIdea.find((obj) => obj.key === myIdeaId);
    setAchievments([
      ...achievments,
      { ...selectedIdea, date: dateNow, status: 1 },
    ]);
    setMyIdea(newMyIdea.filter((obj) => obj.key !== myIdeaId));
  };

  const ideasCounter = () => {
    let counts = {};
    achievments.map((element) => {
      if (counts[element.type]) {
        counts[element.type] = counts[element.type] + 1;
      } else {
        counts[element.type] = 1;
      }

      return element;
    });
    return counts;
  };

  return (
    <div className="app-wrapper">
      <Header />
      <Ideas getIdeas={getIdeas} newMyIdea={newMyIdea} />
      <MyIdeas
        newMyIdea={newMyIdea}
        doneMyIdea={doneMyIdea}
        achievments={achievments}
        setAchievments={setAchievments}
        setMyIdea={setMyIdea}
      />
      <MyAchievements newMyIdea={newMyIdea} ideasCounter={ideasCounter()} />
      <CompletedChallenges achievments={achievments} />
    </div>
  );
}

export default App;
