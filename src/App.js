// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Box from './components/box';
import { getColors } from './utils/utils';

const NUM_BLOCKS = 16;
const colors = getColors(NUM_BLOCKS);

function App() {

  let [activeColor, setActiveColor] = useState('');
  let [revealedColors, setRevealedColors] = useState(new Set([]));
  const [roundCount, setRoundCount] = useState(0);

  let parentCallback = (color) => {
    
    if (activeColor === '') {
      setActiveColor(color);
      return;
    }

    if (color === activeColor) {
      setRevealedColors((prev) => {
        prev.add(color);
        return prev;
      });
      setActiveColor('');
    }
    else {  
      setActiveColor(color);
      setTimeout(() => {
        setActiveColor('');
      }, 500);
    }

    setRoundCount((prev) => {
      prev = prev + 1;
      return prev;
    });

  }

  // console.log(`Colors => ${colors}`)
  return <>
      {
        ([...revealedColors].length !== NUM_BLOCKS/2) ?
          <div>
            <div className="boxParent">
              {
                colors.map((color, index) => {
                  return (
                    <Box
                      key = {'key_' + index}
                      isRevealed={revealedColors.has(color)}
                      color = {color} 
                      activeColor = {activeColor}
                      parentCallback = {parentCallback}>
                    </Box>
                    );
                })
              }
            </div>
            <br/><br/>
            <hr/>
            <hr/>
            <div>
             Rounds: {roundCount}
            </div>
          </div> :
          <div>
            <p>Game Over!! - #Rounds= {roundCount}</p>
            <button onClick={()=>{
              setRevealedColors(new Set());
              setActiveColor('');
              setRoundCount(0);
              }}>
                Play Again!!
            </button>
          </div>
      }
    </>
}

export default App;
