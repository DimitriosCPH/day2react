import React from 'react';
import cars from './carStore';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
function TableItems(props){
  return <tr>{props.value}</tr>
}
function NumberTable(props){
  const numbers = props.numbers;
  const tableItems = numbers.map((number) =>
      <TableItems key={number.toString()}
                  value={number}/>
  );
  return (
    <table>
      <tr>Numbers: </tr>
      {tableItems}
    </table>
  )
}

function CarRow(props){
  return <tr><td>{props.car.id}</td> <td>{props.car.make}</td> <td>{props.car.model}</td> <td> {props.car.year}</td></tr>
}
function CarTable(props){
  const cars = props.cars;
  const carItems = cars.map((c) =>
      <CarRow key={c.id}
              car={c}/>
  );
  const tableStyle = {
    padding: 25,
    border: 1
  }
  return (
    <table className={tableStyle}>
      <tr>
      <td>Id</td>
      <td>Make</td>
      <td>Model</td>
      <td>Year</td>
      </tr>
      {carItems}
    </table>
  ) 
}


class ListDemo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numbers: props.numbers,
      cars: cars.getAllCars()
     }
  }
	render(){
		return (
				<div>
            <NumberList numbers={this.state.numbers}/>				
            <NumberTable  numbers={this.state.numbers}/>            
            <CarTable cars={this.state.cars}/>
				</div>
			)
	}
		
}

export default ListDemo;