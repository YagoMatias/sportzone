import React from 'react';
import Box from '@mui/material/Box';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import globalProdutos from '../produtosJSON/global.json';
import { Link } from 'react-router-dom';

const NacionalProdutos = ({ searchTerm }) => {
  const filteredItems = globalProdutos.filter((item) =>
    item.clube.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const ProdutosNacionais = filteredItems.filter((item) => {
    return item.classe === 'brasileiro';
  });

  return (
    <div className="contentProdutos">
      <Box className="gridProdutos">
        {ProdutosNacionais.map((produto) => {
          return (
            <Link to={`produto/${produto.id}`} key={produto.id}>
              <Card
                key={produto.id}
                sx={{ maxWidth: 215, minWidth: 200, borderRadius: '1rem' }}
              >
                <CardActionArea>
                  <div>
                    <CardMedia
                      component="img"
                      height="300"
                      image={produto.image}
                      alt={produto.clube}
                    />
                    <CardContent sx={{ bgcolor: 'darkgray' }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight="bold"
                      >
                        {produto.clube}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        <p>
                          {produto.local} | {produto.ano}
                        </p>
                        <p style={{ color: 'green', fontWeight: 'bold' }}>
                          <s style={{ color: 'red' }}>R$ 200,00</s> | R$
                          {produto.valor},00
                        </p>
                      </Typography>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
        ;
      </Box>
    </div>
  );
};

export default NacionalProdutos;
