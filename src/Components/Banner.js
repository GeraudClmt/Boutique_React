import { useState } from "react"
import logo from "../assets/logo_Code.png"
function Banner({setMain}){
    const [menu, changeMenu] = useState(false)


    return(
        <div className="row justify-content-center m-4 border-bottom border-black">
            <div className="col-4">
                <img src={logo} alt="logo du site"/>
            </div>
            <h1 className="col-4 text-center">La boutique du Géro</h1>
            <div className="col-4  mt-4 text-end">
                <button type="button" className="btn btn-outline-dark" onClick={()=> changeMenu(!menu)} >Menu</button>
                {menu && <div className="mt-2">
                    <button type="button" className="btn btn-outline-dark border border-0" onClick={()=> setMain("shop")}>Accueil </button>
                    <button type="button" className="btn btn-outline-dark border border-0" onClick={()=> setMain("panier")}>Panier </button>
                    <button type="button" className="btn btn-outline-dark border border-0" onClick={()=> setMain("contact")}>Contact </button>
                    </div> }
            </div>
        </div>
    )
}

export default Banner