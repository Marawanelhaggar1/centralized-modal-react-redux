import React, { Fragment } from "react";
import CloseSVG from "../../../assets/close.svg";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../forms/Login";
import Register from "../../forms/Register";
import LoginRegister from "../../forms/LoginRegister";
import { closeModel } from "../../../store/modelSlice";

import "./modal.css";

const Modal = () => {
  const dispatch = useDispatch();

  const { isOpen, componentName, position, info } = useSelector(
    (state) => state.model
  );

  const componentLockUp = { Login, LoginRegister, Register };
  let renderComponent;
  if (componentName) {
    const SelectedComponent = componentLockUp[componentName];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent {...info} />;
    }
  }

  const closeModelHandler = () => dispatch(closeModel());

  return (
    <Fragment>
      <div
        className={`modal-backDrop ${isOpen ? "modal-show" : "modal-hide"} `}
        onClick={closeModelHandler}
      ></div>
      <div
        className={`modal-container ${isOpen ? "modal-show" : "modal-hide"} `}
      >
        <div className="modal-close">
          <img
            src={CloseSVG}
            className="modal-close-img"
            alt="close-modal"
            onClick={closeModelHandler}
          />
        </div>
        <div className={`modal-content ${position}`}>{renderComponent}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
