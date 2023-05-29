import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <Header/>
            <Blog></Blog>
            <Footer/>
        </div>
    );
};

export default Home;