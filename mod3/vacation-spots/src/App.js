import React from "react"
import Vacations from "./Vacations"
import vacationSpots from "./spots"


function App() {
    const trips = vacationSpots.map(trip => <Vacations spot={trip}/>)

return (
        <div>
            {trips}
        </div>
    )
}

export default App