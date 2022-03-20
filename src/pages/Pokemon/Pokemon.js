import React, { useEffect, useState } from "react";
import { TitleHome } from "../Home/HomeComponent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
export const Pokemon = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  const  getPokemon= async()=> {
    const getAllPokemon = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=105"
    );
    const data = await getAllPokemon.json();
    

    function createpokemonObject(result) {
      
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemon(element=>[...element,data])
      });
    }

    createpokemonObject(data.results);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  

  return (
    <Container>
      <TitleHome>Pokemon</TitleHome>
      <Grid container spacing={2}>
        {allPokemon.map((pokemon, index) => (
          <Grid item xs={2} key={index}>
            <Card elevation={3} >
              <CardMedia
                component="img"
                height="140"
                image={pokemon.sprites.front_default}
                alt="green iguana"
              />
              <CardContent>{pokemon.name}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> 
      
        
      
    </Container>
  );
};
