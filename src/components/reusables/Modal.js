import React from 'react';
import Modal from 'react-modal'
import {useState} from "react";
import  ballons from "../../assets/deco-default.svg"

const Modal_ =  () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
       <div>
           <Modal
               isOpen={modalIsOpen}
               onRequestClose={() => setModalIsOpen(false)}

               style={{
                   overlay: {
                       backgroundColor: 'grey'
                   },
                   content: {
                       color: 'orange'
                   }
               }}
           >
               <img src={ballons} width={100} height={40}  alt="logo" className="logo"/>
               <h2>Yippiiee!! Your account has been created!</h2>
               <div>kindly check your email for your event ID and access to your event dashboard</div>
               <button onClick={() => setModalIsOpen(false)}>X</button>
           </Modal>
       </div>
    );
};

export default Modal_;