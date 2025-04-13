const Choice = ({
  text,
  nextBranch,
  onClick,
}: {
  text: string;
  nextBranch: string;
  key: number;
  onClick: (nextBranch: string) => void;
}) => {
  return (
    <button className="choice" onClick={() => onClick(nextBranch)}>
      {text}
    </button>
  );
};

export default Choice;
