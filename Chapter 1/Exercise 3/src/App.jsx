import UserCard from './UserCard'

function App(){

  return(
    <>
      <UserCard 
       nme={"Nourka"} 
       email={"N@gmail.com"}
      />

      <UserCard 
       name={"Abdi"} 
       email={"A@gmail.com"}
      />

      <UserCard 
       name={"Farah"} 
       email={"F@gmail.com"}
      />
      
      <UserCard 
       name={"Samsam"} 
       role={"S@gmail.com"}
      />
    </>

  )
}

export default App;