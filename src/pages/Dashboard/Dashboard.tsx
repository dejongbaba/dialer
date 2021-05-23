import React, { ReactNode } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import placeHolder from "../../assets/png/profile-image.jpeg";

const ContactList = () => {
  return (
    <ul className="contact-list">
      <li className="contact-list-item">
        <img
          className="contact-list-item-image"
          src={placeHolder}
          alt="user image"
        />
        <div className="contact-list-item-info">
          <p>Daniel Patrelli</p>
          <p>08134738933</p>
        </div>
        <div className="contact-list-item-time">8th may 7:00pm</div>
      </li>
      <li className="contact-list-item">
        <img src={placeHolder} alt="user image" />
        <div className="contact-list-item-info">
          <p>Daniel Patrelli</p>
          <p>08134738933</p>
        </div>
        <div className="contact-list-item-time">8th may 7:00pm</div>
      </li>
      <li className="contact-list-item">
        <img src={placeHolder} alt="user image" />
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
        <img src={image} alt="contact image" />
        <div className="contact-card-profile-header">
          <p> Agnes Walter</p>
          <p>Procurement Officer</p>
        </div>
        <img src={icon} alt="icon" />
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
      </div>
      {children}
    </div>
  );
};

const ContactHistory = () => {
  return (
    <div className="contact-card-history">
      <div>Type</div>
      <div>Mobile</div>
      <div>Agent</div>
      <div>Date</div>
    </div>
  );
};

const CallSection = () => {
  return (
    <div className="call-section">
      <h3>Agent Calling: Ahmed Maryam</h3>
      <p>Connected: &nbsp; 0:03</p>
      <p>Agnes Walker</p>
      <h2>081022222222</h2>
      <div className="waveform"></div>
      <div className="call-panel"></div>
      <textarea name="note" id="note"></textarea>
      <div className="log-section">
        <h3>Log Call As</h3>
        <ul>
          <li>
            <input type="checkbox" /> Follow up call
          </li>
          <li>
            <input type="checkbox" /> Follow up call
          </li>
          <li>
            <input type="checkbox" /> Follow up call
          </li>
          <li>
            <input type="checkbox" /> Follow up call
          </li>
        </ul>
      </div>
    </div>
  );
};
function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardLayout>
        <ContactList />
        <ContactCard>
          <ContactHistory />
        </ContactCard>
        <CallSection />
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;
