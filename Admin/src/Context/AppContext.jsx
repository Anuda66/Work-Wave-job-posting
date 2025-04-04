import { createContext } from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {
    

    const month = ['' , 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec']

    const slotDateFormat = (slotDate)=>{
        const dateArray = String(slotDate).split('_');
        return dateArray[0] + " " + month[Number(dateArray[1])] + " " + dateArray[2]
    }

    const value = {
        slotDateFormat
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider