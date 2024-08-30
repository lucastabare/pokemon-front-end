import React, { useState, useEffect } from 'react';
import { Alert, Box, Typography, Grid, Button, Paper, Skeleton, Grid2 } from '@mui/material';
import PokemonCard from '../components/pokemonCard';
import PokemonDetail from '../components/pokemonDetail';
import api from '../service/backendService';
import { Pokemon } from '../utils/Pokemon.interface';

const PokemonPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Pokemon[]>([]);
    const [winner, setWinner] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedPokemon1, setSelectedPokemon1] = useState<Pokemon | null>(null);
    const [selectedPokemon2, setSelectedPokemon2] = useState<Pokemon | null>(null);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.WorkflowServices.getAllPokemon();
            if (response.status === 200) {
                setData(response.data as Pokemon[]);
            }
        } catch (error: any) {
            console.error('OH NO, HA OCURRIDO UN ERROR', error);
            setError(error?.message || 'OH NO, HA OCURRIDO UN ERROR');
        } finally {
            setIsLoading(false);
        }
    };

    const handlePokemonSelect = (pokemon: Pokemon) => {
        if (selectedPokemon1 && selectedPokemon1.id_pokemon === pokemon.id_pokemon) {
            setSelectedPokemon1(null);
        } else if (selectedPokemon2 && selectedPokemon2.id_pokemon === pokemon.id_pokemon) {
            setSelectedPokemon2(null);
        } else if (!selectedPokemon1) {
            setSelectedPokemon1(pokemon);
        } else if (!selectedPokemon2) {
            setSelectedPokemon2(pokemon);
        } else {
            setError('Por favor, selecciona solo dos Pokémon.');
        }
    };

    const startBattle = () => {
        if (selectedPokemon1 && selectedPokemon2) {
            postBatalla(selectedPokemon1, selectedPokemon2);
        } else {
            setError('Debes seleccionar al menos dos Pokémon para comenzar la batalla');
        }
    };

    const postBatalla = async (selectedPokemon1: Pokemon, selectedPokemon2: Pokemon) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.WorkflowServices.postBatalla(selectedPokemon1.id_pokemon, selectedPokemon2.id_pokemon);
            if (response.status === 200) {
                const { winner } = response.data;
                setWinner(winner);
            } else {
                setError('La batalla no se pudo realizar. Por favor, intenta nuevamente.');
            }
        } catch (error: any) {
            console.error('OH NO, HA OCURRIDO UN ERROR', error);
            setError(error?.message || 'OH NO, HA OCURRIDO UN ERROR');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box textAlign="center" padding={3}>
            <Typography variant="h4" gutterBottom>
                Battle of Pokemon
            </Typography>
            <Typography variant="h6" gutterBottom>
                Select your pokemon
            </Typography>

            {error && <Alert severity="error">{error}</Alert>}

            <Grid2 container justifyContent="center" spacing={3}>
                {isLoading ? (
                    Array.from(new Array(5)).map((_, index) => (
                        <Grid2 key={index}>
                            <Skeleton variant="rectangular" width={210} height={118} />
                        </Grid2>
                    ))
                ) : (
                    data.map((pokemon) => (
                        <Grid2 key={pokemon.id}>
                            <PokemonCard
                                id={pokemon.id}
                                id_pokemon={pokemon.id_pokemon}
                                name={pokemon.name}
                                imageUrl={pokemon.imageUrl}
                                onClick={() => handlePokemonSelect(pokemon)}
                                isSelected={selectedPokemon1?.id_pokemon === pokemon.id_pokemon || selectedPokemon2?.id_pokemon === pokemon.id_pokemon} 
                            />
                        </Grid2>
                    ))
                )}
            </Grid2>

            {winner && (
                <Paper style={{ margin: '20px', padding: '10px', backgroundColor: '#e0f7fa' }}>
                    <Typography variant="h6">{winner}</Typography>
                </Paper>
            )}

            {selectedPokemon1 && selectedPokemon2 && (
                <Grid2 container justifyContent="center" spacing={5} alignItems="center" marginTop={3}>
                    <Grid2>
                        <PokemonDetail {...selectedPokemon1} />
                    </Grid2>
                    <Grid2>
                        <Button variant="contained" color="primary" onClick={startBattle}>
                            Versus
                        </Button>
                    </Grid2>
                    <Grid2>
                        <PokemonDetail {...selectedPokemon2} />
                    </Grid2>
                </Grid2>
            )}
        </Box>
    );
};

export default PokemonPage;
