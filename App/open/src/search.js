 function Search() {
   return (
     <div className="search" >
        <h1 style={{color:"black",marginRight:"300px"}}>Stay in the loop
</h1>
         <input type="text" placeholder="Search.."  style={{height:"40px",backgroundColor:"purple",alignSelf:"center"}}/>
         <button type="submit"   style={{height:"40px",backgroundColor:"white",alignSelf:"center"}}>Submit</button>
       
     </div>
   );
 }
 export default Search;