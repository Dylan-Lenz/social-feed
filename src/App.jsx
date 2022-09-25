import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{name:'Jon Smith', comment:'Stuff'}, {name:'Jane Smith', comment:'More Stuff'}])

  return (
    <div>
      <AddEntryForm/>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;