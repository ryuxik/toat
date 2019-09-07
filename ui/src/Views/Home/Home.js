import React from 'react';
import Editor from './Editor';

const Home = props => {
    const renderWelcomeMessage = () => {
        return ( 
            <div>
                Welcome to TOAT! TOAT is a picture diary adventure you can share with your friends.
            </div>
        );
    }
    return (
        <div className="home-container">
            {renderWelcomeMessage()}
            <Editor></Editor>
        </div>
    );
}

export default Home;