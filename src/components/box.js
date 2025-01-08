import { useEffect, useState } from "react";

const DEFAULT_BG_COLOR = "#FFFFFF";

function Box({ color, isRevealed, activeColor, parentCallback }) {
  const [isMatched, setIsMatched] = useState(isRevealed);
  // const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (activeColor === '' && !isRevealed) {
        // setIsClicked(false);
        setIsMatched(false);
    }
  }, [activeColor, isRevealed]);

  let handleClick = () => {
    if (!isRevealed && !isMatched /*!isClicked*/) {
      setIsMatched(true);
      // setIsClicked(true);
      parentCallback(color);
    }
  };

  return (
    <>
      <div
        className="boxStyle"
        style={{
          backgroundColor: isMatched ? color : DEFAULT_BG_COLOR,
        }}
        onClick={handleClick}
      ></div>
    </>
  );
}

export default Box;
