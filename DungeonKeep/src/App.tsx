import { useState, useEffect } from "react";
import "./App.css";
import Choice from "./component/Choice";
import Screen from "./component/Screen";
import { ChoiceType, StoryStructure } from "./types/types";

function App() {
  const [storyData, setStoryData] = useState<StoryStructure | null>(null);
  const [choices, setChoices] = useState<{
    choices: ChoiceType[];
    description: string;
  }>({
    choices: [],
    description: "",
  });

  useEffect(() => {
    fetch("/data/story.json")
      .then((response) => response.json())
      .then((data) => {
        setStoryData(data);
        setChoices({
          choices: data.branches.start.choices || [],
          description: data.branches.start.description,
        });
      })
      .catch((error) => console.error("Error loading story data:", error));
  }, []);

  const handleChoice = (nextBranch: string) => {
    if (storyData) {
      const nextChoices = storyData.branches[nextBranch];
      if (nextChoices) {
        console.log(nextChoices.description);
        setChoices({
          choices: nextChoices.choices || [],
          description: nextChoices.description,
        });
      }
    }
  };

  if (!storyData) return <div>Loading...</div>;

  return (
    <div className="app">
      <h1 className="title">{storyData.title}</h1>
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
