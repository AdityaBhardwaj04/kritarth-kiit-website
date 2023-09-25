import React, { useRef, useEffect, useState } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Modal from 'react-modal';
import kritarthlogo from './images/kritarth logo 1 1.svg'

const FORM_URL = "https://forms.office.com/r/bCAyi1W99t";

Modal.setAppElement('#root') // replace '#root' with the id of your app element

const Form = () => {
  const iframeRef = useRef(null);
  const [modalIsOpen,setIsOpen] = useState(true);

  function closeModal(){
    setIsOpen(false);
  }

  useEffect(() => {
    const ps = new PerfectScrollbar(
      iframeRef.current.contentWindow.document.body
    );
    return () => ps.destroy();
  }, []);

  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    if (!window.trustedTypes.defaultPolicy) {
      window.trustedTypes.createPolicy("default", {
        createHTML: (string, sink) => string,
      });
    }
  }

  return (
    <div
      style={{ overflow: "hidden", position: "relative", minHeight: "100vh" }}
    >
      <iframe
        title="something"
        ref={iframeRef}
        src={FORM_URL}
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        allowFullScreen={true}
      />

      <div className="fixed top-0 -z-20 right-0 w-screen h-screen back"></div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex', // Add this line
            alignItems: 'center', // Add this line
            justifyContent: 'center' // Add this line
          },
          content: {
            color: 'lightsteelblue',
            width: '60%',
            height: '50%',
            margin: 'auto',
            backgroundColor: 'black',
            position: 'relative'
          }
        }}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} style={{position: 'absolute', top: '10px', right: '10px'}}>X</button>
        <div className="flex justify-center items-center ">
          <h2 className="font-raleway text-white text-center justify-center text-sm md:text-xl lg:text-2xl leading-3 font-normal font-poppins">Registration Closes Today</h2>
        </div>
        <div className="flex justify-center items-center ">
          <p className="font-raleway text-white text-center justify-center text-sm md:text-xl lg:text-2xl leading-3 font-normal font-poppins mt-10">Don't miss out on this opportunity!</p>
        </div>
        
        <div className="flex justify-center items-center">
          <img src= {kritarthlogo} alt="Kritarth Logo" className="w-1/2 mt-10"/>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
