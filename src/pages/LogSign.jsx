import { useState } from "react";
import { Link } from "react-router-dom";

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
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  const handleInputSignUpChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Inscription</h1>
      </div>
      <form
        action="#"
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSignUp}
      >
        {/* FIRSTNAME */}
        <div>
          <label htmlFor="firstname" className="sr-only">
            Prénom
          </label>
          <div className="relative">
            <input
              type="text"
              name="firstName"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Entrer votre prénom"
              onChange={handleInputSignUpChange}
            />
          </div>
        </div>
        {/* LASTNAME */}
        <div>
          <label htmlFor="lastname" className="sr-only">
            Nom
          </label>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Entrer votre nom"
              onChange={handleInputSignUpChange}
            />
          </div>
        </div>
        {/* AGE */}
        {/* ... (ajoutez des champs pour les autres informations si nécessaire) */}
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
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {/* ... (icône de vérification ou autre) */}
            </span>
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
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {/* ... (icône de vérification ou autre) */}
            </span>
          </div>
        </div>
        {/* SUBMIT */}
        <div className="">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

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
      } else {
        // Gérer les erreurs ici
        console.error("Erreur lors de la requête:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
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
  };

  return (
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Connexion</h1>
      </div>
      <form
        action="#"
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
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
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {/* ... (icône de vérification ou autre) */}
            </span>
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
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {/* ... (icône de vérification ou autre) */}
            </span>
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
          <button onClick={handleDeconnexion}>Déconnexion</button>
        </div>
      </form>
    </div>
  );
};

export default function LogSign() {
  return (
    <div className="all">
      <div className="flex items-center justfify-center min-h-screen">
        {/* SIGN IN */}
        <section className="relative flex flex-wrap items-center justify-center w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 border-r-2">
          <SignUpForm />
        </section>
        {/* LOGIN */}
        <section className="relative flex flex-wrap items-center justify-center w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <ConnexionForm />
        </section>
      </div>
    </div>
  );
}
