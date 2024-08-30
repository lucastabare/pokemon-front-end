import React from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';
import styled from 'styled-components';
import { Pokemon } from '../utils/Pokemon.interface';

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;

const StyledImage = styled.img`
  height: 180px;
  width: 100%;
  object-fit: contain;
`;

const PokemonDetail = ({ name, hp, attack, defense, speed, type, imageUrl }: Pokemon) => {
    if (
        !name ||
        hp === undefined ||
        attack === undefined ||
        defense === undefined ||
        speed === undefined ||
        type === undefined ||
        imageUrl === undefined
    ) {
        return <Typography variant="body1">Datos no disponibles</Typography>;
    }

    return (
        <StyledCard>
            <StyledImage src={imageUrl} alt={name} />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {type}
                </Typography>
                <Typography variant="body2">HP</Typography>
                <LinearProgress variant="determinate" value={hp * 10} sx={{ backgroundColor: '#e0f2f1', '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }} />
                <Typography variant="body2">Attack</Typography>
                <LinearProgress variant="determinate" value={attack * 10} sx={{ backgroundColor: '#e0f2f1', '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }} />
                <Typography variant="body2">Defense</Typography>
                <LinearProgress variant="determinate" value={defense * 10} sx={{ backgroundColor: '#e0f2f1', '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }} />
                <Typography variant="body2">Speed</Typography>
                <LinearProgress variant="determinate" value={speed * 10} sx={{ backgroundColor: '#e0f2f1', '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }} />
            </CardContent>
        </StyledCard>
    );
};

export default PokemonDetail;
