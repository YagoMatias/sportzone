import React from 'react';
import globalProdutos from '../produtosJSON/nacional.json';
import Box from '@mui/material/Box';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const Produtos = () => {
  return (
    <div className="contentProdutos">
      <Box className="gridProdutos">
        {globalProdutos.map((produto) => {
          return (
            <Card sx={{ maxWidth: 235, minWidth: 200 }}>
              <CardActionArea>
                <div key={produto.id}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={produto.image}
                    alt={produto.clube}
                  />
                  <CardContent>
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

export default Produtos;
