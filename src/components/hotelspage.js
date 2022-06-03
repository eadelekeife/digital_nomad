import '../assets/css/homepage.css';

import React, { useRef } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { Input, Carousel, Avatar, Image } from 'antd';

import { Link } from 'react-router-dom';

import SecHero from '../assets/images/sec_hero.jpg';
import SecLogo from '../assets/images/sec_logo.svg';

import Image1 from '../assets/images/grid_3_1.jpg';
import Image2 from '../assets/images/grid_3_2.jpg';
import Image3 from '../assets/images/grid_3_3.jpg';

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
                            <h3>Comform & More</h3>
                            <h3>Bay & Beyond</h3>
                        </div>
                        <div>
                            <div className="form_box">
                                <h4>Book Reservations</h4>
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
                    </div>
                </div>
            </div>
            <div className="sec_header">
                <div className="row_2_no_align">
                    <div>
                        <div className="contain">
                            <img src={SecLogo} alt="sec logo" className="sec_logo" />
                            <h5>WELCOME TO RESPLENDENT CEYLON</h5>
                            <h3>The benchmark for boutique,
                                small luxury resorts in Sri Lanka</h3>
                            <div>
                                <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                    of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                    luxury resorts offer the discerning traveler a remarkable circuit
                                    across Sri Lanka, with a range of authentic experiences, while
                                    contributing towards local communities & the environment through
                                    the MJF Foundation & Dilmah Conservation.</p>
                                <p>This “best of Sri Lanka” circuit currently features three
                                    distinctively original resorts, connected by a thread of peerless
                                    service. They are the sole Sri Lankan members of Relais & Chateaux,
                                    the global fellowship of individually owned & operated luxury hotels
                                    and restaurants. All three resorts; Tea Trails, Cape Weligama
                                    and Wild Coast Tented Lodge have won global acclaim as the finest in
                                    Sri Lanka.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={SecHero} alt="hoel picture" className="main" />
                    </div>
                </div>
            </div>
            <div className="div_props rooms_props">
                <div className="contain">
                    <div className="row_2">
                        <div className="grid_img_3">
                            <img src={Image1} alt="image 1" />
                            <img src={Image2} alt="image 1" />
                            <img src={Image3} alt="image 1" />
                        </div>
                        <div>
                            <h5>RESPLENDENT SRI LANKA JOURNEY</h5>
                            <h4>Plan the journey of your dreams</h4>
                            <p>This “best of Sri Lanka” circuit currently features three
                                distinctively original resorts, connected by a thread of peerless
                                service. They are the sole Sri Lankan members of Relais & Chateaux,
                                the global fellowship of individually owned & operated luxury hotels
                                and restaurants. All three resorts; Tea Trails, Cape Weligama
                                and Wild Coast Tented Lodge have won global acclaim as the finest in
                                Sri Lanka.</p>
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
                                    <h3>Spa Like Never Before</h3>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler a remarkable circuit
                                        across Sri Lanka, with a range of authentic experiences, while
                                        contributing towards local communities</p>
                                    <button className="main_button_color">Book now</button>
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
                                    <h3>The Great Escape You'll Remember.</h3>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler a remarkable circuit
                                        across Sri Lanka, with a range of authentic experiences, while
                                        contributing towards local communities</p>
                                    <button className="main_button_color">Book now</button>
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
                                    <h3>Exquisite Urban Experience</h3>
                                    <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                        of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                        luxury resorts offer the discerning traveler a remarkable circuit
                                        across Sri Lanka, with a range of authentic experiences, while
                                        contributing towards local communities</p>
                                    <button className="main_button_color">Book now</button>
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
                        <div className="">

                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="div_props blog hotel_props">
                <div className="contain">
                    <div>
                        <h3 className="homepage_tab_header">The benchmark for boutique,
                            small luxury resorts in Sri Lanka</h3>
                        <div>
                            <p className="main_p">Conceived by the Fernando family, Sri Lankan tea producers & founders
                                of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                luxury resorts offer the discerning traveler a remarkable circuit
                                across Sri Lanka, with a range of authentic experiences, while
                                contributing towards local communities & the environment through
                                the MJF Foundation & Dilmah Conservation.</p>
                        </div>
                        <div className="grid_4">
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
                </div>
            </div>
            <div className="div_props gallery_props gray_bg">
                <div className="gallery_grid">
                    <div>
                        <div className="contain">
                        <h3 className="homepage_tab_header">The benchmark for boutique,
                            small luxury resorts in Sri Lanka</h3>
                            <p className="main_p">This “best of Sri Lanka” circuit currently features three
                                distinctively original resorts, connected by a thread of peerless
                                service. They are the sole Sri Lankan members of Relais & Chateaux,
                                the global fellowship of individually owned & operated luxury hotels
                                and restaurants. All three resorts; Tea Trails, Cape Weligama
                                and Wild Coast Tented Lodge have won global acclaim as the finest in
                                Sri Lanka.</p>
                        </div>
                        <div className="gallery_img">
                            <img src={Gallery2} alt="image 4" className="gallery_2" />
                            <img src={Gallery3} alt="image 4" className="gallery_2" />
                        </div>
                    </div>
                    <div className="large_bg">
                    </div>
                </div>
            </div>
            <div className="div_props blog hotel_props">
                <div className="contain">
                    <div>
                        <h3 className="homepage_tab_header">The benchmark for boutique,
                            small luxury resorts in Sri Lanka</h3>
                        <div>
                            <p className="main_p">Conceived by the Fernando family, Sri Lankan tea producers & founders
                                of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                luxury resorts offer the discerning traveler a remarkable circuit
                                across Sri Lanka, with a range of authentic experiences, while
                                contributing towards local communities & the environment through
                                the MJF Foundation & Dilmah Conservation.</p>
                        </div>
                        <div className="grid_3">
                            <div>
                                <Avatar size="large"
                                    src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />}
                                        />
                                <h5>Adeleke Ifeoluwase</h5>
                                <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                    of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                    luxury resorts offer the discerning traveler</p>
                            </div>
                            <div>
                            <Avatar size="large"
                                    src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />}
                                        />
                                <h5>Adeleke Ifeoluwase</h5>
                                <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                    of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                    luxury resorts offer the discerning traveler</p>
                            </div>
                            <div>
                            <Avatar size="large"
                                    src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />}
                                        />
                                <h5>Adeleke Ifeoluwase</h5>
                                <p>Conceived by the Fernando family, Sri Lankan tea producers & founders
                                    of Dilmah Ceylon Tea, Resplendent Ceylon’s collection of small,
                                    luxury resorts offer the discerning traveler</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div_props main_side">
                <img src={RC} alt="rc" className="rc" />
            </div>
            <div className="footer">
                <div>
                    <h4>Renaiscence Hotel</h4>
                    <div>
                        <p>
                            Hotel Luxe is an all-in-one WordPress theme to make hotel websites of any kind. Make
                            the hotel website you’ve always dreamt of with Hotel Luxe.
                        </p>
                    </div>
                </div>
                <div>
                    <h4>Contact us</h4>
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
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">Terms and Conditions</Link></li>
                        <li><Link to="">FAQ</Link></li>
                        <li><Link to="">Newsletter</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Homepage;