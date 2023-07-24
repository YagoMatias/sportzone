import React from 'react';

import Box from '@mui/material/Box';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import globalProdutos from '../produtosJSON/nacional.json';

const NacionalProdutos = () => {
  return (
    <div className="contentProdutos">
      <Box className="gridProdutos">
        {globalProdutos.map((produto) => {
          return (
            <Card key={produto.id} sx={{ maxWidth: 215, minWidth: 200 }}>
              <CardActionArea>
                <div>
                  <CardMedia
                    component="img"
                    height="250"
                    image={produto.image}
                    alt={produto.clube}
                  />
                  <CardContent sx={{ bgcolor: 'darkgray' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {produto.clube}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {produto.ano} | R${produto.valor},00
                    </Typography>
                  </CardContent>
                </div>
              </CardActionArea>
            </Card>
          );
        })}
        ;
      </Box>
    </div>
  );
};

export default NacionalProdutos;
