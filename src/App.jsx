import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{name:'Jon Smith', comment:'Stuff'}, {name:'Jane Smith', comment:'More Stuff'}])

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;