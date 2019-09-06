import React from 'react';

const Home = props => {
    const renderWelcomeMessage = () => {
        return ( 
            <div>
                Welcome to TOAT! TOAT is a picture diary adventure you can share with your friends.
            </div>
        );
    }
    return (
        <div className="home-container">{renderWelcomeMessage()}</div>
    );
}

export default Home;