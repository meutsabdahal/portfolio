
function Footer() {
    return (
        <footer className="mt-5 text-center">
            <div className="container">
                <div className="footer--list">
                    
                    <div className="row">
                        <div className="col">
                            <b>Menu</b>
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#">About Me</a>
                            <a className="nav-link" href="#">Blog</a>
                            <a className="nav-link" href="#">Works</a>
                            <a className="nav-link" href="#">Contact</a>
                        </div>

                        <div className="col">
                            <b>Find Me</b><br />
                            Twitter
                        </div>

                        <div className="col">
                            <b>Email</b><br />
                            utsabdahal190@gmail.com
                        </div>
                    </div>
                </div>

            </div>
                        

            <div className="footer--end">
                <p>Copyright 2022 - Utsab Dahal</p>
            </div>
        </footer>
    )
}

export default Footer