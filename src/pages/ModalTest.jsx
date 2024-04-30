import React from 'react'

const ModalTest = () => {
  return (
    <div className='sub-projects-container'>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="modal-body">
    <div className="left-modal">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4 font-bold">Press ESC key or click on ✕ button to close</p>
    </div>
    <div className="line">

    </div>
    <div className="right-modal">
        
    </div>
    </div>
    
    
  </div>
</dialog>
    </div>
  )
}

export default ModalTest