


function Nav() {
  return (
    <nav>
      <div >
      <img src={require("./x.png")} style={{width:"35px"}} />
     </div>

        <div className="login">
            <button className="login__button">Sign in</button>
            <button className="login__button">Sign up</button>
            </div>
    </nav>
  );
}

export default Nav;