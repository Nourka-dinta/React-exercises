// import {useState} from 'react'
import ShoppingCart from "./ShoppingCart";

function App(){
  return (
    <ShoppingCart />
  )
}

// "function App(){

//   const [items, setItems] = useState(['Appel', 'Banana']);
  
//   const addItem = ()=> {
//     setItems([...items, "Orange"])
//   }

//   return(
//     <>
//     <ul>
//       {
//         items.map(item => (
//           <li>{item}</li>
//         ))
//       }
//     </ul>
//     <button onClick={addItem}>Add Orange</button>
//     </>
//   )
// }"




// "function App(){

//   const [user, setUser] = useState({name: "Alice", age: 25});

//   const updateAge = ()=> {
//     setUser({...user, age: user.age + 1})
//   }
//   return (
//     <>
//       <p>Name: {user.name} , Age : {user.age}</p>
//       <button onClick={updateAge}>Increase Age</button>
//     </>
//   )
// }"

export default App;