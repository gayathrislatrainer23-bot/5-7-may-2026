
const Child = ({userAge,userName,arr, person:{name,age}})=>{
    // console.log(props)
    // console.log(props.userAge)

    return(
        <div className="child">
{/* <p>{props.userAge}</p> */}
{userAge}
<p>{userName}</p>
<p>{arr}</p>
<p>{name}: {age}</p>

        </div>
    )
}

export default  Child;