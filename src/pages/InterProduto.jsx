import React from 'react';
import internacional from '../produtosJSON/internacional.json';
import { useParams } from 'react-router-dom';
import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material';
import { Add, Remove, ShoppingCart } from '@mui/icons-material';

const InterProduto = () => {
  const { id } = useParams();
  const [clube, setClube] = React.useState(null);
  const [local, setLocal] = React.useState(null);
  const [valor, setValor] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [ano, setAno] = React.useState(null);
  const [qnt, setQnt] = React.useState(1);

  const handleClickAdd = () => {
    setQnt(+qnt + 1);
  };
  const handleClickRemove = () => {
    setQnt(+qnt - 1);
  };

  React.useEffect(() => {
    const produto = internacional;

    setClube(produto[id].clube);
    setLocal(produto[id].local);
    setValor(produto[id].valor);
    setImage(produto[id].image);
    setAno(produto[id].ano);
    // fetchProduto();
  }, [id]);

  return (
    <>
      <Container fixed>
        <Box
          sx={{
            height: '100vh',
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              width: '70rem',
              height: '30rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: '30rem',
                padding: '0.1rem',
                borderRadius: '4%',
                border: '1px solid white',
              }}
            />
          </Box>
          <Box
            sx={{
              width: '50rem',
              height: '30rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1rem',
            }}
          >
            <Typography
              variant="h4"
              color="white"
              paddingTop={2}
              fontWeight={'500'}
            >
              {clube} {local} {ano}
            </Typography>
            <Box color="white">
              <Typography
                style={{ fontWeight: 'bold', marginBottom: '0.7rem' }}
              >
                Quantidade
              </Typography>
              <Button size="small" onClick={handleClickRemove} color="inherit">
                <Remove />
              </Button>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {qnt}
              </span>
              <Button size="small" onClick={handleClickAdd} color="inherit">
                <Add />
              </Button>
            </Box>

            <Typography
              variant="h5"
              color="red"
              fontWeight={'bold'}
              alignItems={'center'}
              display={'flex'}
              flexDirection={'row'}
              paddingTop={2}
              gap={2}
            >
              <p
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  fontSize: '2rem',
                }}
              >
                <s style={{ color: 'white', fontSize: '0.9rem' }}>R$200,00</s>
                R${valor * qnt},00
              </p>
              <p
                style={{
                  color: '#8bc34a',
                  border: '2px solid #8bc34a',
                  borderRadius: '20%',
                  padding: '0.1rem',
                  fontSize: '1.2rem',
                }}
              >
                -45%
              </p>
            </Typography>
            <Typography
              variant="body1"
              fontWeight={'bold'}
              color={'white'}
              display={'flex'}
              flexDirection={'column'}
              gap={1}
            >
              Tamanho do Produto:
              <ButtonGroup
                variant="text"
                size="large"
                style={{
                  backgroundColor: 'white',
                  width: '10.3rem',
                }}
                color="inherit"
              >
                <Button style={{ color: 'black' }}>P</Button>
                <Button style={{ color: 'black' }}>M</Button>
                <Button style={{ color: 'black' }}>G</Button>
                <Button style={{ color: 'black' }}>GG</Button>
              </ButtonGroup>
            </Typography>
            <Button
              style={{
                gap: '1rem',
                backgroundColor: 'goldenrod',
                color: 'black',
                borderRadius: '8px',
                padding: '1rem',
              }}
              size="large"
              endIcon={<ShoppingCart />}
            >
              Adicionar ao Carrinho
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default InterProduto;
