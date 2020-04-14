import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import Header from '../common/header/Header';
import Footer from "../common/Footer/Footer";
import styled from 'styled-components'

const Input = styled.input`
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

-moz-appearance:textfield; /* Firefox */
`;
const Main = styled.div``;
const Grid = styled.div``;
const GridItem = styled.div``;
const Notes = styled.div``;
const LogInForm = styled.div``;
const Button = styled.button``;



const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*~`'",.+*])(?=.*[a-z])(?=.*[A-z])[a-zA-Z0-9`~!@#$%^&*]{8,16}$/.test(values.password)) {
        errors.password = 'password must be 8 and include special character'
    }
    return errors
}

const warn = values => {
    const warning = {}
    if (values.password == 'shubhamverma') {
        warning.password = 'ksdhkjfasdkdf'
    }
    return warning
}

class Login extends React.Component {

    renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div>
            <label>{label}</label>
            <div>
                <Input {...input} placeholder={label} type={type} />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

    submitdata = (logIn) => {
        console.log(JSON.stringify(logIn, null, 2))
    }

    render() {
        const { handleSubmit /*, pristine, reset, submitting*/  } = this.props
        return (
            <>
                <Header />
                <Main className="wrapper main-content" role="main">
                    <Grid className="grid">
                        <GridItem className="grid__item">
                            <Grid className="grid">
                                <GridItem className="grid__item wide--one-third large--one-half small--text-center">
                                    <LogInForm id="CustomerLoginForm">
                                        <form onSubmit={handleSubmit(this.submitdata)} id="customer_login">
                                            <Field name="email" type="email" component={this.renderField} label="Email" />
                                            <Field name="password" type="password" component={this.renderField} label="Password" />
                                            <p>
                                                <Button type="submit" className="theme-button theme-button-medium w-btn-nocase w-btn-lg w-btn-dark-blue ml-0" id="addToCartBtn">Log in</Button>
                                            </p>
                                            <p>
                                                <Link to="/Register" id="customer_register_link">Create account</Link>
                                            </p>
                                            <Link to="/">Return to Store</Link>
                                        </form>
                                    </LogInForm>
                                </GridItem>
                            </Grid>
                        </GridItem>
                    </Grid>
                </Main>
                <Footer />
            </>
        )
    }
}

export default reduxForm({
    form: 'LogIn',
    validate,
    warn
})(Login)
