import {React, useState} from 'react';
import Form from './components/Form'
import InfoList from './components/InfoList';



function App() {
   const [details, updateDetails] = useState([])

   const addInfo =(info) =>{
    updateDetails([...details, info])
   }


  return (
    <div className="App">
     <Form addInfo={addInfo}/>
     {/* <InfoList details={details} /> */}
    
    </div>
  );
}

export default App;
