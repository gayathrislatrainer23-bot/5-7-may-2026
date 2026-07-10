import React from 'react'

function VegetablesList() {
   let vegetables =[
  {
    name: "carrot",
    color:"orange",
    price: 30
  },
  {
   name: "potato",
   color: "brown",
   price: 20
  },
 
]
console.log(vegetables[0])
  return (
    <div>
        <table border={1}>
<thead>
<tr>
    {
        Object.keys(vegetables[0]).map((key,index)=>(
            
            <th key={index}>{key}</th>
        )
        )
    }
    {/* <th>name</th>
    <th>color</th>
    <th>price</th> */}
</tr>
</thead>
<tbody>
    {
vegetables.map((veggi,index)=>
(
    <tr key={index}>
        <td>{veggi.name}</td>
        <td>{veggi.color}</td>
        <td>{veggi.price}</td>
    </tr>
)
)
    }

</tbody>
        </table>
        </div>
  )
}

export default VegetablesList
{/* <tr>
    <td>carrot</td>
    <td>orange</td>
    <td>30</td>
</tr> */}