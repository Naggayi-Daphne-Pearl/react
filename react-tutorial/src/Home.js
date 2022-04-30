const Home = () => {
    const handleClick = () => {
        console.log('hello');
    }

    const handleClickAgain = (name) => {
        console.log('hello' + name);
    }


    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick= {() =>handleClickAgain('daphne')} >Click me again</button>
        </div>
     );
}
 
export default Home;