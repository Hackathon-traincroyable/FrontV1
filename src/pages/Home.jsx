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
          co
        >
          <source src="assets/video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos.
        </video>

    
<div className="relative isolate -z-10">
  <div className="overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl p-10 slide-in">
            Et si vous parcouriez le monde en train 
          </h2>
          <p className="relative mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none slide-in">
          comparez les prix des billets de train et trouvez les meilleurs tarifs pour vos trajets en France et en Europe.
          </p>
        </div>
        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
       
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* Features section */}
</main>

  )
}