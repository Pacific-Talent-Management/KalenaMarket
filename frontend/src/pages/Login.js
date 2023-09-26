import React from 'react';
import InputField from "../component/InputField";
import SubmitButton from "../component/SubmitButton";
import UserStore from "../stores/UserStore";
import logo from '../images/logo2.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 36) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm() {
        this.setState({
            email: '',
            password: '',
            buttonDisabled: false
        })
    }

    async doLogin() {

        if (!this.state.email) {
            return;
        }
        if (!this.state.password) {
            return;
        }

        this.setState({
            buttonDisabled:true
        })

        try {
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            });

            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.email = result.email;
            }
            else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }
        }

        catch(e) {
            console.log(e);
            this.resetForm();
        }

    }
    render() {
        return (
            <div className="login">
                <img src={logo} alt="logo" width="350px"/>
                <h2>Pacific Talent Management</h2>
                <InputField
                    type='text'
                    placeholder='email'
                    value={this.state.email ? this.state.email : ''}
                    onChange={ (val) => this.setInputValue('email', val)}
                />
                <InputField
                    type='password'
                    placeholder='password'
                    value={this.state.password ? this.state.password : ''}
                    onChange={ (val) => this.setInputValue('password', val)}
                />
                <SubmitButton
                    text='Login'
                    disabled={this.state.buttonDisabled}
                    onClick={ () => this.doLogin() }
                />
                <p>Don't have an account?</p>
                <p>Sign Up Here</p>
            </div>
        );
    }
}

export default Login;
