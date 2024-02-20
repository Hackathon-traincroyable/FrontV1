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

{/* section centrée et plus petite */}
<div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 max-w-xxl">
    {/* Première carte avec formulaire */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Où allez-vous?</h3>
      <form>
        <div className="mb-4">
          <label htmlFor="depart" className="block text-sm font-medium text-gray-700">Départ</label>
          <input type="text" id="depart" name="depart" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Ville de départ" />
        </div>
        <div className="mb-4">
          <label htmlFor="arrive" className="block text-sm font-medium text-gray-700">Arrivée</label>
          <input type="text" id="arrive" name="arrive" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Ville d'arrivée" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date" name="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Rechercher les meilleurs prix</button>
      </form>
    </div>
    {/* Info */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-center uppercase">meilleur prix</h3>
      {/* Contenu de la deuxième colonne ici */}
      <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold">Départ: Paris - Arrivée: Nice</h4>
        <p className="text-md">Date: 2023-05-20</p>
        <p className="text-md">Prix: 85€</p>
        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Choisir</button>
      </div>
    </div>
  </div>
</div>


</main>

  )
}