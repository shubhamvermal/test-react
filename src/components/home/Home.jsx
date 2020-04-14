import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ItemList from '../items/ItemList'
import Header from "../common/header/Header"
import Footer from '../common/Footer/Footer'
import Testimonials from "../testimonial/Testimonials";


const Container = styled.div`
// height:500px;
`;

const Image = styled.div`
`;

const Img = styled.img`
width:100%;
`;

const HomePage = styled.div``;

class Home extends React.Component {

    render() {
        const { isMobile } = this.props
        return (
            <HomePage>
                 <Header/>
                <Container>
                    <Image>
                        <Img src='https://www.sprig.co.in/media/wysiwyg/Sprig-Web-Honey.jpg' />
                    </Image>
                    <ItemList isMobile={isMobile} />
                    <Testimonials/>
                </Container>
                <Footer/>
            </HomePage>
        )
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.global.isMobile
    }
}

export default connect(mapStateToProps, null)(Home)