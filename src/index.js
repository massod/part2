import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//Global variables
const course = "Half stack application development "
 const parts = [{partName:"Fundamentals of React",Ex : 10},{partName: "Using props to pass data", Ex : 7},{partName : "State of a Component", Ex : 14}]
//App component considered as main component
const App = ()=> {
  
    return(
     
    <div>
      <Header courseName = {course} />
      <Contents />
      <Total sum = {parts[0].Ex + parts[1].Ex + parts[2].Ex} />
    </div>
    )
}

//Curly brackets and return keyword can be omitted like the following
const Header = (props) => 
  (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )

const Contents = ()=>{
  return(
    <div>
      <Parts name = {parts[0].partName} ex = {parts[0].Ex} />
      <Parts name = {parts[1].partName} ex = {parts[1].Ex} />
      <Parts name = {parts[2].partName} ex = {parts[2].Ex} />
    </div>
  )
}
const Total = function(props){
  return(
    <div>
      <p>Total Course gradings are :{props.sum}</p>
    </div>
  )
}

const Parts = (props) => {
  return(
    <div>
        <p>{props.name} {props.ex}</p>
    </div>
  
  )
}





ReactDOM.render(<App />,document.getElementById('root'))

