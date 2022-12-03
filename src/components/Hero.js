function Hero() {
    return (
        <div className="intro">
            <div className="intro--image">
                <div className="intro--black--box"></div>
                    <img src="../img/me.jpeg" />
            </div>


            <div className="intro--description">
                <p className="intro--title">ABOUT ME</p>
                <p className="intro--details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem velit unde repellat itaque molestias explicabo eaque deleniti aut ratione iste, tempora debitis qui commodi officia animi est et quia voluptatum.</p>
                <a><button className="about">About Me</button></a>
            </div>
            
        </div>
    )
}

export default Hero