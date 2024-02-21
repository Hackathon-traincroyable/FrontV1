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
                    Réservation
                  </h2>
                  {/* Contenu de la deuxième colonne ici */}
                  <div className="flex flex-col lg:flex-row  justify-between items-center shadow-lg p-5 ">
                    <div className="flex flex-col sm:flex-row sm:flex-grow sm:items-center space-x-0 sm:space-x-20 space-y-2 sm:space-y-0 ">
                      {/* Ajustement pour l'alignement et l'espacement */}
                      <h4 className="text-xl font-semibold flex-shrink-0">
                        Départ: Paris - Arrivée: Nice
                      </h4>
                      <p className="text-lg flex-shrink-0">Date: 2023-05-20</p>
                      <p className="text-lg flex-shrink-0">Prix: 85€</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-8 p-4 bg-gray-100">
                    <p className="text-xl text-center">
                      Profitez pleinement de votre voyage.
                    </p>
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
