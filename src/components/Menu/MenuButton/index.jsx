import React, { useContext } from "react";
import { MenuContext } from "../MenuManager/index";
import cn from "classnames";

import "./index.css";

function MenuButton() {
  const { setOpen, open } = useContext(MenuContext);

  return (
    <div className={cn("menu-button-wrap", { open })}>
      <button className="menu-button" onClick={() => setOpen(!open)}>
        <span />
      </button>
    </div>
  );
}

export default MenuButton;
