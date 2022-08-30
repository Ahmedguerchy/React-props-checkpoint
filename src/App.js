import './App.css';
import Profile from './Profil/Profil';
import Image from './Profil/Image';





function App() {
  const name="Ahmed Guerchy"
  const bio=" Me : exists .. GoMyCode : YOU HAVE VIOLATED OUR TERMS. I am passionate about Web Development"
  const profession="happily a student at GoMyCode"

const handleName=()=> {
 alert(name)
  
 }

  return (
    <div className="App">
      <Profile myName={name} aboutMe={bio} myProfession={profession} handleName={handleName}/>  
      <Image> <img src="/AG.jpg" alt='' width={300} height={350}></img> </Image>
    </div>
  );
}

export default App;


 