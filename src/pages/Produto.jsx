import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const { id } = useParams();
  const [clube, setClube] = React.useState(null);
  const [local, setLocal] = React.useState(null);
  const [valor, setValor] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [ano, setAno] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto(url) {
      const response = await fetch(url);
      const json = await response.json();
      const produto = json;
      console.log(json);

      setClube(produto[id].clube);
      setLocal(produto[id].local);
      setValor(produto[id].valor);
      setImage(produto[id].image);
      setAno(produto[id].ano);
    }
    fetchProduto('/src/produtosJSON/global.json');
  }, [id]);

  return (
    <>
      <Card
        key={id}
        sx={{ maxWidth: 215, minWidth: 200, borderRadius: '1rem' }}
      >
        <CardActionArea>
          <div>
            <CardMedia component="img" height="300" image={image} alt={clube} />
            <CardContent sx={{ bgcolor: 'darkgray' }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                {clube}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                <p>
                  {local} | {ano}
                </p>
                <p style={{ color: 'green', fontWeight: 'bold' }}>
                  <s style={{ color: 'red' }}>R$ 200,00</s> | R$
                  {valor},00
                </p>
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Produto;
