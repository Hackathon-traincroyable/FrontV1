import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//inscription form
const SignUpForm = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Envoyer la requête à votre backend
      const response = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpFormData),
      });

      if (response.ok) {
        const data = await response.json();
        // Faire quelque chose avec la réponse du backend, par exemple, enregistrer le token
        console.log("Token reçu du backend:", data.token);
        toast.success("Vous êtes bien inscrit !")
        // Reset les inputs
        setSignUpFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          password: "",
        });
        
      } else {
        // Gérer les erreurs ici
        console.error("Erreur lors de la requête:", response.status);
        toast.error("Erreur lors de l'inscription.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      toast.error("Erreur lors de l'inscription.");
    }
  };

  
  const handleInputSignUpChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full ">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Inscription</h1>
      </div>
      <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <form
          action="#"
          className="mx-auto mb-0 max-w-md space-y-4 p-6"
          onSubmit={handleSignUp}
        >
          {/* Nom, Prénom, et Âge en ligne */}
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* Prénom */}
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label htmlFor="firstname" className="sr-only">
                Prénom
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="prénom"
                onChange={handleInputSignUpChange}
              />
            </div>
            {/* Nom */}
            <div className="w-full md:w-1/3 px-3">
              <label htmlFor="lastname" className="sr-only">
                Nom
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="nom"
                onChange={handleInputSignUpChange}
              />
            </div>
            {/* Âge */}
            <div className="w-full md:w-1/4 px-3">
              <label htmlFor="age" className="sr-only">
                Âge
              </label>
              <input
                type="number"
                name="age"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Âge"
                onChange={handleInputSignUpChange}
              />
            </div>
          </div>
          {/* EMAIL */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                onChange={handleInputSignUpChange}
              />
            </div>
          </div>
          {/* PASSWORD */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                onChange={handleInputSignUpChange}
              />
            </div>
          </div>
          {/* SUBMIT */}
          <div className="">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white uppercase"
            >
              s'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


//connexion form 
const ConnexionForm = () => {
  const [connexionFormData, setConnexionFormData] = useState({
    email: "",
    password: "",
  });

  const handleConnexion = async (e) => {
    e.preventDefault();

    try {
      // Envoyer la requête à votre backend pour la connexion
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(connexionFormData),
      });

      if (response.ok) {
        const data = await response.json();
        //Sauvegarde du token dans le local storage
        localStorage.setItem("token", data.token);
        console.log("Token reçu du backend:", data.token);
        toast.success("Connexion réussie !");
           // Réinitialiser les champs du formulaire de connexion
           setConnexionFormData({
            email: "",
            password: "",
          });
      } else {
        // Gérer les erreurs ici
        console.error("Erreur lors de la requête:", response.status);
        toast.error("Erreur lors de la connexion.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      toast.error("Erreur lors de la connexion.");
    }
  };

  const handleInputConnexionChange = (e) => {
    setConnexionFormData({
      ...connexionFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeconnexion = () => {
    localStorage.removeItem("token");
    console.log("Utilisateur déconnecté");
    toast.success("Déconnexion réussie !");
  };

  return (
    <div className="w-full ">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Connexion</h1>
      </div>
      <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <form
          action="#"
          className="mx-auto mb-0 max-w-md space-y-4 p-6"
          onSubmit={handleConnexion}
        >
          {/* EMAIL */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                onChange={handleInputConnexionChange}
              />
            </div>
          </div>
          {/* PASSWORD */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                onChange={handleInputConnexionChange}
              />
            </div>
          </div>
          {/* SUBMIT */}
          <div className="">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Connexion
            </button>
           
          </div>
        </form>
      </div>
      <button onClick={handleDeconnexion}>Déconnexion</button>
    </div>
  );
};

export default function LogSign() {
  return (
    <main className="isolate ">
     <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover  style={{ top: '100px' }}  />
     <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
        {/* SIGN IN */}
        <section className="relative flex flex-wrap items-center justify-center w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2  ">
          <SignUpForm />
        </section>
        {/* LOGIN */}
        <section className="relative flex flex-wrap items-center justify-center w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2  ">
          <ConnexionForm />
        </section>
      </div>
      
    </div>
    </main>
  );
}
