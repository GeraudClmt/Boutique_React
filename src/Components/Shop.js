import { useEffect, useState } from "react"

function Shop() {
    const [products, setProduct] = useState([])

    //useEffect(() => { console.log(products) }, [products])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => { setProduct(data) })
            .catch(error => { console.log(error) })
    }, [])

    return (<div className="m-4">
        <p className="fs-4 m-5">🛒 Bienvenue sur la boutique du Géro  !
            Découvrez notre sélection exclusive de produits de qualité à prix accessibles.
            Que vous cherchiez les dernières tendances, des essentiels du quotidien ou des
            idées cadeaux originales, notre boutique en ligne a tout pour vous satisfaire.
            Livraison rapide, service client à l'écoute, faites votre shopping en toute confiance !</p>

        <div className="row justify-content-center m-4">
            {products.map(product => (<div key={product.id} className="tailleProduct col-4 p-2 rounded shadow m-4">
                <div className="tailleDivImgProduct pt-4 ms-3">
                    <h3 className="fs-5">{product.title}</h3>
                    <h4 className="text-danger">{product.price} $</h4>
                </div>
                <div className="d-flex justify-content-center tailleDivImgProduct" >
                    <img className="tailleImgProducts object-fit-fill" src={product.image} alt={"image-produit-" + product.id} />
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <button type="button" className="btn btn-success">Ajouter au panier</button>
                </div>
            </div>))}
        </div>
    </div>)
}

export default Shop