import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVehicle } from '../actions/';

const AddVehicle = () => {
  const [vName, setVehicleName] = useState('');
  const [dName, setDriverName] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [fuel, setFuel] = useState('');
  const [hasCrane, setHasCrane] = useState(false);
  const [hasTacho, setHasTacho] = useState(false);
  const [hasFireExt, setHasFireExt] = useState(false);
  const [hasHook, setHasHook] = useState(false);
  const [hasCustomEquip, setHasCustomEquip] = useState(false);

  const dispatch = useDispatch();

  function resetForm() {
    setVehicleName('');
    setDriverName('');
    setIsActive(false);
    setFuel('');
    setHasCrane(false);
    setHasTacho(false);
    setHasFireExt(false);
    setHasHook(false);
    setHasCustomEquip(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addVehicle({
      vName, dName, isActive, fuel, hasCrane,
      hasTacho, hasFireExt, hasHook, hasCustomEquip
    }));

    resetForm();
  }
  return (
    <form className='add-form'
      onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Vehicle Name</label>
        <input type='text'
          placeholder='New Vehicle Name'
          value={vName}
          onChange={(e) => setVehicleName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Driver</label>
        <input type='text'
          placeholder="Driver's name"
          value={dName}
          onChange={(e) => setDriverName(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Active</label>
        <input type="checkbox"
          checked={isActive}
          value={isActive}
          onChange={(e) => setIsActive(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control'>
        <label>Fuel Type</label>
        <input type='text'
          placeholder='Diesel/LNG/CNG/Electrical'
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        />
      </div>
      <h4>Equipments</h4>
      <div className='form-control form-control-check'>
        <label>Crane</label>
        <input type="checkbox"
          checked={hasCrane}
          value={hasCrane}
          onChange={(e) => setHasCrane(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Tachograph</label>
        <input type="checkbox"
          checked={hasTacho}
          value={hasTacho}
          onChange={(e) => setHasTacho(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Fire Extinguisher</label>
        <input type="checkbox"
          checked={hasFireExt}
          value={hasFireExt}
          onChange={(e) => setHasFireExt(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Hook</label>
        <input type="checkbox"
          checked={hasHook}
          value={hasHook}
          onChange={(e) => setHasHook(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Custom equipment</label>
        <input type="checkbox"
          checked={hasCustomEquip}
          value={hasCustomEquip}
          onChange={(e) => setHasCustomEquip(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Vehicle' className='btn btn-block'/>
    </form>
  )
}

export default AddVehicle
