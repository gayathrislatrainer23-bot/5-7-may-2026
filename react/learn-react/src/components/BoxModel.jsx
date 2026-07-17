import { Link } from "react-router-dom";

function BoxModel (){
  let name  = 'Manu'
 
    return (
        <div className=" " id="">
          {/* <Link to={'/login'} >HOME</Link> */}
<h1>this is a component {name} </h1>
<p style={{color:'red',backgroundColor:'yellow'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime esse voluptas, ex iure iste, excepturi rem quis ducimus, velit enim recusandae quasi beatae consequuntur! Tenetur explicabo impedit culpa ipsa!</p>
        </div>
    )
}
export default BoxModel;