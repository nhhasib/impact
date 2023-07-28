import React from 'react';
import Banner from './Banner/Banner';
import Welcome from './Welcome/Welcome';
import Events from './Events/Events';
import Currencies from './Currencies/Currencies';
import Speakers from './Speakers/Speakers';
import Sponsored from './Sponsored/Sponsored';
import Conference from './Conference/Conference';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Events></Events>
            <Currencies></Currencies>
            <Speakers></Speakers>
            <Conference></Conference>
            <Sponsored></Sponsored>
        </div>
    );
};

export default Home;