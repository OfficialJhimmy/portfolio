import React from "react";
import MenuManager from "../../components/Menu/MenuManager/index";
import Menu from "../../components/Menu/index";

function Error404() {
  return (
    <>
      <div className="nav__wrapper">
        <h3>JhimmyOfficial</h3>
        <MenuManager>
          <Menu />
        </MenuManager>
      </div>
    </>
  );
}

export default Error404;
