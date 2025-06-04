import { useEffect, useState } from "react"

function Panier() {
    const [panier, setPanier] = useState(()=>{
        const data = sessionStorage.getItem("panier")
        return data ? JSON.parse(data) : []
    })

    const supprimerElementDuPanier = (id) => {
        const newPanier = panier.filter(item => item.id !== id);
        setPanier(newPanier);
    };

    useEffect(() => {
        
            sessionStorage.setItem("panier", JSON.stringify(panier))
        

    }, [panier])

    return (
        <div>
            {panier.map((element) => (<div key={"divCart-" + element.id} className="m-5">
                <h3 key={"title-" + element.id}>{element.title}</h3>
                <h4 key={"price-" + element.id}>{element.price}</h4>
                <div key={"div-" + element.id} className="d-flex justify-content-center tailleDivImgProduct" >
                    <img key={"img-" + element.id} className="tailleImgProducts object-fit-fill" src={element.imgUrl} alt={"image-produit-" + element.id} />
                </div>
                <button key={"btn-" + element.id} className="btn btn-danger" onClick={() => supprimerElementDuPanier(element.id)}>Supprimer</button>
            </div>))}
        </div>
    )
}

// function supprimerElementDuPanier(element) {
//     let panier = JSON.parse(sessionStorage.getItem("panier"))
//     console.log("Suppresion de l'id " + element + " " + typeof (element))
//     console.log(panier)
//     for (const i in panier) {
//         if (panier[i].id === element) {
//             panier.splice(i, 1)
//         }
//     }
//     sessionStorage.setItem("panier", JSON.stringify(panier))
// }
export default Panier