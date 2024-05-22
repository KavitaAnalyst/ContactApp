/* eslint-disable react/jsx-no-undef */
import { FaRegUserCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { deleteDoc,doc } from "firebase/firestore";
import {db} from '../config/firebase';
import AddAndUpdateContact from "./AddAndUpdateContact";
import UseDisclosure from "../hooks/UseDisclosure";
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const ContactCards = ( {contact} ) => {
  
  // eslint-disable-next-line no-unused-vars
  const { isOpen, onClose, onOpen } = UseDisclosure();

  const deleteContact = async (id)=>{

       try{
        await deleteDoc(doc(db,"contacts",id));
        toast.success("contact deleted successfully!!")
       }catch(error) {
          console.log(error);  

       }

  }


  return (
    <div>
        <div 
          key={contact.id} 
           className='flex p-2 rounded-lg md-1 items-center justify-between bg-slate-500'>
            <FaRegUserCircle className="text-orange text-3xl" />
            <div className='text-white'>
              <h2 className='font-medium'>{contact.name}</h2>
              <p className='text-sm'>{contact.email}</p>
            </div>
            <div className='flex gap-2'>
            <CiEdit onClick={onOpen} className='text-black font-bold cursor-pointer text-2xl' />
              <FaTrashAlt onClick={()=> deleteContact(contact.id)}
              className='text-red-600 cursor-pointer text-2xl'/>
            
            </div>
          </div>
          <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default ContactCards
