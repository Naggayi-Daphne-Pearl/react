import { useState} from 'react'; 
const Home = () => {
    //let name = 'daphne';
    // use state makes the component reactive 
    const [name, setName] = useState('daphne');
    const [age, setAge] = useState(24);
    const handleClick = () => {
       setName('pearl');
       setAge(12)
    }


    return ( 
        <div className="home">
            <h2>Home page</h2>
            <p>{ name } is {age} years old</p>
            
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;