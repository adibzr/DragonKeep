import { useState } from "react";
import "./App.css";
import Choice from "./component/Choice";
import Screen from "./component/Screen";
import { story as data } from "./data/story";
import { Choice as choiceType } from "./data/story";

function App() {
  const title = data.title;

  const [choices, setChoices] = useState<{
    choices: choiceType[];
    description: string;
  }>({
    choices: data.branches.start.choices || [],
    description: data.branches.start.description,
  });

  const handleChoice = (nextBranch: string) => {
    const nextChoices = data.branches[nextBranch];
    if (nextChoices) {
      console.log(nextChoices.description);
      setChoices({
        choices: nextChoices.choices || [],
        description: nextChoices.description,
      });
    }
  };

  return (
    <div className="app">
      <h1 className="title">{title}</h1>
      <Screen desc={choices.description} />
      <div className="choice-container">
        {choices.choices.map((choice, index) => (
          <Choice
            key={index}
            text={choice.text}
            nextBranch={choice.nextBranch}
            onClick={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
