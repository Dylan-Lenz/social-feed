import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{name:'Jon Smith', comment:'Words'}, {name:'Jane Smith', comment:'More Words'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <AddEntryForm addNewEntryProp={addNewEntry}/>
      <DisplayEntries parentEntries={entries}/>
    </div>
  );
}

export default App;