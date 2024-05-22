// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
const UseDisclosure = () => {
const [isOpen,setOpen] = useState(false);
const onOpen= ()=>{
    setOpen(true);
};

const onClose = () =>{
  setOpen(false);
};

return {isOpen, onClose, onOpen};
      
    
 
};

export default UseDisclosure;
