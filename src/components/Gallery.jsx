import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "../context/context";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_ID_KEY}&query=`;

const Gallery = () => {
  const { term } = useGlobalContext();

  const res = useQuery({
    queryKey: ["images", term],
    queryFn: async () => {
      const { data } = await axios.get(`${url}${term}`);
      return data;
    },
  });

  if (res.isLoading) {
    return (
      <section className="image-container">
        <h4 style={{ color: '#38ae02'}}>Loading...</h4>
      </section>
    );
  }

  if (res.isError) {
    return (
      <section className="image-container">
        <h4 style={{color: '#e90808'}}>An error happened...</h4>
      </section>
    );
  }

  const results = res.data.results; 

  return (
    <section className="image-container">
      {results.length > 0 ? results.map((item) => {
        return (
          <img
            key={item.id}  
            className="img"
            src={item?.urls?.regular}
            alt={item.alt_description} 
          />
        );
      }) : (<h5 className="title">{results.length} Results found</h5>)}
    </section>
  );
};

export default Gallery;
