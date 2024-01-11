import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/navbar'
import DisplayWeather from './container/DisplayWeather/DisplayWeather'

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Outlet/>
    {/* <div className='App'>
      <DisplayWeather/>
    </div> */}
    </>
  )
}

export default App
