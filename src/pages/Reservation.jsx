import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Reservation() {
  //UseState qui va stockés les trajets ispaid=true (.map(paidTrips) pour afficher)
  const [paidTrips, setPaidTrips] = useState([]);
  useEffect(() => {
    // Récupérer les trajets payés depuis le backend
    const fetchPaidTrips = async () => {
      try {
        const response = await fetch("http://localhost:3000/get-paid-trips");
        if (response.ok) {
          const paidTripsData = await response.json();
          setPaidTrips(paidTripsData);
        } else {
          console.error("Erreur lors de la récupération des trajets payés.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPaidTrips();
  }, []);
  return (
    <div className="bg-white">
      <main className="isolate">
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="text-center py-8">
            <div className="mt-6">
              <div className="max-w-4xl mx-auto">
                <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Réservation
                  </h2>
                  {paidTrips.map((trip) => (
                    <div
                      key={trip._id}
                      className="flex flex-col lg:flex-row  justify-between items-center shadow-lg p-5 mb-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:flex-grow sm:items-center space-x-0 sm:space-x-20 space-y-2 sm:space-y-0">
                        <h4 className="text-xl font-semibold flex-shrink-0">
                          Départ: {trip.departure} - Arrivée: {trip.arrival}
                        </h4>
                        <p className="text-lg flex-shrink-0">
                          Date: {moment(trip.date).format("YYYY-MM-DD")}
                        </p>
                        <p className="text-lg flex-shrink-0">
                          Prix: {trip.price}€
                        </p>
                      </div>
                    </div>
                  ))}
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
