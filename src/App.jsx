import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./button.jsx"
import Student from "./student.jsx"
import Usergreeting from "./Condition.jsx"

function App() {

  return(
<>
{/* 
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    <Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Button></Button>



<Student  name="Spongebob" age="39" isstudent={false}></Student>
<Student name ="muskan" age="20" isstudent={true}></Student>
<Student name ="madhav" age="30" isstudent={true}></Student>
<Student/>
<Student></Student>
<Student></Student>
*/}


<Usergreeting isLoggedIn={true} username = "Brocode" ></Usergreeting>
<Usergreeting></Usergreeting>
<Usergreeting isLoggedIn={true} username=""></Usergreeting>

</>

  )

        
}

export default App
