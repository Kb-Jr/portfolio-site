// ExampleComponent.js
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { easeIn, motion } from 'framer-motion';



function CertificationsModal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);

  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

      <div className="overlay-projects-each">
        <h1>{props.title}</h1>
        <button onClick={toggleModal} className="btn-modal">
          View details
        </button>
      </div>

      {modal && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2, type: easeIn }} onClick={(e) => e.stopPropagation()}>
          <div className="overlay">

            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-body-top">
                  <button className="close-modal" onClick={toggleModal}>
                    X
                  </button>
                </div>

                <div className="modal-body-bottom">
                  <div className="cert-left-modal">
                    <h1>{props.title}</h1>
                    <p className="project-details">{props.description}</p>
            
                  </div>
                  <div className="line">

                  </div>
                  <div className="cert-right-modal">
                    <div className="cert-right-modal-image">
                        <img src={props.image} alt="" />
                    </div>
                  </div>
                </div>


              </div>



            </div>
          </div>
        </motion.div>
      )}

    </>
  );
};


export default CertificationsModal;
