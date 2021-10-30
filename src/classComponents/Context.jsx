import React from "react"
import { useState } from "react"
export const AppContext = React.createContext()
function Context({children}){
    const [theme,setTheme] = useState("light")
    const [test,setTest] = useState("This is test")
    return <AppContext.Provider value={
        theme,
        setTheme,
        test,
        setTest
    }>
        {children}
        </AppContext.Provider>
}
export default Context