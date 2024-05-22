// App.js
import './App.css'
import Navbar from './Components/Navbar'
import { FiSearch } from 'react-icons/fi';
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCards from './Components/ContactCards';

import AddAndUpdateContact from './Components/AddAndUpdateContact';
import UseDisclosure from './hooks/UseDisclosure';
// eslint-disable-next-line no-unused-vars
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConatctNotFound from './Components/ConatctNotFound';
  


function App() {
  const [contacts, setContact] = useState([]);
  
  const { isOpen, onClose, onOpen } = UseDisclosure();

  

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
     

        onSnapshot(contactsRef,(snapshot) => {
          const contactLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setContact(contactLists); 
          return contactLists;
        });
 
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);


  const filterContacts = (e) =>{

   const value = e.target.value;
   const contactsRef = collection(db, "contacts");
  
   onSnapshot(contactsRef,(snapshot) => {
    const contactLists = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));


    const filteredContacts = contactLists.filter(contact => 
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setContact(filteredContacts); 
    return filteredContacts;
  });

  }

  return (
    <>
    <div className='mx-auto max-w-[400px] px-4 bg-slate-300 p-10'>
      <Navbar />
      <div className='flex ml-3 gap-4'>
        <div className='relative flex flex-grow items-center'>
          <FiSearch className='absolute ml-1 text-black text-3xl' />
          <input onChange={filterContacts} type="text" placeholder="" className='rounded-md bg-transparent h-10 border-2 border-black flex-grow pl-9 text-black' />
          <div className='text-white '>
            <CiCirclePlus 
            onClick={onOpen} 
            
            className='text-5xl ml-2 text-black cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='mt-4 gap-4 flex flex-col max-w-[400px]'>
        { contacts.length <= 0 ? (
          <ConatctNotFound/>
        ) : (
        contacts.map((contact) => (
             <ContactCards key={contact.id} contact={contact} />
        )
        ))
      }
      </div>
    </div>
    <AddAndUpdateContact 
      onClose={onClose}
      isOpen={isOpen}
    
    />
    <ToastContainer autoClose={5000} hideProgressBar={false} position='button-center' />
    </>
  );
}

export default App;
