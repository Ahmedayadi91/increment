import Profil from './componant/profil'
import Profil2 from './componant/profil2'
import './App.css';
import FullName from './componant/FullName';
import Bio from './componant/bio';
import Profession from './componant/profession';

function App() {
  return (
    <div className="App">
      <br/>
       <a href="https://www.google.com/" onclick={console.log('Le lien a été cliqué.')}>
        Clique ici
        </a>
       <br/> <br/>
       <div>
        
       </div>
      
        <br/> <br/>
        <Profil  />
        <br/> <br/>
        <Profil2 />
        <b> <Profession job='Commercial '/> </b>

    </div>
  );
}

export default App;
