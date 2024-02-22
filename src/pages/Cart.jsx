import React, { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);   
  const navigate = useNavigate();


  const handlePaymentClick = () => {
    if (!isLoggedIn) {
      // Si l'utilisateur n'est pas connecté, définissez la page de redirection et redirigez vers la page de connexion
      localStorage.setItem("loginRedirect", "/cart"); // Définir la page de redirection vers le panier
      navigate("/logSign?mode=login"); // Rediriger vers la page de connexion
    } else {
      // Logique de paiement ici si l'utilisateur est connecté
      // Par exemple, rediriger vers une page de paiement ou afficher un formulaire de paiement
    }
  };




  useEffect(() => {
    // Récupérer les IDs depuis le local storage
    const storedIds = JSON.parse(localStorage.getItem("cart")) || [];

    // Envoyer une requête au backend pour récupérer les détails des trajets
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/get-cart-items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tripIds: storedIds }),
        });

        if (response.ok) {
          const items = await response.json();
          setCartItems(items);
        } else {
          console.error(
            "Erreur lors de la récupération des trajets du panier."
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []); // Effectuer la requête une seule fois lors du chargement initial

  const handleRemoveFromCart = async (tripId) => {
    try {
      // Récupérer les IDs actuels depuis le local storage
      const storedIds = JSON.parse(localStorage.getItem("cart")) || [];

      // Filtrer l'ID que vous souhaitez supprimer
      const updatedIds = storedIds.filter((id) => id !== tripId);

      // Mettre à jour le local storage avec les nouveaux IDs
      localStorage.setItem("cart", JSON.stringify(updatedIds));

      // Mettre à jour l'état ou effectuer toute autre action nécessaire dans votre application
      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== tripId)
      );

      console.log(`Trajet avec l'ID ${tripId} supprimé du panier.`);
    } catch (error) {
      console.error(
        "Erreur lors de la suppression du trajet du panier.",
        error
      );
    }
  };

  return (
    <div className="bg-white">
      <main className="isolate">
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="text-center py-8">
            <div className="mt-6">
              <div className="max-w-4xl mx-auto">
                <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Votre Panier
                  </h2>
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-col lg:flex-row  justify-between items-center shadow-lg p-4 mb-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:flex-grow sm:items-center space-x-0 sm:space-x-10 space-y-2 sm:space-y-0">
                        <h4 className="text-xl font-semibold flex-shrink-0">
                          Départ: {item.departure} - Arrivée: {item.arrival}
                        </h4>
                        <p className="text-lg flex-shrink-0">
                          Date: {moment(item.date).format("YYYY-MM-DD")}
                        </p>
                        <p className="text-lg flex-shrink-0">
                          Prix: {item.price}€
                        </p>
                      </div>
                      <button
                        className="mt-5 sm:mt-4 sm:ml-4 inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={() => handleRemoveFromCart(item._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Supprimer
                      </button>
                    </div>
                  ))}
                  <div className="flex justify-between items-center mt-8 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold">Total Prix:</h3>
                    {/* Ajoutez ici la logique pour calculer le total du panier */}
                    <p className="text-xl">
                      {" "}
                      {cartItems.reduce((total, item) => total + item.price, 0)}
                      €
                    </p>
                  </div>
                  <div className="flex justify-end space-x-4 mt-8">
                    {/* Le bouton Payer n'apparaît que si `isLoggedIn` est `true` */}
                    {isLoggedIn && (
                      <button className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase">
                        Payer
                      </button>
                    )}
                    {/* Le bouton Se connecter pour payer n'apparaît que si `isLoggedIn` est `false` */}
                    {!isLoggedIn && (
                      <button
                        onClick={handlePaymentClick}
                        className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 uppercase"
                      >
                        Se connecter pour payer
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
