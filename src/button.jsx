


function Button(){

// three ways to use css : 
//1.external
//2.Modules
//3.INlines


const styles = {
  backgroundColor: "hsl(200,100%,50%)",
color: "black",
padding: "10px 20px",
borderRadius: "5px",
border: "none",
cursor: "pointer",
}


return(

<button style={styles} >Click Me</button>
);




}

export default Button;