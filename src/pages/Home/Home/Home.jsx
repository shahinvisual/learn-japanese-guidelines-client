import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import ServiceCards from '../Courses/ServiceCards';

const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceCards/>
            <Choose />
        </div>
    );
};

export default Home;