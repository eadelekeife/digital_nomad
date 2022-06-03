import '../assets/css/home.css';

import React, { useRef } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { Input, Carousel, Avatar, Image } from 'antd';

import { Link } from 'react-router-dom';

import SecHero from '../assets/images/sec_hero.jpg';
import SecLogo from '../assets/images/sec_logo.svg';

import Image1 from '../assets/images/grid_3_1.jpg';
import Image2 from '../assets/images/grid_3_2.jpg';
import Image3 from '../assets/images/grid_3_3.jpg';

import Blog1 from '../assets/images/blog1.jpg';
import Blog2 from '../assets/images/blog2.jpg';
import Blog3 from '../assets/images/blog3.jpg';
import Blog4 from '../assets/images/blog4.webp';

import MgCover from '../assets/images/mg_cover.webp';
import Mg from '../assets/images/mg.webp';
import ImageBg from '../assets/images/bg.webp';

import Gallery1 from '../assets/images/img_gallery_1.jpg';
import Gallery2 from '../assets/images/img_gallery_2.jpg';
import Gallery3 from '../assets/images/img_gallery_3.jpg';

import RC from '../assets/images/rc.jpg';

import Plane from '../assets/images/plane.png';
import Breakfast from '../assets/images/breakfast.png';
import BBQ from '../assets/images/bbq.png';
import City from '../assets/images/city.png';

import Category from '../assets/images/icons/archive.svg';
import VideoIcon from '../assets/images/icons/video.svg';
import Calendar from '../assets/images/icons/calendar.svg';
import CreditCard from '../assets/images/icons/credit-card.svg';

import ChevronLeft from '../assets/images/icons/chevron-left.svg';
import ChevronRight from '../assets/images/icons/chevron-right.svg';

import Facebook from '../assets/images/facebook.svg';
import Twitter from '../assets/images/twitter.svg';
import Instagram from '../assets/images/instagram.svg';


const Homepage = () => {

    const { handleSubmit, control } = useForm({
    });

    const controlRef = useRef();

    const previousCarousel = () => controlRef.current.prev();
    const nextCarousel = () => controlRef.current.next();

    return (
        <div>
            <div className="header">
                <div className="contain">
                    <div className="row_2">
                        <div className="">
                            <div className="form_box">
                                <h4>Book Reservations</h4>
                                <p className="paragraph">Conceived by the Fernando family, Sri Lankan tea
                                    producers & founders of Dilmah Ceylon Tea, Resplendent
                                    Ceylon’s collection of small.
                                </p>
                                <div className="">
                                    <form>
                                        <div className="form-grid-2">
                                            <div className="form-group space">
                                                <label htmlFor="date">Event date</label>
                                                <Controller name="date" control={control}
                                                    render={({ field }) => {
                                                        return (
                                                            <Input
                                                                {...field}
                                                                style={{ height: '3rem' }}
                                                                prefix={<img src={Calendar} alt="calendar icon" />} />
                                                        )
                                                    }} />
                                            </div>
                                            <div className="form-group space">
                                                <label htmlFor="category">Category</label>
                                                <Controller name="category" control={control}
                                                    render={({ field }) => {
                                                        return (
                                                            <Input
                                                                {...field}
                                                                style={{ height: '3rem' }}
                                                                prefix={<img src={Category} alt="category icon" />} />
                                                        )
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="form-grid-2">
                                            <div className="form-group space">
                                                <label htmlFor="type">Event type</label>
                                                <Controller name="type" control={control}
                                                    render={({ field }) => {
                                                        return (
                                                            <Input
                                                                {...field}
                                                                style={{ height: '3rem' }}
                                                                prefix={<img src={VideoIcon} alt="video icon" />} />
                                                        )
                                                    }} />
                                            </div>
                                            <div className="form-group space">
                                                <label htmlFor="price">Price</label>
                                                <Controller name="price" control={control}
                                                    render={({ field }) => {
                                                        return (
                                                            <Input
                                                                {...field}
                                                                style={{ height: '3rem' }}
                                                                prefix={<img src={CreditCard} alt="credit-card icon" />} />
                                                        )
                                                    }} />
                                            </div>
                                        </div>
                                        <button className="main_button_color_full">Check Availabilty</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="sec_props div_props">
                <div className="container">
                    <div className="grid_2">
                        <div>
                            {/* <h4>Experience</h4>
                            <h2>Tivoli Garden Ikoyi Waterfront</h2> */}
                            <div className="grid_img_3">
                                <img src={Image1} alt="image 1" />
                                <img src={Image2} alt="image 1" />
                                <img src={Image3} alt="image 1" />
                            </div>
                        </div>
                        <div>
                            <h4>Experience</h4>
                            <h2>Tivoli Garden Ikoyi Waterfront</h2>
                            {/* <h4 style={{ visibility: 'hidden' }}>Experience</h4> */}
                            <p>A luxury lifestyle brand, synonymous with style and impeccable service.</p>
                            <p>Sophisticated yet cool, with timeless style, each of our hotel destinations
                                across the UK surprises and delights in unexpected ways.</p>
                            <p>Indulge in Dakota Hotels’ effortlessly chic guest rooms and suites, complete
                                with high-quality, bespoke furnishings, jewel-toned velvet furniture, and
                                accented with a colour palette of muted, soothing greys.</p>
                            {/* <p>Indulge in Dakota Hotels’ effortlessly chic guest rooms and suites, complete
                                with high-quality, bespoke furnishings, jewel-toned velvet furniture, and
                                accented with a colour palette of muted, soothing greys.</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="div_props">
                <div>
                    <Carousel ref={controlRef}>
                        <div className="bg1">
                            <div className="bg_cover">
                                <div className="contain">
                                    <h3>Classic King</h3>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler a remarkable circuit
                                        across Sri Lanka, with a range of authentic experiences, while
                                        contributing towards local communities</p>
                                    <button className="main_button_color">See Room Details</button>
                                    <div className="carousel_arrow">
                                        <div>
                                            <img src={ChevronLeft} alt="chevron left"
                                                onClick={() => previousCarousel()}
                                            />
                                        </div>
                                        <div>
                                            <img src={ChevronRight} alt="chevron right"
                                                onClick={() => nextCarousel()}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg2">
                            <div className="bg_cover">
                                <div className="contain">
                                    <h3>Deluxe Suite</h3>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler a remarkable circuit
                                        across Sri Lanka, with a range of authentic experiences, while
                                        contributing towards local communities</p>
                                    <button className="main_button_color">See Room Details</button>
                                    <div className="carousel_arrow">
                                        <div>
                                            <img src={ChevronLeft} alt="chevron left"
                                                onClick={() => previousCarousel()}
                                            />
                                        </div>
                                        <div>
                                            <img src={ChevronRight} alt="chevron right"
                                                onClick={() => nextCarousel()}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg3">
                            <div className="bg_cover">
                                <div className="contain">
                                    <h3>Executive Suites</h3>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler a remarkable circuit
                                        across Sri Lanka, with a range of authentic experiences, while
                                        contributing towards local communities</p>
                                    <button className="main_button_color">See Room Details</button>
                                    <div className="carousel_arrow">
                                        <div>
                                            <img src={ChevronLeft} alt="chevron left"
                                                onClick={() => previousCarousel()}
                                            />
                                        </div>
                                        <div>
                                            <img src={ChevronRight} alt="chevron right"
                                                onClick={() => nextCarousel()}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="all_hotel_props colored_bg">
                <div className="contain">
                    <div className="row_2">
                        <div>
                            <h2>Everything you need is just a tap away</h2>
                            <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                luxury resorts offer the discerning traveler a remarkable circuit
                                across Sri Lanka, with a range of authentic experiences</p>
                            <div className="grid_2">
                                <div>
                                    <img src={Plane} alt="plane" />
                                    <h5>Airport Pickup</h5>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler</p>
                                </div>
                                <div>
                                    <img src={City} alt="plane" />
                                    <h5>Complementary Breakfast</h5>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler</p>
                                </div>
                            </div>
                            <div className="grid_2">
                                <div>
                                    <img src={BBQ} alt="plane" />
                                    <h5>City Tour Guide</h5>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler</p>
                                </div>
                                <div>
                                    <img src={Breakfast} alt="plane" />
                                    <h5>Beach BBQ Party</h5>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler</p>
                                </div>
                            </div>
                        </div>
                        <div className="smartMockupBgBg">
                            <div className="smartMockupBg">
                                <img src={Mg} alt="mockup" className="mg" />
                                <img src={MgCover} alt="mockup" className="smartMockup" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image_bg">
                <div className="contain">
                    <h2>Everything you need is just a tap away</h2>
                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                        luxury resorts offer the discerning traveler a remarkable circuit
                        across Sri Lanka, with a range of authentic experiences</p>
                </div>
            </div>
            <div className="div_props blog">
                <div className="contain">
                    <div>
                        <h2>Everything you need is just a tap away</h2>
                        <p className="paragraph">Conceived by the Fernando family, Sri Lankan
                            tea producers & founders of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of
                            small, luxury resorts offer the discerning traveler a remarkable circuit
                            across Sri Lanka, with a range of authentic experiences</p>
                        <div className="grid_3">
                            <div>
                                <img src={Blog2} alt="plane" />
                                <h5>Complementary Breakfast</h5>
                                <p className="">Conceived by the Fernando family, Sri Lankan
                                    tea producers & founders of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of
                                    small, luxury resorts offer the discerning traveler.</p>
                            </div>
                            <div>
                                <img src={Blog3} alt="plane" />
                                <h5>City Tour Guide</h5>
                                <p className="">Conceived by the Fernando family, Sri Lankan
                                    tea producers & founders of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of
                                    small, luxury resorts offer the discerning traveler.</p>
                            </div>
                            <div>
                                <img src={Blog4} alt="plane" />
                                <h5>Beach BBQ Party</h5>
                                <p className="">Conceived by the Fernando family, Sri Lankan
                                    tea producers & founders of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of
                                    small, luxury resorts offer the discerning traveler.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="contain">
                    <div className="grid_4">
                        <div>
                            <h4>Contact us</h4>
                            <p>2/3 Olokun Close, off Ademola Street off Awolowo Road Ikoyi, Lagos.</p>
                            <p>08111387777 , 012122061</p>
                            <p>reservations@tivoligarden.ng</p>
                            <div className="social">
                                <img src={Facebook} alt="facebook" />
                                <img src={Twitter} alt="twitter" />
                                <img src={Instagram} alt="instagram" />
                            </div>
                        </div>
                        <div>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="">Home</Link></li>
                                <li><Link to="">Terms and Conditions</Link></li>
                                <li><Link to="">FAQ</Link></li>
                                <li><Link to="">Newsletter</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="">Home</Link></li>
                                <li><Link to="">Terms and Conditions</Link></li>
                                <li><Link to="">FAQ</Link></li>
                                <li><Link to="">Newsletter</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Subscribe to our mailing list</h4>
                            <p>Conceived by the Fernando family, Sri Lankan tea
                                producers & founders of Dilmah</p>
                            <form>
                                <div className="">
                                    <div className="form-group space">
                                        <label htmlFor="date">Name</label>
                                        <Controller name="date" control={control}
                                            render={({ field }) => {
                                                return (
                                                    <Input
                                                        {...field}
                                                        style={{ height: '2.5rem' }}
                                                    />
                                                )
                                            }} />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-group space">
                                        <label htmlFor="date">Email address</label>
                                        <Controller name="date" control={control}
                                            render={({ field }) => {
                                                return (
                                                    <Input
                                                        {...field}
                                                        style={{ height: '2.5rem' }}
                                                    />
                                                )
                                            }} />
                                    </div>
                                </div>
                                <button className="main_button_color">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;