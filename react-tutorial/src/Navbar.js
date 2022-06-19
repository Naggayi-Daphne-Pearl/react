const Navbar = () => {
    return ( 
       <nav className="navbar">
           <h1> The virgo blog</h1>
           <div className="links">
               <a href="/">Home</a>
               <a href="/create" style={{ 
                   backgroundColor: '#30a89c',
                   color: 'white',
                   borderRadius: '8px'               
                }}>New Blog</a>
           </div>
       </nav> 
     );
}
 
export default Navbar;