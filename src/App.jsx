import React  from 'react'
import Navbar from './components/Navbar'
import Custom from './components/Custom'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const App = () => {


 
  return (
    <>
    <Navbar />
    <Custom />
    </>
  )
}

export default App
