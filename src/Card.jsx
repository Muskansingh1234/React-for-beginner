import Img from './assets/image.png'


function Card(){

return(

<div className="card">
<img className='card-img' src = {Img}alt="profile picture" height ="100px" width ="100px"></img>
<h2 className='card-title'>Bro Code </h2>
<p> I make youtube videos and play games</p>


</div>


);

}

export default Card