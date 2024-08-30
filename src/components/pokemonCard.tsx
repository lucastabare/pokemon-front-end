import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface _props {
    id: number;
    id_pokemon: string;
    name: string;
    imageUrl: string;
    onClick: () => void;
    isSelected: boolean; 
}

const PokemonCard = ({ name, id_pokemon, imageUrl, onClick, isSelected }: _props) => {
    if (!name || imageUrl === undefined || id_pokemon === undefined) {
        return <Typography variant="body1">Datos no disponibles</Typography>;
    }

    return (
        <Card
            onClick={onClick}
            style={{
                cursor: 'pointer',
                border: isSelected ? '2px solid red' : 'none'
            }}
        >
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={name}
            />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;