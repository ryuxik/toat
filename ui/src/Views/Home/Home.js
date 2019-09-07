import React from 'react';
import Editor from './Editor';

const Home = props => {
    const renderWelcomeMessage = () => {
        return ( 
            <div className="welcome-message">
                Write Today's Entry!
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