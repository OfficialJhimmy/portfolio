import React from "react";
import MenuButton from "./MenuButton/index";
import MenuContent from "./MenuContent/index";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <MenuButton />
      <MenuContent />
    </div>
  );
}
