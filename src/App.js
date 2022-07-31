import './App.css';
import {Navbar,Dashboard} from './Containers';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import ApexCharts from 'apexcharts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
