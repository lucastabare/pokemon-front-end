import React from 'react';
import { Card, CardContent, Typography, LinearProgress, CardMedia } from '@mui/material';
import { Pokemon } from '../utils/Pokemon.interface';

const PokemonDetail = ({ name, hp, attack, defense, speed, type, imageUrl }: Pokemon) => {
    if (!name || hp === undefined || attack === undefined || defense === undefined || speed === undefined || type === undefined || imageUrl === undefined) {
        return <Typography variant="body1">Datos no disponibles</Typography>;
    }

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={name}
            />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body2" color="textSecondary">{type}</Typography>
                <Typography variant="body2">HP</Typography>
                <LinearProgress variant="determinate" value={hp * 10} />
                <Typography variant="body2">Attack</Typography>
                <LinearProgress variant="determinate" value={attack * 10} />
                <Typography variant="body2">Defense</Typography>
                <LinearProgress variant="determinate" value={defense * 10} />
                <Typography variant="body2">Speed</Typography>
                <LinearProgress variant="determinate" value={speed * 10} />
            </CardContent>
        </Card>
    );
};

export default PokemonDetail;
