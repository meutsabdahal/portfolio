function Header() {

    function openNav() {
        document.getElementById("mySideNav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("mySideNav").style.width = "0";
    }
    

    return(
        <header>
            {/* navigation bar using bootstrap and plain css */}
            <nav className="nav">
                <div className="navbar--title navbar--title--under--line">
                    <p className="">UTSAB DAHAL</p>
                </div>
                <div className="navbar--menu float-end d-none d-sm-block">
                    <ul className="">
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">WORKS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar--menu float-end d-sm-none d-md-block d-md-none d-lg-block d-lg-none">
                    <span className="navbar--menu--button--side" onClick={openNav}>&#9776;</span>
                </div>

                <div className="side-nav" id="mySideNav">
                <a href="javascript:void(0)" className="close" onClick={closeNav}>&times;</a>
                <a className="nav-link" href="#">ABOUT ME</a>
                <a className="nav-link" href="#">BLOG</a>
                <a className="nav-link" href="#">WORKS</a>
                <a className="nav-link" href="#">CONTACT</a>
            </div>
            </nav>

        </header>
    )
}

export default Header