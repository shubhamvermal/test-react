import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {MobileHeader} from './MobileHeader'

const Head = styled.div`
// background:#631f6b;
padding: 15px 0;
border-bottom:1px solid #ffffff;
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.05);
`;
const Container =styled.div`
// background:#631f6b;
margin:0 2%;
display:flex;
align-items:center;
justify-content:space-between;
`;

const Title = styled.div`
text-transform:uppercase;
font-size:36px;
// text-shadow: 1px 1px 1px #000, 3px 3px 5px blue; 
font-weight:bold;
// color:white;
`;
const RightBar = styled.div`

`;

const Ul = styled.ul`
display:${props=> props.isMobile ? 'none' : 'flex'};
justify-content:space-between;
`;

const Li = styled.li`
list-style:none;
padding:0 20px;
font-weight:
`;

class Header extends React.Component{

    render(){
        const {isMobile} = this.props

        return (
            <Head>
                <Container>
                    <MobileHeader isMobile={isMobile}/>
                    <Title>sustain</Title>
                    <RightBar>
                        <Ul isMobile={isMobile}>
                            <Li ><Link to='/login'><i className="fa fa-user"></i></Link> </Li>
                            {/* <Li>Register</Li> */}
                            <Li><Link to='/cart'><i className="fa fa-shopping-cart"/></Link></Li>
                        </Ul>
                    </RightBar>
                </Container>
           </Head>
        )
    }
}

const mapStateToProps = state =>{
    return{
        isMobile:state.global.isMobile
    }
}

export default connect(mapStateToProps, null)(Header)