import {React, useState} from 'react';
import Form from './components/Form'


function App() {
 
  const [ details, updatedDetails] = useState([])

   const addInfo = (info) => {
    updatedDetails([...details, info])
   } 
  


  return (
    <div className="App">
     <Form addInfo={addInfo}/>
  
    </div>
  );
}

export default App;
