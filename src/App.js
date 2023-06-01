import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/components/Health.js';
import Health from './components/Health.js';


function App() {
  return (
    <div className="wrapper">
      <h1>BMI Calculator</h1>
      <Health></Health>
    </div>
  );
}

export default App;
