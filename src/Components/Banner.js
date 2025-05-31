import logo from "../assets/logo_Code.png"
function Banner(){
    return(
        <div className="row justify-content-center m-4 border-bottom border-black">
            <div className="col-4">
                <img src={logo} alt="logo du site"/>
            </div>
            <h1 className="col-4 text-center">La boutique du Géro</h1>
            <div className="col-4  mt-4 text-end">
                <p >Menu</p>
            </div>
        </div>
    )
}

export default Banner