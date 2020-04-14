import React from 'react'
import styled from 'styled-components'


const ContentItem = styled.a`
width: 30%;
min-width:290px;
height: auto;
margin:5px 15px;
padding: 30px 0;
flex-flow: column;
display: flex;
align-items: center;
background-color: #fff;
box-shadow: 0 0 11px 0 rgba(0, 0, 0, 0.03);
border-radius: 20px;
}
`;
const Icon = styled.div`
width: 90px;
height: 100px;
background-image: url(${props =>props.image});
background-position: 50% 50%;
background-size: 90px;
background-repeat: no-repeat;
border-radius: 50%;
`;
const LargeSubHead = styled.div`
margin-top: 20px;
font-family: Lato, sans-serif;
color: #383651;
font-size: 19px;
line-height: 30px;
font-weight: 400;
`;
const Detail = styled.div`
    margin: 14px 20px 0 20px;
    text-align: center;
    text-decoration: none;
    font-family: Lato, sans-serif;
    color: #383651;
    font-size: 17px;
    line-height: 30px;
    font-weight: 400;
`;


export default class Testimonial extends React.Component {

    render() {
        const {author_name, image, detail, key} = this.props.data
        return (
            <ContentItem id = {key} >
                <Icon image={image} />
                <LargeSubHead className="center">
                    <strong>{author_name}</strong>
                </LargeSubHead>
                <Detail className="body-copy small-centered">{detail}</Detail>
            </ContentItem>
        )
    }
}