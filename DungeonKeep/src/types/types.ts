export interface ChoiceType {
  text: string;
  nextBranch: string;
}

export interface StoryNode {
  title: string;
  description: string;
  choices?: ChoiceType[];
  type?: "BOSS" | "DEATH" | "LOOP" | "NO_BOSS" | "NORMAL";
}

export interface StoryStructure {
  title: string;
  branches: Record<string, StoryNode>;
}
