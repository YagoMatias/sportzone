import React from 'react';
import '../style/global.css';
import { getItem, setItem } from '../services/LocalStorage';
import globalprodutos from '../produtosJSON/global.json';
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { AttachMoney, Delete } from '@mui/icons-material';
import ModalProduto from '../components/ModalProduto';

const Cart = () => {
  const [cart, setCart] = React.useState(getItem('sportzone') || []);
  const [valor, setValor] = React.useState(0);

  const handleClick = (obj) => {
    const arrFilter = cart.map((produto) => {
      const itemFilter = produto.filter((item) => {
        return item !== obj;
      });
      return itemFilter;
    });
    setCart(arrFilter);
    setItem('sportzone', arrFilter);
  };

  React.useEffect(() => {
    const somaReduce = cart.map((produto) => {
      return produto.reduce((acc, item) => {
        const preco = item.preco;
        return acc + preco;
      }, 0);
    });

    setItem(somaReduce.length);

    const somaTotal = somaReduce.reduce((acc, item) => {
      return acc + item;
    }, 0);

    setValor(somaTotal);
  }, [cart]);

  return (
    <Container>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        fontWeight="bold"
        color="lightgrey"
        marginTop="3rem"
      >
        Carrinho de Compras
      </Typography>
      <Box>
        <Box>
          {cart.map((lSItem) => {
            return lSItem.map((ProdutoLS) => {
              const produtoArr = globalprodutos.filter((item) => {
                return item.id === ProdutoLS.id;
              });
              return produtoArr.map((produto) => {
                return (
                  <Box key={produto.id}>
                    <Divider
                      variant="middle"
                      component="div"
                      style={{ backgroundColor: 'white' }}
                    />
                    <Box display="flex" alignItems="center">
                      <CardMedia
                        component="img"
                        style={{
                          width: '10rem',
                          margin: '1rem',
                          marginBottom: '2rem',
                          borderRadius: '4%',
                          display: 'flex',
                        }}
                        height="135"
                        image={produto.image}
                        alt={produto.clube}
                      />
                      <Box>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          fontWeight="bold"
                          color="lightgrey"
                          textTransform={'capitalize'}
                        >
                          {`${produto.tipo} ${produto.clube}`}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="p"
                          fontWeight="bold"
                          color="lightgrey"
                          marginTop="1rem"
                          textTransform={'capitalize'}
                        >
                          {`Quantidade: ${ProdutoLS.qnt}`}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="p"
                          fontWeight="bold"
                          color="lightgrey"
                          marginTop="1rem"
                          textTransform={'capitalize'}
                        >
                          {`Valor: R$ ${ProdutoLS.preco},00`}
                        </Typography>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{
                            width: '11rem',
                            height: '2.4rem',
                            backgroundColor: 'darkgoldenrod',
                          }}
                          endIcon={<Delete />}
                          onClick={() => {
                            handleClick(ProdutoLS);
                          }}
                        >
                          Remover Item
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                );
              });
            });
          })}
        </Box>
        <Divider
          variant="middle"
          component="div"
          style={{ backgroundColor: 'white' }}
        />
        <Box display={'flex'} alignItems={'center'} gap={5} marginTop={2}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="bold"
            color="lightgrey"
            marginTop="1rem"
          >
            Subtotal: R$ {valor},00
          </Typography>
        </Box>
      </Box>
      <ModalProduto cart={cart} valor={valor} />
    </Container>
  );
};

export default Cart;
