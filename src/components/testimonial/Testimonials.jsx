import React from 'react'
import styled from 'styled-components'
import Testimonial from "./Testimonial";
import { testimonialData } from "../../constant/items";
const Section = styled.div`

    display: block;
    padding: 50px 0
    border-top: 1px solid #eaecf3;
    border-bottom: 1px solid #eaecf3;
    background-color: #f6f7fb;

`;
const Container = styled.div`
    // max-width: 1200px;
    margin:0 2%;
`;
const Heading = styled.div`
text-align: center;
`;
const Headlne = styled.div`
width: 50%;
margin-right: auto;
margin-left: auto;
`;
const Strong = styled.h1`
font-weight: bold;
margin:auto;
`;

const Content = styled.div`
display: flex;
margin-top: 10px;
padding-right: 40px;
padding-left: 40px;
justify-content: center;
flex-wrap: wrap;
align-content: space-between;
`;

class Testimonials extends React.Component {

    render() {

        return (

            <Section >
                <Container >
                    <Heading >
                        <Headlne>
                            <Strong><i>Testimonial</i></Strong>

                        </Headlne>
                    </Heading>
                    <Content>
                        {testimonialData.map((data, index) => {
                            return <Testimonial key = {index} data={data} />
                        })}

                    </Content>
                </Container>
            </Section>
        )
    }
}

export default Testimonials;

