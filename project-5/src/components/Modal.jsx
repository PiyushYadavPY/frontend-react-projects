import React from "react";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center absolute top-0 h-screen w-screen backdrop-blur z-40">
          <div className="relative z-50 min-h-[200px] min-w-[80%] bg-white p-4 ">
            <div className="flex justify-end">
              <IoMdClose onClick={onClose} className="self-end text-2xl " />
            </div>
            {children}
          </div>
          <div />
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
