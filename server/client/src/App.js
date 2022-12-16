
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./comp/navbar";
import Page1 from "./comp/page1";
import Step from "./comp/step1";
import Step2 from "./comp/step2";
import Step3 from "./comp/step3";

function App() {
  const idone =()=>{
    var id = document.getElementById('id1')
    id.style.backgroundColor="green";
    id.style.color="white";
    }

    const steptwo = ()=>{
      var stepto = document.getElementById('id2');
      stepto.style.backgroundColor = 'green';
      stepto.style.color='white';
    }

    const stepthree = ()=>{
      var stepto = document.getElementById('id3');
      stepto.style.backgroundColor = 'green';
      stepto.style.color='white';
    }
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/steps/" element={<Navbar />}>
      <Route path="step1" element={<Step idone={idone} />} />
      <Route path="step2" element={<Step2 steptwo={steptwo}/>} />
      <Route path="step3" element={<Step3 stepthree={stepthree}/>} />
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
