import Profile from './profile/Profile';
import Musk from './images/Elon_Musk.jpg'
import Selena from './images/Selena_Gomaz.jpg'
import Bouchnak from './images/abdelhamid-bouchnak.jpg'
import './style.css';

function App() {

  const handleName=(fullname)=>alert('The user name is:  '+ fullname);
  
  return (
    <div className="App">

      <Profile fullname={"Elon Musk"} 
               bio={"Born: June 28, 1971. Musk is the founder, CEO and chief engineer at SpaceX; early stage investor,CEO and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, he is one of the richest people in the world."} 
               profession={"Entrepreneur and business magnate"}
               handleName={handleName}>
                 <img src={Musk} alt="photo"/>
      </Profile>
      <Profile fullname={"Selena Gomez"} 
               bio={"Born: July 22, 1992. Gomez is an American singer, actress, and producer. Born and raised in Texas, she began her career by appearing on the children's television series Barney & Friends (2002–2004)."} 
               profession={"Singer, songwriter and actress"}
               handleName={handleName}>
                 <img src={Selena} alt="photo"/>
      </Profile> 
      <Profile fullname={"Abdelhamid Bouchnak"} 
               bio={"Born in 1984. He graduated from the Graduate School of Film Studies of Canada. He directed the first Tunisian horror film « دشرة ». Abdelhamid Bouchnak has taken a new step in the history of Tunisian cinema."} 
               profession={"Director and actor"}
               handleName={handleName}>
                 <img src={Bouchnak} alt="photo"/>
      </Profile>
      <Profile fullname={"Peter mckinnon"} handleName={handleName}></Profile> 


    
    </div>

  );
}

export default App;
