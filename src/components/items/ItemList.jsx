import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import {items} from '../../constant/items'


const Container = styled.div`
display:${props => props.isMobile ? 'auto': 'flex'};
display:flex;
flex-wrap:wrap;
margin:0 2%;
padding:10px 0;
`;

export default class ItemList extends React.Component{

    render(){
        const {isMobile} = this.props 
        return(
            <Container isMobile = {isMobile}>
                {items.map((item,index)=>{
                    return <Item item = {item} key = {index} isMobile = {isMobile}/>
                })}
                
            </Container>
        )
    }
} 