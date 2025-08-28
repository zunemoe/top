import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const COLORS = ['red', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [clickCount, setClickCount] = useState(0);
  const onButtonClick = (color) => () => {
    setClickCount(prev => prev + 1);
    setBackgroundColor(color);
  };

  const names = ['Alice', 'Bob', 'Charlie'];  
  // const nameElements = names.map(name => <li key={name}>{name}</li>);

  return (
    <div className="App" style={{ backgroundColor }}>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <p>Button clicked: {clickCount} times.</p>
      <h1>Names</h1>
      <List names={names} />
    </div>
  );
}


function List(props) {
  return (
    <ul>
      {props.names.map(name => {
        return name.startsWith("A") && <ListItem key={name} name={name} />;
      })}
    </ul>
  );
}

function ListItem(props) {
  return <li>{props.name}</li>
}

export default App;
