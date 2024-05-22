
import Modal from './Modal';
import {ErrorMessage, Field,Form, Formik} from "formik";
import { addDoc,collection,doc ,updateDoc} from 'firebase/firestore';
import {db} from '../config/firebase';
import {toast} from 'react-toastify';
import * as Yup from "yup";


const EntryValidation = Yup.object().shape({
  name:Yup.string().required("Name is required"),
  email:Yup.string().email("Invalid email").required("Email is required"),
}
)



const AddAndUpdateContact = ({isOpen,onClose, isUpdate, contact}) => {
  const addContact = async (contact)=>{
   try {
       const contactRef = collection(db,"contacts");
       await addDoc(contactRef,contact);
       onClose();
       toast.success("Contact added sucessfully")
    } catch(error){
        console.log(error)
    }
  };

  const updateContact = async (contact,id)=>{
    try {
        const contactRef = doc(db,"contacts",id);
        await updateDoc(contactRef,contact);
        onClose();
        toast.success("Contact updated sucessfully")
     } catch(error){
         console.log(error)
     }
   };
 
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
     
    <Formik validationSchema={EntryValidation}
    initialValues={isUpdate 
      ? {
      name:contact.name,
      email: contact.email

    } :
           
      {
        name:"",
        email:""
            
        }
    }

        onSubmit={(values) =>{
           isUpdate ? 
           updateContact(values,contact.id) :
            addContact(values);
        }

        }>
        
        <Form className='flex flex-col'>
             <div className='flex flex-col gap-1'>
             <label htmlFor='name'>Name</label>
            <Field name ="name" className="border-2 border-black rounded  h-10"/>
            <div className='text-xs text-red-500'>
              <ErrorMessage name="name" />
            </div>
             </div>

             <div className='flex flex-col gap-1'>
             <label htmlFor='email'>Email</label>
            <Field name ="email" className="border-2 border-black rounded h-10 "/>
            <div className='text-xs text-red-500'>
              <ErrorMessage name="email" />
            </div>
             </div>

             <button className='px-3 py-1.5 bg-green-500 border-black border-1.5 mt-2 rounded-xl self-end'>
               
                {isUpdate ? "update":"add"} contact;




             </button>
           
           

        </Form>
    </Formik>



    </Modal>
    </div>
  )
}

export default AddAndUpdateContact
