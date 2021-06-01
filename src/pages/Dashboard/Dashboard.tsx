import React from "react";
import DashboardLayout, {
  CallSection,
  ContactCard,
  ContactHistory,
  ContactList,
} from "../../Layouts/DashboardLayout/DashboardLayout";
import placeHolder from "../../assets/png/profile-image.jpeg";
import phoneIcon from "../../assets/svg/phone-ring.svg";
import "./Dashboard.scss";
// @ts-ignore
import FloatingButton from "../../components/FloatingButton/FloatingButton";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardLayout>
        <ContactList>
          <FloatingButton title={"Load More"} />
        </ContactList>
        <ContactCard image={placeHolder} icon={phoneIcon}>
          <ContactHistory />
        </ContactCard>
        <CallSection />
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;
