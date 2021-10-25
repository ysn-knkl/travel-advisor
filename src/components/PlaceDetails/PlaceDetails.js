import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, CardAction, Chip} from "@material-ui/core"

const PlaceDetails = ({ place }) => {
    return (
        <h1>{place.name}</h1>
    )
}

export default PlaceDetails
