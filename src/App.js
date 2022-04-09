import './App.css';
import { useState} from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Confetti from 'react-confetti';

function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}



function TicTacToe() {
  const{width,height} = ('');
  const[board,setBoard] = useState([null,null,null,null,null,null,null,null,null]);

  const[isXTurn,setXTurn] = useState(true);

  const handleClick = (index) => {
    console.log("Clicked",index);

    if(!winner && !board[index]){
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setXTurn(!isXTurn);
      console.log(index)
    }
  }
  const decideWinner = (board) => {
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
  
  for(let i=0;i<lines.length;i++){
const[a,b,c] = lines[i];
console.log(lines[i])
if(board[a] !== null && board[a] === board[b] && board[a]===board[c]){
console.log("Winner is", board[a]);
return(board[a])
}
  }
  return null;
  }
  const winner = decideWinner(board);
   const [hide,setHide]=useState(false);
const style = {display:(hide)?"none":"block"};

return(
  <div>
  <div className="tictac">
    <h1>TIC-TAC-TOE</h1>
    
      <h3>Start with</h3>
    <div className='xo-btn'>
     <Button variant='contained' color='error' onClick={()=>{setXTurn(true);setHide(true)}}>X</Button>
     <Button variant='contained' color='primary' onClick={()=>{setXTurn(false);setHide(true)}}>O</Button>
     </div>

      <div>
      {!winner && isXTurn==true ? <Button onClick={() => setXTurn(true)}>X turn</Button> : <Button onClick={() => setXTurn(!true)}>O turn</Button>} 
      </div>

  <div className="gameboard">
{board.map((val, index) => (
  <GameBox val={val} onPlayerClick={()=> handleClick(index)}/>))}
</div>
  <div className="restart">
  {winner ? <Button variant='contained' color='success' onClick={() =>setBoard([null,null,null,null,null,null,null,null,null])}><IconButton aria-label="delete" color="inherit"><RestartAltIcon />
      </IconButton>Restart</Button> : " "}</div>
{winner ?   <p>The Winner is {winner} <Confetti
  width={width}
  height={height}
  friction={0.99}
></Confetti></p> :" "}
</div>

</div>
)
}

function GameBox({val , onPlayerClick}){
    const a = { color: val==="X" ? "red" : "blue" };
    return(
      <div style={a} className="gamebox" onClick={() => onPlayerClick()}>{val}</div>
    )
  }

export default App;
