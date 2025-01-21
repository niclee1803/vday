import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function CardPage() {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleResponse = (answer) => {
    setResponse(answer);
  };

  return (
    <div>
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
      <div className="cardPageCard">
        <div className="text">
          Will you be my Valentine? <br /> - Nic
        </div>
        <div className="response-container">
          {response === null ? (
            <div className="button-container">
              <button 
                onClick={() => handleResponse('yes')}
                className="response-button yes-button"
              >
                Yes
              </button>
              <button 
                onClick={() => handleResponse('no')}
                className="response-button no-button"
              >
                No
              </button>
            </div>
          ) : response === 'yes' ? (
            <p className="response-text">You just made my day! <br/> I can't wait to spend Valentines day with you<br/></p>
          ) : (
            <div className="retry-container">
              <p className="response-text">Oh no :( &nbsp; It's okay. You're still amazing &lt;3 <br/> But I hope you change your mind</p>
              <button 
                onClick={() => handleResponse(null)}
                className="response-button retry-button"
              >
                Change your mind?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardPage;