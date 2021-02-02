import React from "react"

function Vacations(props) {
    const {spot} = props
return (
        <div>
            <h2>{spot.place}</h2>
            <p>{spot.price}</p>
        </div>
    )
}

export default Vacations