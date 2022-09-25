import React, { useState } from 'react';
import InputForm from './Components/InputForm/InputForm';

function App() {

  const [posts, setPosts] = useState([{name: 'John Smith', post: 'Hello Virtual World'}])

  return (
    <div>
      <InputForm/>
    </div>
  );
}

export default App;
