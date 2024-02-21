export default function Example() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="text-center py-8">
            <div className="mt-6">
              <div className="max-w-4xl mx-auto">
                {/* Info, occupe 2 fractions */}
                <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-8">
                  {" "}
                  {/* Ajustez pour que cette div occupe 2/3 de l'espace disponible */}
                  <h2 className="text-3xl font-bold text-gray-800">
                    Votre Panier
                  </h2>
                  {/* Contenu de la deuxième colonne ici */}
                  <div className="flex flex-col lg:flex-row  justify-between items-center shadow-lg p-4 ">
                    <div className="flex flex-col sm:flex-row sm:flex-grow sm:items-center space-x-0 sm:space-x-10 space-y-2 sm:space-y-0 ">
                      {/* Ajustement pour l'alignement et l'espacement */}
                      <h4 className="text-xl font-semibold flex-shrink-0">
                        Départ: Paris - Arrivée: Nice
                      </h4>
                      <p className="text-lg flex-shrink-0">Date: 2023-05-20</p>
                      <p className="text-lg flex-shrink-0">Prix: 85€</p>
                    </div>
                    <button className="mt-5 sm:mt-0 sm:ml-4 inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
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
                  <div className="flex justify-between items-center mt-8 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold">Total Prix:</h3>
                    <p className="text-xl">85€</p>
                  </div>
                  <div className="flex justify-end space-x-4 mt-8">
                    <button className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase">
                      Payer
                    </button>
                    <button className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 uppercase">
                      Se connecter pour payer
                    </button>
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
