import {Component} from 'react';


class Registration extends Component{
    state={
        registration:{
            name:'',
            surname:'',
            email:'',
            password:'',
            confirmPass:''
        },
        isComplete:false,
    }

    handleInput=(key, value) => {
        this.setState({ 
            ...this.state.registration,
            [key]:value
        })
    }

    minRequirement=()=>{
        let registrationComplete=false;
        if(
            this.state.registration.name.lenght>=2 &&
            this.state.registration.surname.lenght>=3 &&
            this.state.registration.password.lenght>=8 &&
            this.state.registration.password.match( /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) &&
          this.state.registration.password ===this.state.registration.confirmPass)
    }

    render(){
        return(

        )
    }
}


export default Registration;