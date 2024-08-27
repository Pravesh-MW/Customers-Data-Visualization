import LineChart from './components/LineChart';
import NewCustomers from './components/NewCustomers';
import CustomerOverGeoGraphical from './components/CustomerOverGeoGraphical';
import SellsGrowthRate from './components/SellsGrowthRate';
import { useState } from 'react';
const API_BASE_URL = "https://api-s27s.onrender.com"
// const API_BASE_URL = "http://localhost:2000"
function App() {
  const [presentation, setPresentation] = useState('TS');
  return (
    <div className='bg-yellow-500 h-screen w-full flex flex-col justify-center items-center px-1 md:flex-row'>
      <div className='h-full w-full border-2 border-r-dotted border-red-400 flex justify-center items-center md:w-1/2'>
        <div className='flex flex-col justify-center items-center p-4 space-y-2'>
          <button onClick={()=>{setPresentation('TS')}} className='justify-center items-center text-xl text-gray-800 font-bold bg-blue-600 rounded-md px-2 py-1 active:bg-blue-700 active:text-white max-w-[200px] w-full break-words'>Total Sells</button>
          <button onClick={()=>{setPresentation('SG')}} className='justify-center items-center text-xl text-gray-800 font-bold bg-blue-600 rounded-md px-2 py-1 active:bg-blue-700 active:text-white max-w-[200px] w-full break-words'>Sells Growth Rate</button>
          <button onClick={()=>{setPresentation('NC')}} className='justify-center items-center text-xl text-gray-800 font-bold bg-blue-600 rounded-md px-2 py-1 active:bg-blue-700 active:text-white max-w-[200px] w-full break-words'>New Customers</button>
          <button onClick={()=>{setPresentation('COGG')}} className='justify-center items-center text-xl text-gray-800 font-bold bg-blue-600 rounded-md px-2 py-1 active:bg-blue-700 active:text-white max-w-[200px] w-full break-words'>Number of Customer by Geo-Graphical</button>
        </div>
      </div>
      <div className='w-full md:max-w-2/3 min-h-2/3 px-4 justify-center items-center  '>
        {
          presentation === 'TS' ?<LineChart API_BASE_URL={API_BASE_URL}/> 
          : presentation ==='COGG' ? <CustomerOverGeoGraphical API_BASE_URL={API_BASE_URL}/> 
          : presentation ==='NC' ? <NewCustomers API_BASE_URL={API_BASE_URL} />
          :  <SellsGrowthRate  API_BASE_URL={API_BASE_URL}/>
        }
      </div>
    </div>
  );
}

export default App;
