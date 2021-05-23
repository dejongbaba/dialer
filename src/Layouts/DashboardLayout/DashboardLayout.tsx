import React from "react";
import "./dashboardlayout.scss";
import phone from "../../assets/svg/015-smartphone.svg";
import user from "../../assets/svg/041-user.svg";
import setting from "../../assets/svg/048-settings.svg";
import wallet from "../../assets/svg/010-phone book.svg";
import notification from "../../assets/svg/038-notification.svg";
import profile from "../../assets/png/profile-image.jpeg";
const SideMenu = () => {
  return (
    <nav className="side-menu">
      <ul>
        <li className="side-menu-item">
          <img className="side-menu-item-icon" src={phone} alt="call" />
        </li>
        <li className="side-menu-item">
          <img className="side-menu-item-icon" src={user} alt="user" />
        </li>
        <li className="side-menu-item">
          <img className="side-menu-item-icon" src={setting} alt="setting" />
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
            <img src={wallet} alt="wallet" />
            &nbsp; #5000
          </li>
          <li className="top-nav-menu-item">
            <img src={notification} alt="notification" />
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

export default DashboardLayout;
