import './App.css';
import { useState } from 'react';

import Home from './components/Home';

function App() {
  const [DisplayComponent, setDisplayComponent] = useState(()=>Home)

  const changeComponent = (component) => {
    if(typeof component === "function"){
      setDisplayComponent(()=>component)
    }
  }
  
  return (
    <div className="App">
      {DisplayComponent && <DisplayComponent changeComponent={changeComponent}/>}
    </div>
  );
}

export default App;
