import { createContext } from "react";


export const JobContext = createContext()

const JobContextProvider = (props) => {
    const value = {

    }

    return (
        <JobContext.Provider value={value}>
            {props.children}
        </JobContext.Provider>
    )
}
export default JobContextProvider