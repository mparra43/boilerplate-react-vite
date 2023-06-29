import { Button } from 'primereact/button';
import { useState } from 'react';



export const Navbar = () => {
  const [showOption, setShowOption] = useState(false)
  const signOff = () => {
    setShowOption(!showOption)
  }
  return (
    <>

      <div className="position-relative w-100 py-2 px-3 border-bottom shadow-sm border-rounder rounded d-flex justify-content-between">
        <h4 className="pt-1 text-success">Trippter</h4>
        <Button icon="pi pi-align-justify" className='p-button-text p-button-success p-button-outlined' onClick={signOff} />
        {showOption &&
          <div className='position-absolute bg-white shadow-sm border-rounder p-2' style={{ width: '20rem', top: '3rem', right: '3rem' }}>
            <span >hazte un anfitrión</span>
            <hr />
          </div>

        }
      </div>
    </>
  );
};
