import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();

  // To useQuery we give it a key of what we are requesting
  // "details" means that this is the details type of request, the caching key to store in cache
  // ["details", id] is the query key that will be provided to fetchPet.js
  // The second argument is what gets run if there is no data found in the cache
  const results = useQuery(["details", id], fetchPet);

  if (results.isError) {
    return <div>Oh No!!!</div>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🕸</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <div className="details">
      <h1>{pet.name}</h1>
      <h2>
        {pet.animal} — {pet.breed} — {pet.city} — {pet.state}
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </h2>
    </div>
  );
};

export default Details;
