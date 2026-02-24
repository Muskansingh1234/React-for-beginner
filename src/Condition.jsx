import PropTypes from 'prop-types';
// Conditional rendering : allows you to control what gets rendered in your application  based on certain conditions 
// {show, hide or change components}

function Usergreeting(props)  {
{/*
if(props.isLoggedIn){
  return <h2>welcome {props.username}</h2>
}
else{
  return <h2>Please log in to continue</h2>
}
*/ }

return (props.isLoggedIn ? <h2 className="welcome-m">Welcome {props.username}</h2> :<h2 className="L">Please Log in to continue</h2>);

}

Usergreeting.Prototype={
  isLoggedIn : PropTypes.bool,
  username:PropTypes.string,
}
Usergreeting.defaultProps={
  isLoggedIn : false,
  username :"guest",
}

export default Usergreeting;