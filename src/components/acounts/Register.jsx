import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../common/header/Header'
import Footer from '../common/Footer/Footer'

const Container = styled.div``;
const Main = styled.div``;
const Grid = styled.div``;
const GridItem = styled.div``;
const Head = styled.div``;
const H1 = styled.h1``;
const Form = styled.form``;
const Button = styled.button``;


const validate= values =>{
    const errors ={}
    if(!values.firstname){
        errors.firstname = 'Required'
    }else if(!/^[A-za-z]{3,}$/.test(values.firstname)){
        errors.firstname = 'invalid'   
    }
    if(!values.lastname){
        errors.lastname = 'Required'
    }else if(!/^[A-za-z]{3,}$/.test(values.lastname)){
        errors.lastname = 'invalid'   
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*~`'",.+*])(?=.*[a-z])(?=.*[A-z])[a-zA-Z0-9`~!@#$%^&*]{8,16}$/.test(values.password)) {
        errors.password = 'password must be 8 and include special char'
    }
    return errors
}

class Register extends React.Component {

    renderField = ({label, type, input, meta: {touched, error }}) =>(
        <div>
            {/* <label>{label}</label> */}
            <div>
                <input {...input} placeholder ={label} type ={type} />
                {touched && (error && <span>{error}</span>)}
            </div>
        </div>
    )

    submitData = data =>{
        console.log('data',JSON.stringify(data, null, 2))
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <Container>
                <Header/>
                <Main className="wrapper main-content" role="main">
                    <Grid className="grid">
                        <GridItem className="grid__item">
                            <Grid className="grid">
                                <div className="grid__item wide--one-third large--one-half small--text-center">
                                    <Head className="section-header section-header--large">
                                        <H1 className="section-header__title">Create Account</H1>
                                    </Head>
                                    <Form onSubmit={handleSubmit(this.submitData)} action="/account" id="create_customer">
                                        <Field name="firstname" type="text" component={this.renderField} label='First Name' />
                                        <Field name="lastname" type="text" component={this.renderField} label='Last Name' />
                                        <Field name="email" type="email" component={this.renderField} label='Email' />
                                        <Field name="password" type="password" component={this.renderField} label='Password' />
                                        <p>
                                        <Button type="submit" className="theme-button theme-button-medium w-btn-nocase w-btn-lg w-btn-dark-blue ml-0" id="addToCartBtn">Register</Button>
                                        </p>
                                        <Link to="/">Return to Store</Link>
                                    </Form>
                                </div>
                            </Grid>
                        </GridItem>
                    </Grid>
                </Main>
                <Footer/>
            </Container>
        )
    }
}
export default reduxForm({
    form: 'RegisterForm',
    validate
})(Register);