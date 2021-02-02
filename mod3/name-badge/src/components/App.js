import React, { Component } from 'react'

import Badge from './Badge'

export default class App extends Component {

    constructor(){
        super()
        //Beginning State
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            POB: '',
            phone: '',
            favFood: '',
            info: '',
            badges: []
        }
        //Binding the typing and button functions
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    //Submit button function
    handleClick = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            //If no fields are blanks and they have at least 3 characters in the field
            if((prevState.firstName!=='' && prevState.lastName!=='' && prevState.email!=='' && prevState.POB!=='' && prevState.phone!=='' && prevState.favFood!=='') && (prevState.firstName.length >= 3 && prevState.lastName.length  >= 3 && prevState.email.length >= 3 && prevState.POB.length  >= 3 && prevState.phone.length  >= 3 && prevState.favFood.length  >= 3)){
                return{
                    firstName: '',
                    lastName: '',
                    email: '',
                    POB: '',
                    phone: '',
                    favFood: '',
                    info: '',
                    badges: [
                        ...prevState.badges,
                        <div className='outBadge'>

                            <div className='left outputs'>
                                Name: {this.state.firstName + ' ' + this.state.lastName}
                            </div>

                            <div className='right outputs'>
                                Email: {this.state.email}
                            </div>

                            <div className='left outputs'>
                                Place of Birth: {this.state.POB}
                            </div>

                            <div className='right outputs'>
                                Phone Number: {this.state.phone}
                            </div>

                            <div className='left outputs'>
                                Favorite Food: {this.state.favFood}
                            </div>

                            <div className='information'>
                                {this.state.info}
                            </div>
                        </div>
                    ]
                }
            }
            //if they don't have three characters in the field or are blank
            else{
                alert('Please Fill Out Each Field With At Least 3 Characters')
            }
        })
    }
    //Allows the inputs to be typed in
    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render() {
        return (
            <div>
                {/*Passes each state element into the Badge.js Badge function*/}
                <Badge
                    firstName = {this.state.firstName}
                    lastName = {this.state.lastName}
                    email = {this.state.email}
                    POB = {this.state.POB}
                    phone = {this.state.phone}
                    favFood = {this.state.favFood}
                    info = {this.state.info}
                    badges = {this.state.badges}
                    click = {this.handleClick}
                    change = {this.handleChange}
                />
            </div>
        )
    }
}

