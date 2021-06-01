import React, { ReactNode } from "react";
import "./dashboardlayout.scss";
// import phone from "../../assets/svg/phone.svg";
import user from "../../assets/svg/people.svg";
import setting from "../../assets/svg/settings.svg";
import profile from "../../assets/png/profile-image.jpeg";
import { NavLink } from "react-router-dom";
import placeHolder from "../../assets/png/profile-image.jpeg";
import stop from "../../assets/svg/record-call.svg";
import end from "../../assets/svg/stop.svg";
import mute from "../../assets/svg/mute-call.svg";
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <ul>
        {/*<li className="side-menu-item">*/}
        {/*  <NavLink to={"/dashboard"}>*/}
        {/*    <img className="side-menu-item-icon" src={phone} alt="call" />*/}
        {/*  </NavLink>*/}
        {/*</li>*/}
        <li className="side-menu-item">
          <NavLink to="/profile">
            <img className="side-menu-item-icon" src={user} alt="user" />
          </NavLink>
        </li>
        <li className="side-menu-item">
          <NavLink to="/settings">
            <img className="side-menu-item-icon" src={setting} alt="setting" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const ContentSection = ({ children }: any) => {
  return (
    <div className="content-section flex-grow p-4">
      <nav className="top-nav flex justify-between">
        <h3 className="top-nav-title">Contacts</h3>
        <ul className="top-nav-menu">
          <li className="top-nav-menu-item">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/wallet.png"
              alt="wallet"
            />
            &nbsp; &#8358; 5,000,000
          </li>
          <li className="top-nav-menu-item">
            <img
              alt="notification"
              src="https://img.icons8.com/ios-filled/50/000000/appointment-reminders--v1.png"
            />
          </li>
          <li className="top-nav-menu-item">
            <img className="profile-image" src={profile} alt="profile" />
          </li>
        </ul>
      </nav>
      <div className="content-section-inner">{children}</div>
    </div>
  );
};

function DashboardLayout({ children }: any) {
  return (
    <div className="dashboard-layout flex min-h-screen ">
      <SideMenu />
      <ContentSection>{children}</ContentSection>
    </div>
  );
}

export const ContactListItem = () => {
  return (
    <div className="contact-list-item">
      <img className="contact-list-item-image" src={placeHolder} alt="user" />
      <div className="contact-list-item-info">
        <p>Daniel Patrelli</p>
        <p>08134738933</p>
      </div>
      <div className="contact-list-item-time">8th may 7:00pm</div>
    </div>
  );
};

const ContactFilter = () => {
  return (
    <div className="contact-list-filter">
      <select className="contact-list-filter-select" name="contactFilter" id="">
        <option value="sortBy">Sort By</option>
        <option value="lastContacted">Last Contacted</option>
      </select>
      <div className="contact-list-filter-view">Last contacted</div>
    </div>
  );
};

type clProps = {
  children: ReactNode;
  className: string;
};
export const ContactList = ({ children, className }: Partial<clProps>) => {
  return (
    <div>
      <ContactFilter />
      <div className={`contact-list ${className ? className : ""}`}>
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
        {children}
      </div>
    </div>
  );
};

type ContactCardProp = {
  children: ReactNode;
  icon?: string;
  image?: string;
};

export const ContactCard = ({ children, image, icon }: ContactCardProp) => {
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

export const ContactHistoryItem = () => {
    return<div className="contact-card-history-item">
        <div>Answered</div>
        <div>081022223232</div>
        <div>Ahmed M</div>
        <div>
            <p>05/04</p>
            <p>2:00pm</p>
        </div>
    </div>
}
export const ContactHistory = () => {
  return (
    <div className="contact-card-history">
      <h2 className="contact-card-history-title">Contact History</h2>
      <div className="contact-card-history-header">
        <div>Type</div>
        <div>Mobile</div>
        <div>Agent</div>
        <div>Date</div>
      </div>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
        <ContactHistoryItem/>
    </div>
  );
};

export const CallSection = () => {
  return (
    <div className="call-section">
      <h3>Agent Calling: Ahmed Maryam</h3>
      <p className="call-section-timer">Connected: &nbsp; 0:03</p>
      <p className="call-section-title">Agnes Walker</p>
      <h2 className="call-section-number">081022222222</h2>
      <div className="waveform"></div>
      <div className="call-section-panel">
        <img src={stop} alt="record" />
        <img src={end} alt="send" />
        <img src={mute} alt="mute" />
      </div>
        <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName call-section-textarea"
            editorClassName="editorClassName"
        />
      {/*<textarea className="call-section-textarea" name="note" id="note" />*/}
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

export default DashboardLayout;
