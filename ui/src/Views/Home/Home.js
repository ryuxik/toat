import React from 'react';
import TextEditor from './TextEditor';

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
            <TextEditor
                userID={props.userID}/>
        </div>
    );
}

export default Home;