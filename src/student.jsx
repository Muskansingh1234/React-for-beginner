import PropTypes from 'prop-types'

// props are used as key-value pair . read-only properties that are shared between components. 
// A parent component can send data to a child component .
// <Component key=value/>

//proptypes:a mechanism that ensures that the passed value is of the correct datatypes.
// Eg: PropTypes.number

//Default PropType:default values for props in case they are not passed from the parent component .


function Student(props){
  return(
<div className="student">

<p>Name :{props.name}</p>
<p>Age: {props.age}</p>
<p>Student : {props.isstudent ?"yes" :"no"}</p>

</div>


  );
}
Student.propTypes = {
name:PropTypes.string,
age : PropTypes.number,
isstudent : PropTypes.bool,

}

Student.defaultProps= {
  Name : "guest",
  Age: 0,
  isstudent : true,
}

export default Student