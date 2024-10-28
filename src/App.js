import './App.css';
import { useState } from 'react';

import Home from './components/Home';
import { AppProvider } from './AppContext';

function App() {
  const [DisplayComponent, setDisplayComponent] = useState(()=>Home)
  const [componentProps, setComponentProps] = useState({})

  const changeComponent = (component, prop) => {
    if(typeof component === "function"){
      setDisplayComponent(()=>component)
      setComponentProps(prop)
    }
  }
  
  return (
    <AppProvider>
      <div className="App">
        {DisplayComponent && <DisplayComponent changeComponent={changeComponent} {...componentProps}/>}
      </div>
    </AppProvider>
  );
}

export default App;
