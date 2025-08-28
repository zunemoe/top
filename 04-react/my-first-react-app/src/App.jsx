import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const names = ['Alice', 'Bob', 'Charlie'];
  // const nameElements = names.map(name => <li key={name}>{name}</li>);

  return (
    <div>
      <h1>Names</h1>
      <List names={names}/>
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

export default App
