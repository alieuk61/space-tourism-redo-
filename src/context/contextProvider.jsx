// here we would have usestate here called pageData, setPageData, when we click on a different page we would have it be set to `data.${pagename}` in the header page when we import the usestate in there from here
//and in the different pages (all except the home page), we will import the pageData in them
//we could also use this for the 
//this page is to exercise my useContext skills and to make things more organised
import { useState, createContext } from "react";
import * as data from 'src/data.json';

export const PageContext = createContext({}) // starts off as an empty object, as we are going to add many items into this object (or pretend we are) - doing this to put my skills into play 

export default function PageContextProvider({children}) { {/*children being the other components*/}

    const [destinationsData, setDestinationsData] = useState(data.destinations[0]);
    const [crewData, setcrewData] = useState(data.crew[0]);
    const [techData, setTechData] = useState(data.technology[0]);

    return(
        <PageContext.Provider value={{ 
            destinationsData,
            setDestinationsData,
            crewData,
            setcrewData,
            techData,
            setTechData
        }}>
            {children}
        </PageContext.Provider>
    )
    {/*createcontext returns an object containing, the things we can read and that we have provided, and we pass those things into the context value as seen above */ }
}