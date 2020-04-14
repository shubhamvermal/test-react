import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
width:20%;
min-width:250px;
border: 1px solid rgba(0, 0, 0, 0.17);
box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
border-radius:8px;
margin: 10px auto;
background: #e8e8e8db;
padding: 10px;
`;



const Img = styled.img`
width:100%;
border-radius:8px
`;
const Title = styled.div`
bottom:30px;
font-weight: bold;
font-size:26px; 
text-align:center;
display:flex;
`;

class Item extends React.Component{
    render(){
        const {image,title,slug, key} = this.props.item
        return (
            <Container id = {key}>
                <Link to = {`${slug}/${title}`}>
                    <Img src={image}/>
                    <Title>{title}</Title>
                </Link>
            </Container>
        )
    }
}
export default Item;