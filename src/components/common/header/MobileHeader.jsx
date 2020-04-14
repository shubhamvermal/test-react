import React from 'react'
import  styled  from "styled-components";
import {Link} from 'react-router-dom'


const Content = styled.div`
position: absolute;
left: 0px;
top: 0px;
height: 50%;
width:auto;
min-width: 250px;
background-color: white;
transform: 0.5s ease-in-out;
padding: 25px;
padding-top: 60px;
// border-radius:10px
border-bottom-right-radius: 100%;
display: ${props => props.showSidebar ? 'auto' : 'none'};

`;


const CloseButton = styled.button`
position: absolute;
top: 8px;
right: 8px;
border: none;
width: 28px;
height: 28px;
border-radius: 50%;
background-color: #5167b8;
i {
  color: white;
}
`

const MobileNav = styled.span`
display: ${props => props.isMobile ? 'auto' : 'none'};
float: left;
font-size: 16px;
// color: #161616;
`

const MobileMenuList = styled.div`
display: flex;
flex-direction: column;
margin-top: 55px;
`;

const A = styled.div`
cursor:pointer;
display:flex;
align-items:center;
border-bottom: 1px solid rgba(0, 0, 0, 0.07);
font-family: "Arial", Arial, sans-serif;
font-weight: 600; 
margin:5px 0;
`;
const Icon = styled.div`
padding: 10px;
`;

export class MobileHeader extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            showSidebar: false
        }
    }
    render() {
        const { isMobile } = this.props
        const { showSidebar } = this.state
        return (
            <MobileNav isMobile={isMobile} className={showSidebar && 'popup-overlay'}>
                <i className='fa fa-bars' onClick={() => this.setState({ showSidebar: !showSidebar })}></i>
                <Content showSidebar={showSidebar}>
                    <CloseButton onClick={() => this.setState({ showSidebar: false })}><i className='fa fa-times' /></CloseButton>
                    <MobileMenuList>
                       <Link to='/login'><A href='#'><Icon><i className="fa fa-user"/></Icon>Login</A></Link>
                       <Link to = '/cart'><A href='#'><Icon><i className="fa fa-shopping-cart"/></Icon>Cart</A></Link>
                    </MobileMenuList>
                </Content>
            </MobileNav>
      )
    }
} 