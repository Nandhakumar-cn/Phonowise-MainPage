import React from "react";
import Header from "../My-Account/Header";

function Settings() {
  const heaterprops = {
    title: "Settings",
    showBackIcon: true,
  };
  return (
    <div>
      <Header {...heaterprops} />
    </div>
  );
}

export default Settings;
