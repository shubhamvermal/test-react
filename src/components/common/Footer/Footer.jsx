import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

const Footerbody = styled.div`
// background:#631f6b;
// color:white;
border-top:1px solid gold;
border-bottom:1px solid #ffffff;
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.05);
`;

const Container = styled.div`
display:${props => props.isMobile ? 'auto' :' flex'};
padding:2% 3%;
margin:0 2%;
justify-content:space-around;
`;

const Ul = styled.ul`
list-style-type:none;
padding:0px
`;
const Li = styled.li`
`;

const Icon = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 60px;
`;

class Footer extends React.Component {

    render() {
        const {isMobile} = this.props
        return (
            <Footerbody>
                <Container isMobile={isMobile}>

                    <Ul>
                        <Icon>
                            <Link to='#'><i className='fa fa-facebook '></i></Link>
                            <Link to='#'><i className='fa fa-twitter '></i></Link>
                            <Link to='#'><i className='fa fa-instagram '></i></Link>
                        </Icon>
                    </Ul>
                    <Ul>
                        <Li><Link to='/Home'>Home</Link></Li>
                        <Li><Link to='#'>About us</Link></Li>
                        <Li><Link to='#'>Contect us</Link></Li>     
                    </Ul>
                    <Ul>
                        <Li>Address</Li>
                        <Li>365/4 Rajgarh road ,lakhnow</Li>
                    </Ul>
                    <Ul>
                        <Li>address</Li>
                        <Li>address</Li>
                    </Ul>
                </Container>
            </Footerbody>
        )
    }
} 
const mapStateToProps = state =>{
    return{
        isMobile:state.global.isMobile
    }
}

export default connect(mapStateToProps, null)(Footer)