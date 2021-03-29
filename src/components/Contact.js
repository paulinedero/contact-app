import React from "react";
import "./contact.css";

function Contact() {
  const name = "Pauline De Ro";
  const avatar = "https://avatars.githubusercontent.com/u/63793604?v=4";
  const online = false;
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="person" />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          {online ? (
            <p className="status-text">
              <div className="status-online"></div>Online
            </p>
          ) : (
            <p className="status-text">
              <div className="status-offline"></div>Offline
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
