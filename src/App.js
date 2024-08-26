import LineChart from './components/LineChart';
import NewCustomers from './components/NewCustomers';
import CustomerOverGeoGraphical from './components/CustomerOverGeoGraphical';
import SellsGrowthRate from './components/SellsGrowthRate';

function App() {
  return (
    <div className="App">
      <CustomerOverGeoGraphical/>
      <NewCustomers/>
      <LineChart/>
      <SellsGrowthRate/>
    </div>
  );
}

export default App;
