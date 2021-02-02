import React from 'react'

export default function Badge(props) {

    //Maps throught the state's badge array and adds the latest badge submittion to it
    const badgeList = props.badges.map(badge => <div>{badge}</div>)


    return (
        <div>
        {/*This is what appears on the webpage*/}
        <div className='badge'>
            <form>
                <input
                    className='firstName'
                    placeholder='First Name'
                    name='firstName'
                    type='text'
                    value={props.firstName}
                    onChange = {props.change}
                />
                <input
                    className='lastName'
                    placeholder='Last Name'
                    name='lastName'
                    type='text'
                    value={props.lastName}
                    onChange = {props.change}
                />
                <input
                    className='email'
                    placeholder='Email'
                    value={props.email}
                    onChange = {props.change}
                    name='email'
                    type='text'
                />
                <input
                    className='POB'
                    placeholder='Place of Birth'
                    value={props.POB}
                    onChange = {props.change}
                    name='POB'
                />
                <input
                    className='phone'
                    placeholder='Phone Number'
                    value={props.phone}
                    onChange = {props.change}
                    name='phone'
                />
                <input
                    className='favFood'
                    placeholder='Favorite Food'
                    value={props.favFood}
                    onChange = {props.change}
                    name='favFood'
                />

                <textarea
                    className='info'
                    value={props.info}
                    onChange = {props.change}
                    name='info'
                />

                <button onClick={props.click}
                    className='submitBtn'
                >
                Submit
                </button>
            </form>
        </div> 
        <hr/>
        <div>
            {/*Returns the state's badge array with the latest submittion*/}
            {badgeList}
        </div>
        </div>
    )
}


