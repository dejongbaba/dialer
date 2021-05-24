import React, { ReactNode } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import placeHolder from "../../assets/png/profile-image.jpeg";
import phoneIcon from "../../assets/svg/036-microphone.svg";
import end from "../../assets/svg/036-microphone.svg";
import mute from "../../assets/svg/047-user.svg";
import stop from "../../assets/svg/036-microphone.svg";
import "./Dashboard.scss";

const ContactList = () => {
  return (
    <ul className="contact-list">
      <li className="contact-list-item">
        <img className="contact-list-item-image" src={placeHolder} alt="user" />
        <div className="contact-list-item-info">
          <p>Daniel Patrelli</p>
          <p>08134738933</p>
        </div>
        <div className="contact-list-item-time">8th may 7:00pm</div>
      </li>
      <li className="contact-list-item">
        <img className="contact-list-item-image" src={placeHolder} alt="user" />
        <div className="contact-list-item-info">
          <p>Daniel Patrelli</p>
          <p>08134738933</p>
        </div>
        <div className="contact-list-item-time">8th may 7:00pm</div>
      </li>
      <li className="contact-list-item">
        <img className="contact-list-item-image" src={placeHolder} alt="user" />
        <div className="contact-list-item-info">
          <p>Daniel Patrelli</p>
          <p>08134738933</p>
        </div>
        <div className="contact-list-item-time">8th may 7:00pm</div>
      </li>
    </ul>
  );
};

type ContactCardProp = {
  children: ReactNode;
  icon?: string;
  image?: string;
};
const ContactCard = ({ children, image, icon }: ContactCardProp) => {
  return (
    <div className="contact-card">
      <div className="contact-card-profile">
        <img src={image} className="contact-card-profile-image" alt="contact" />
        <div className="contact-card-profile-header">
          <h2> Agnes Walter</h2>
          <p>Procurement Officer</p>
        </div>
        <img
          className="contact-card-profile-action-icon"
          src={icon}
          alt="icon"
        />
      </div>
      <div className="contact-card-profile-text">
        <p>company</p>
        <p>NAFDAC</p>
      </div>
      <div className="contact-card-profile-text">
        <p>Department</p>
        <p>Procurement</p>
      </div>
      <div className="contact-card-profile-text">
        <p>Email</p>
        <p>dejongbaba@gmail.com</p>
      </div>
      <div className="contact-card-profile-text">
        <p>Phone</p>
        <p>081230303043</p>
      </div>
      {children}
    </div>
  );
};

const ContactHistory = () => {
  return (
    <div className="contact-card-history">
      <h2 className="contact-card-history-title">Contact History</h2>
      <div className="contact-card-history-header">
        <div>Type</div>
        <div>Mobile</div>
        <div>Agent</div>
        <div>Date</div>
      </div>

      <div className="contact-card-history-item">
        <div>Answered</div>
        <div>081022223232</div>
        <div>Ahmed M</div>
        <div>
          <p>05/04</p>
          <p>2:00pm</p>
        </div>
      </div>
    </div>
  );
};

const CallSection = () => {
  return (
    <div className="call-section">
      <h3>Agent Calling: Ahmed Maryam</h3>
      <p className="call-section-timer">Connected: &nbsp; 0:03</p>
      <p className="call-section-title">Agnes Walker</p>
      <h2 className="call-section-number">081022222222</h2>
      <div className="waveform"></div>
      <div className="call-section-panel">
        <img src={stop} alt="stop" />
        <img src={end} alt="send" />
        <img src={mute} alt="mute" />
      </div>
      <textarea
        className="call-section-textarea"
        name="note"
        id="note"
      ></textarea>
      <div className="log-section">
        <h3>Log Call As</h3>
        <div className="log-section-action">
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
          <label>
            <input type="checkbox" /> Follow up call
          </label>
        </div>
      </div>
    </div>
  );
};

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardLayout>
        <ContactList />
        <ContactCard image={placeHolder} icon={phoneIcon}>
          <ContactHistory />
        </ContactCard>
        <CallSection />
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;
