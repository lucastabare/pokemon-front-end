import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import styled from 'styled-components';

interface _props {
    id: number;
    id_pokemon: string;
    name: string;
    imageUrl: string;
    onClick: () => void;
    isSelected: boolean;
}

const StyledImage = styled.img`
  height: 180px;
  width: 100%;
  object-fit: contain;
`;

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
            <StyledImage src={imageUrl} alt={name} />
            <CardContent >
                <Typography variant="h5">{name}</Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;