
import './App.css';

import Nav from './nav';
import First from './first';
import Second from './second';
import Block2 from './blocks';
import Search from './search';

function App() {
  return (
    <div>
       <Nav />
   <First/>
   <Second/>

   <div className="cent2">
            <Block2 image="./cover.jpeg" />
            <Block2 image="./cover.jpeg" />
            <Block2 image="./cover.jpeg" />
            </div>

            <Search/>
    </div>

  
  );
}

export default App;
