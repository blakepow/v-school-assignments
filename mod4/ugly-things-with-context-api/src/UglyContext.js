import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends Component {

    state = {
        title: '',
        description: '',
        imgUrl: '',
        uglyThings: []
    }

    load = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://api.vschool.io/blakepowelson/thing/", requestOptions)
        .then(response => response.text())
        .then(result => this.setState(prevState => {
            return {...prevState, uglyThings: JSON.parse(result)}
        }))
        .catch(error => console.log('error', error));
	};

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState(prevState => {
            return{
                ...prevState, 
                [name]: value
            }
        })
    }

    handleSubmit = (e) => {
		e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"title": this.state.title,"description": this.state.description, 'imgUrl': this.state.imgUrl});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://api.vschool.io/blakepowelson/thing/", requestOptions)
        .then(response => response.text())
        .then(result => this.load())
        .catch(error => console.log('error', error));

		this.setState({
            title: '', 
            description: '', 
            imgUrl: ''
		});
		
    }


    edit = (id, updateValue) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(updateValue);

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`https://api.vschool.io/blakepowelson/thing/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => this.load())
            .catch(error => console.log('error', error));
    }

    delete = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`https://api.vschool.io/blakepowelson/thing/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => this.load())
            .catch(error => console.log('error', error));
    }

    componentDidMount = ()  => {
        this.load()
    }

    render() {
        return (
            <Provider value={{
                title: this.state.title,
                description: this.state.description,
                imgUrl: this.state.imgUrl,
                uglyThings: this.state.uglyThings,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                edit: this.edit,
                delete: this.delete
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}