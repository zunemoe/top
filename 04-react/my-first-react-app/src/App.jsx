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
    <div className="App">
      <Person />
    </div>
    // <div className="App" style={{ backgroundColor }}>
    //   {COLORS.map((color) => (
    //     <button
    //       type="button"
    //       key={color}
    //       onClick={onButtonClick(color)}
    //       className={backgroundColor === color ? "selected" : ""}
    //     >
    //       {color}
    //     </button>
    //   ))}
    //   <p>Button clicked: {clickCount} times.</p>
    //   <h1>Names</h1>
    //   <List names={names} />
    // </div>
  );
}

function Person() {
  const [person, setPerson] = useState({ name: "John Doe", age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleDecreaseAge = () => {
    setPerson({ ...person, age: person.age - 1});
  }

  const handleFirstNameChange = (event) => {
    setPerson({ ...person, name: event.target.value + " " + person.name.split(" ")[1] });
  }

  const handleLastNameChange = (event) => {
    setPerson({ ...person, name: person.name.split(" ")[0] + " " + event.target.value });
  }

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>    
      <div>
        <button onClick={handleDecreaseAge}>Decrease age</button> 
        <button onClick={handleIncreaseAge}>Increase age</button>
      </div>        
      <div>
        <input type="text" placeholder='First name' onChange={handleFirstNameChange}/>
        <input type="text" placeholder='Last name' onChange={handleLastNameChange}/>
      </div>
    </>
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
