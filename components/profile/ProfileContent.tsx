"use client";

import { useState } from "react";
import ProfileSidebar, { TabId } from "./ProfileSidebar";
import PersonalDetails from "./PersonalDetails";
import MyBookings from "./tabs/MyBookings";
import WalletTab from "./tabs/Wallet";
import Notifications from "./tabs/Notifications";
import Settings from "./tabs/Settings";

export default function ProfileContent() {
  const [activeTab, setActiveTab] = useState<TabId>("details");

  // This function acts as a router for the tabs
  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return <PersonalDetails />;
      case "bookings":
        return <MyBookings />;
      case "wallet":
        return <WalletTab />;
      case "notifications":
        return <Notifications />;
      case "settings":
        return <Settings />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 min-w-0">{renderTabContent()}</div>
    </div>
  );
}
