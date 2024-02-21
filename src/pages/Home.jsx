export default function Example() {
  return (
<main className="isolate">
{/* Hero section */}
<div className="relative isolate -z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10 "
          autoPlay
          muted
          loop
        >
          <source src="assets/video.mp4" type="video/mp4" />
        </video>

<div className="relative isolate -z-10">
  <div className="overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl" >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl p-10 slide-in">
            Et si vous parcouriez le monde en train 
          </h2>
          <p className="relative mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none slide-in">
          comparez les prix des billets de train et trouvez les meilleurs tarifs pour vos trajets en France et en Europe.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

{/* section centrée avec ajustement des colonnes */}
<div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl"> {/* Utilisez 3 colonnes au lieu de 2 pour un contrôle plus fin */}
    {/* Première carte avec formulaire, occupe 1 fraction */}
    <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-8"> {/* Ajustez pour que cette div occupe 1/3 de l'espace disponible */}
      <h3 className="text-xl font-semibold mb-6">Où allez-vous?</h3>
      <form>
      <div className="mb-6"> {/* Augmentez le margin-bottom */}
          <label htmlFor="depart" className="block text-base font-medium text-gray-700">Départ</label> {/* Augmentez la taille du texte */}
          <input type="text" id="depart" name="depart" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base" placeholder="Ville de départ" /> {/* Augmentez la taille du texte et le margin-top */}
        </div>
        <div className="mb-6">
          <label htmlFor="arrive" className="block text-base font-medium text-gray-700">Arrivée</label>
          <input type="text" id="arrive" name="arrive" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base" placeholder="Ville d'arrivée" />
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block text-base font-medium text-gray-700">Date</label>
          <input type="date" id="date" name="date" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base" />
        </div>
        <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Rechercher les meilleurs prix</button> 
      </form>
    </div>
    
    {/* Info, occupe 2 fractions */}
    <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-8"> {/* Ajustez pour que cette div occupe 2/3 de l'espace disponible */}
      <h3 className="text-xl font-semibold mb-6 text-center uppercase">meilleur prix</h3>
      {/* Contenu de la deuxième colonne ici */}
      <div className="flex justify-between items-center shadow-lg p-4"> {/* Ajoutez shadow-lg pour l'ombrage et p-4 pour le padding */}
  <div>
    <h4 className="text-xl font-semibold">Départ: Paris - Arrivée: Nice</h4> {/* Taille du texte ajustée */}
    <p className="text-lg">Date: 2023-05-20</p> {/* Taille du texte ajustée */}
    <p className="text-lg">Prix: 85€</p> {/* Taille du texte ajustée */}
  </div>
  <button className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Choisir</button>
</div>

  </div>
</div>
</div>

</main>

  )
}