6/7/2026

1.React- js library
2.vite && cra
terminal ---  ctrl+j

3. work flow
node-module --> store dependencies

4. public- static files
5. index.html - entry point, single page
6. src - dynamic folder
7. package.json - meta data
    app.jsx main - component
8. comp is building block of react
   2 types comp
   1. class comp and  functional comp

1. functional comp
    --> js fun it returns jsx


    function BoxModel(){

        return (
div
        )
    }


jsx -- js xml , html like syntax


rule
1. one parent element
 2.  {} embed js variables
 3. inline -style using {{}}
 4. className instead of class 

BoxModel --pascalCase
boxModel -camelCase

props : property :> the way passing data from parent to child compoent


Props

1: WeatherInfo with Object Prop
    Weatherdisplay - child
     Create a component that accepts a single object as a prop
          (example: { city: "Chennai", temp: 30 }) and displays:
     output:
              Current temperature in Chennai is 30°C


 2: User Login Status with Conditional Prop

        Pass a user object as a prop 
         (example: { name: "Manu", isLoggedIn: true }).

     output:

"Welcome back!" if isLoggedIn is true, otherwise show "Please login".

task: hide and show
p--> 'hai welcome'
ishow true 


 3: Colors with Array Prop
 Pass an array of colors as a prop (example: ["Red", "Blue", "green"]).
    Display them in one line like:
     output:
         Primary colors are: Red, Blue, Yellow

colorPrimary(){
    <colorDisplay data1>
}

colorSecondary(){
     <colorDisplay data2>
}

list 
veggies = ["carrot","potato"]

vegetables =[
  {
    name: "carrot",
    color:"orange",
    price: 30
  },
  {
   name: "potato",
   color: "brown",
   price: 20
  }
]

<ol  >      
v.map((E,I)=>(

<l1 KEY = INDEX >E.NAME</li>
<l1  >E.COLOR</li>
))
ol


1. Table Task
 Create a JSX component that shows a student details table.
 Columns: Roll No, Name, Grade.
 Add at least 3 rows with sample data.
 Use className="student-table" for the table.

Expected Output:
Roll No  Name    Grade
1       Anitha     A
2       Rahul      B
3       Deepak     A+

