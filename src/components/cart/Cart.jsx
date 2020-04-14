import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
// import './index.css'
import Header from '../common/header/Header'
import Footer from '../common/Footer/Footer'

const Section = styled.section`
padding: 50px 0 50px 15px;
`;

const Description = styled.div`
padding:0 0 50px 0;
`;
const Container = styled.div``;
const ProductContainer = styled.div``;
const Left = styled.div``;
const ImageSlider = styled.div``;
const Row = styled.div``;
const Image = styled.img``;

const Validate = (values) =>{
    const error = {}
    if(/^[0-9]{4,7}$/.test(values.pincode)){
        if(values.pincode !== 125001 || 125005){
           error.pincode = 'lksdjsjldkjdfsjlkjd'
        }      
    }
}

class Cart extends React.Component {
    render() {
        return (

            <div>
                <Header />
                <Section id="product-display-section" class="white-background w-sec w-product-banner">
                    <Container className="container-fluid no-padding">
                        <div class="col-md-12">
                            <ProductContainer className="product-display-content">
                                <div id="productMain">
                                    <Row className="row">
                                        <Left className="col-md-6 no-padding">
                                            <ImageSlider className="product-slider-section">
                                                <div id="mainImage">
                                                    <Image itemprop="image" src="https://www.wakefit.co/img/back-support-cushion/back-support-cushion-1.jpg" alt="Back Pillow" className="img-responsive clickable" />
                                                </div>
                                                {/* <div class="ribbon sale">
        <div class="theribbon">SALE</div>
        <div class="ribbon-background"></div>
    </div>
    <div class="ribbon new">
        <div class="theribbon">NEW</div>
        <div class="ribbon-background"></div>
    </div>  */}
                                                <br />
                                                <div class="product-thumbs-autoplay slick-initialized slick-slider" id="thumbs">
                                                    <div class="slick-list draggable"><div class="slick-track" style={{ opacity: '1', width: '210px', transform: 'translate3d(0px, 0px, 0px)' }}>
                                                        <div class="product-slider-thumb slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{ width: '105px' }}>
                                                            <a href="https://www.wakefit.co/img/back-support-cushion/back-support-cushion-1.jpg" class="thumb active" tabindex="0">
                                                                <Image src="https://www.wakefit.co/img/back-support-cushion/back-support-cushion-1.jpg" alt="Back Pillow" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </ImageSlider>

                                        </Left>
                                        <div class="col-md-6 w-product-RHS">
                                            <div class="box">
                                                <p class="light-grey-text">Pillows & Cushions</p>
                                                <h1 class="" id="product_name">Wakefit Back Support Pillow</h1>
                                                <div class="row">
                                                    <div class="col-md-7 col-xs-12">
                                                        <h4 class="mrp light w-font-open-sans" id="product_mrp">MRP: <strike>₹ <span id="mrp_value">999</span>.00</strike></h4>
                                                        <h2 class="price1 light mt-0 w-font-open-sans" id="product_price">₹ <span id="product_value">799</span>.00</h2>
                                                        <span class="price tax-text">(Inclusive of all taxes)</span>
                                                    </div>
                                                    <div class="col-md-5 col-xs-12">
                                                        <div class="product-rating-snippet">
                                                            <div class="rating-stars product-rating clearfix">
                                                                <div class="grey-stars"></div>
                                                                <div class="filled-stars" style={{ width: '95%' }}></div>
                                                            </div>
                                                            <p class="total-review-txt thin-font">25+ Reviews</p>
                                                        </div>
                                                        <input type="hidden" name="product_size" id="product_sku" value="WBSC" />
                                                    </div>
                                                </div>
                                                <div class="product-dimensions-snippet">

                                                    <div class="product-dimensions-section">

          {/* <div class="product-dimensions-unit" id="product-dimensions-unit-1">
                <div class="unit-heading">
                    <h4>Step 1 : Choose Variant</h4>
                </div>
                <div class="mattress-variants">
                    <div class="row mattress-variants-group list-group1" id="list-tab" role="tablist">
                      <div class="col-xs-4 text-center">
                      <a class="btn mattress-variant-btn active" id="doublie-list" data-toggle="list" href="javascript:void(0);" role="tab" data-variant="WSPD" aria-controls="home">Queen</a>
                      </div>
                      <div class="col-xs-4 text-center">
                      <a class="btn mattress-variant-btn" id="sinlge-list" data-toggle="list" href="javascript:void(0);" data-variant="WSPS" role="tab" aria-controls="profile">King</a>
                      </div>
                    </div>
                </div>
            </div>  */}
                                                        <div class="product-dimensions-unit" id="product-dimensions-unit-3">
                                                            <div class="unit-heading">
                                                                <h4>Quantity</h4>
                                                            </div>
                                                            <div class="size-variants">
                                                                <div class="row no-margin">
                                                                    <div class="form-group mb-0">
                                                                        <select name="mattress_quantity" id="product_quantity" class="form-control">
                                                                            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-dimensions-unit" id="product-dimensions-unit-3">
                                                            <div class="unit-heading">
                                                                <h4 id="">Delivery</h4>
                                                            </div>
                                                            <div class="size-variants">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="delivery_pincode" maxlength="6" oninput="this.value=this.value.replace(/[^0-9]/g,'');" placeholder="Enter Delivery Pincode" />
                                                                            <a href="javascript:void(0);" onclick="checkProductDeliveryAvailability();" class="w-check-pin">Check Now</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <span class="error" id="delivery_pincode_error"></span>
                                                                <p id="edd_column" class="delivery_status"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row product-cta mt-2em hidden-xs">
                                                        <div class="col-md-12  text-center">
                                                            <a href="javascript:void(0);" class="theme-button theme-button-medium w-btn-nocase w-btn-lg w-btn-dark-blue ml-0" id="addToCartBtn">Add to Cart</a>
                                                            <a href="javascript:void(0);" id="buyNowBtn" class="theme-button theme-button-medium theme-red w-btn-lg w-btn-nocase w-btn-white mr-0">Buy Now</a>
                                                        </div>
                                                    </div>
                                                    <div id="fixed-price-bar" class="">
                                                        <div class="row visible-xs hidden-lg">
                                                            <div class="col-xs-7">
                                                                <div class="price-and-dimensions">
                                                                    <h2 class="price1 light mt-0 w-font-open-sans primary-tag" id="fixed_product_price">₹ <span id="fixed_product_value">799</span>.00</h2>
                                                                    <span id="fixed_mrp_tag" class="secondary-tag">MRP: <strike>₹ <span id="fixed_mrp_value">999</span>.00</strike></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-5">
                                                                <a href="javascript:void(0);" id="mobileBuyNowBtn" class="theme-button w-btn-nocase w-btn w-btn-full w-btn-dark-blue ml-0 mt-10">Buy Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </ProductContainer>
                        </div>
                    </Container>

                </Section>




                <Description class="data item content" id="product.info.description" data-role="content" aria-labelledby="tab-label-product.info.description" role="tabpanel" aria-hidden="false">
                    <h2 class="content-title">Description</h2>

                    <div class="product attribute description">
                        <div class="value">
                            <div class="disc-box-wrapper">
                                <div class="col-sm-4 col-xs-12 box-wrapper">
                                    <div class="img-box"></div>
                                    <div class="content-wrapper">
                                        <div class="info-box">The Truth about TEA</div>
                                        <div class="info-box">TE.A (Tasty. Easy. Active.) is a range of novel ‘Wellness Infusions’ featuring green tea and other beneficial natural ingredients. Using proprietary cold-crafting technology, fresh green tea leaves from select tea gardens are juiced and turned into a powder within 4 hours of being plucked.</div>
                                        <div class="info-box">Tasty:</div>
                                        <div class="info-box">You are literally consuming the refreshing juice of tender green tea leaves in a light beverage. Brewing or steeping dried leaves or teabags just does not compare. .</div>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-xs-12 box-wrapper">
                                    <div class="img-box"></div>
                                    <div class="content-wrapper">
                                        <div class="info-box">Easy:</div>
                                        <div class="info-box">Open the sachet, empty the contents into a cup and add hot water. By eliminating the lengthy process of brewing and straining the leaves or disposing of the teabags, you can save both time and effort.</div>
                                        <div class="info-box">Active:</div>
                                        <div class="info-box">Our technology is designed to optimally retain the nutrient value of our infusions by improving its bio-activity (effectiveness of the nutrients), and bio-availability (the body’s ability to absorb them).</div>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-xs-12 box-wrapper">
                                    <div class="img-box"></div>
                                    <div class="content-wrapper">
                                        <div class="info-box">Directions for use</div>
                                        <div class="info-box">HOT TEA</div>
                                        <div class="info-box">1 Sachet TE.A + 200 ml filtered water</div>
                                        <div class="info-box">METHOD: Heat water (50-80oC) and pour over contents of the sachet.</div>
                                        <div class="info-box">ICED TEA</div>
                                        <div class="info-box">2 Sachets TE.A + 200 ml filtered water + Tall glass of ice</div>
                                        <div class="info-box">METHOD: Pour warm water over the contents of sachet. Add this to the glass of ice. Optional: Add lime and honey or fresh citrus juice or sweetener to taste. Garnish with fresh mint or slivers of ginger or a twist of lime. Avoid using boiling water for making tea.</div>
                                    </div>
                                </div>
                                <div class="clearfix" style={{ clear: 'both' }}></div>
                            </div></div>
                    </div>
                </Description>
                <Footer />
            </div>
        )
    }
}
export default reduxForm({
    Form:'cartPage',
    Validate
})(Cart);