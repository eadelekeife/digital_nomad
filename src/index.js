import 'antd/dist/antd.css';
import './assets/css/index.css';


import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './nav';
import Homepage from './components/homepage';

const HotelApp = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" exact element={<Homepage />} />
                    {/* <Route path="/bookings" component= */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<HotelApp />, document.querySelector('#root'));