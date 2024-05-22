//import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import { createPortal} from "react-dom";
// eslint-disable-next-line no-unused-vars
const Modal = ({onClose,isOpen,children}) => {
  return createPortal (
 <>
  { isOpen && (
    <div    
    className="grid absolute top-0 z-40 h-screen w-screen backdrop-blur">
    <div className='relative z-50 m-auto min-h-[180px] min-w-[60%] bg-white p-4'>
        <div className='flex justify-end'>
        <FaRegWindowClose 
        // onClick={onClose}
        className='text-2xl self-end'/>
        </div>
        {children}
    </div>
   
   </div>
 
  )}
  </>,
  document.getElementById("modal-root")
  );
};

export default Modal;
