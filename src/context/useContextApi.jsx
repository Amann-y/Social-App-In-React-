import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext()

const AppProvider = ({children})=>{
    const [bgColor, setBgColor ] = useState("black")
    const [textColor, setTextColor] = useState("white")
    const [toggle, setToggle] = useState(true)

    const togglingColor = ()=>{
     setToggle((prev)=>!prev)
     if(toggle){
      setBgColor("white")
      setTextColor("black")
      setToggle(false)
      document.querySelector("body").style.backgroundColor = "black"
     }else{
        setBgColor("black")
        setToggle(true)
        setTextColor("white")
        document.querySelector("body").style.backgroundColor = "white"
     }
    }

    useEffect(()=>{
        togglingColor()
    },[])

return <AppContext.Provider value={{togglingColor, bgColor, toggle, textColor}}>{children}</AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}


export {useGlobalContext, AppProvider}
