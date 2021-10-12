import { useSelector } from 'react-redux';

const VehicleDetails = ({ vehicle }) => {
  const fullEquipments = useSelector(state => state.equipments);

  return (
    <div className="">
      <div className="v-detail">
        <span style={{color: "#555"}}>ID: </span>
        <span style={{textAlign: "right"}}>{vehicle.id}</span>
      </div>
      <div className="v-detail">
        <span style={{color: "#555"}}>Driver's Name: </span>
        <span style={{textAlign: "right"}}>{vehicle.driver}</span>
      </div>
      <div className="v-detail">
        <span style={{color: "#555"}}>Status: </span>
        <span style={{textAlign: "right"}}>{vehicle.status}</span>
      </div>
      <div className="v-detail">
        <span style={{color: "#555"}}>Fuel Type: </span>
        <span style={{textAlign: "right"}}>{vehicle.fuelType}</span>
      </div>
      <div className="v-detail">
        <span style={{color: "#555"}}>Equipments: </span>
        <span style={{textAlign: "right"}}>
          {vehicle.equipments.length > 0 ? vehicle.equipments.map((equipment) => (
            <span key={equipment} style={{marginLeft: "8px"}}> {fullEquipments[equipment-1].name}</span>
          )) : <span style={{marginLeft: "8px"}}>No Equipemnts</span>}
        </span>
      </div>
    </div>
  )
}

export default VehicleDetails
