import logo from "../assets/logo.svg"
function Navbar() {


    return (<nav className="navbar">
        <a><img src={logo} alt="logo" /></a>
        <ul className="navbar-links-container">
            {/* <li><a href="#">Home</a></li> */}
            {/* <li><a href="#">Projects</a></li> */}
            <li><a href="#">ここに投稿したいのですが、適切なセクションがありません。</a></li>
            {/* <li><a href="#">skills</a></li> */}
        </ul>
        <button onClick={() => { document.getElementById("contactMe").scrollIntoView({ behavior: "smooth" }) }}>Contact me</button>
    </nav >)
}

export default Navbar;