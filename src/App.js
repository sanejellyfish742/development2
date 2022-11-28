import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import bakeryData from "./assets/bakery-data.json";



let nextId = 0;
function App() {
	const [capacity, setCapacity] = useState(0);
	const [computers, setComputers] = useState(false);
	const [av, setAV] = useState(false);
	const [rooms, setRooms] = useState(() => new Set());
	const base = bakeryData
    const numAscending = [...bakeryData].sort((a, b) => a.capacity - b.capacity)
    const numDescending = [...bakeryData].sort((a, b) => b.capacity - a.capacity)
	const [sort, setSort] = useState(base);

	const handleComputers = () => {
	setComputers(!computers);	};
	const handleAV = () => {
	setAV(!av);	};

function AddButton({ room, onClick }) {
  return (
    <button onClick={() => {
				if(!rooms.has(room)) {
        setCapacity(a => a + room.capacity);
		setRooms(prev => new Set(prev).add(room));
	} else {
		
	}}}>Add to Reservation</button>
  );
}

function RemoveButton({ room, onClick }) {
  return (
    <button onClick={() => {
		

		if(rooms.has(room)) {
        setCapacity(a => a - room.capacity);
        setRooms(prev => {
      const next = new Set(prev);

      next.delete(room);

      return next;
    });
	} else {
		
	}}}>Remove from Reservation</button>
  );
}


function ResetButton({ onClick }) {
  return (
    <button onClick={() => {
        setCapacity(0);
        setRooms(() => new Set());
      }}>Clear Selections</button>
  );
}


function SortUpButton({ onClick }) {
  return (
    <button onClick={() => {
        setSort(numAscending);
      }}>Sort by Ascending Capacity</button>
  );
}

function SortDownButton({ onClick }) {
  return (
    <button onClick={() => {
        setSort(numDescending);
      }}>Sort by Descending Capacity</button>
  );
}

function ResetList({ onClick }) {
  return (
    <button onClick={() => {
        setSort(base);
      }}>Sort by Room Number (Original Order)</button>
  );
}

class Aggregator extends React.Component {
  render() {
	  return (
  <div><ol>
		{!capacity && <p>No rooms selected!</p>}
        {Array.from(this.props.rooms).map(room => (
          <li>{room.name}, capacity: {room.capacity}</li>
        ))}
      </ol>
	  Total capacity of rooms in reservation: {capacity}</div>);
}
}

  return (
    <div className="App">
	<label>
        <input
          type="checkbox"
          checked={computers}
          onChange={handleComputers}
        />
        Has computers?
      </label>
	  	<label>
        <input
          type="checkbox"
          checked={av}
          onChange={handleAV}
        />
        Has AV?
      </label>
	  <br>
	  </br>
	  <SortUpButton onclick={SortUpButton}/>
	  <SortDownButton onclick={SortDownButton}/>
	  <ResetList onclick={ResetList}/>
      <h1>Reservable CIT Rooms</h1> {/* TODO: personalize your bakery (if you want) */}
      <div class="flex"> {sort.map((room, index) =>  

		(!computers && !av) || (!computers && av && room.av) || (computers && !av && room.computers) || (computers && av && room.computers && room.av) ? 
		(<div class="item"><p>
		
	      <h2>{room.name}
		  	      <p>Capacity: {room.capacity}</p></h2>
				  	     <p> {room.description}</p>
				  	     <p>Has computers: {room.computers}</p>
				  	     <p>Has AV: {room.av}</p>

					   <p> <img style={{ width: "70%", height: "50%" }} src={room.image} alt={room.description}></img></p>
				  	   <p>  <AddButton room={room} onclick={AddButton}/></p>
				  	   <p>  <RemoveButton room={room} onclick={RemoveButton}/></p>
		</p></div>) : (<></>) 
      )}
	  </div>
        <h2>Current Reservation</h2>
        {/* TODO: render a list of items in the cart */}
		<Aggregator rooms={rooms}>
		</Aggregator>
				  	   <p>  <ResetButton onclick={ResetButton}/></p>
					   
					   <button>Reserve!</button>

    </div>
  );
}

export default App;
