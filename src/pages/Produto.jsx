import React from 'react';
import globalprodutos from '../produtosJSON/global.json';
import { useParams } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
} from '@mui/material';
import { Add, Remove, ShoppingCart } from '@mui/icons-material';
import '../style/global.css';
import { setItem, getItem } from '../services/LocalStorage';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';

const HomeProduto = () => {
  const { id } = useParams();
  const [clube, setClube] = React.useState(null);
  const [ident, setIdent] = React.useState(null);
  const [local, setLocal] = React.useState(null);
  const [valor, setValor] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [tipo, setTipo] = React.useState(null);
  const [ano, setAno] = React.useState(null);
  const [qnt, setQnt] = React.useState(1);
  const [size, setSize] = React.useState('');
  const [selectedButton, setSelectedButton] = React.useState(null);
  const [cart, setCart] = React.useState(getItem('sportzone') || []);
  const [open, setOpen] = React.useState(false);
  const [sizeAlert, setSizeAlert] = React.useState(false);

  const produto = globalprodutos;
  React.useEffect(() => {
    setClube(produto[id].clube);
    setLocal(produto[id].local);
    setValor(produto[id].valor);
    setImage(produto[id].image);
    setAno(produto[id].ano);
    setTipo(produto[id].tipo);
    setIdent(produto[id].id);
  }, [id]);

  const imageClickDois = () => {
    setImage(produto[id].imageDois);
  };
  const imageClickTres = () => {
    setImage(produto[id].imageTres);
  };
  const imageClickQuatro = () => {
    setImage(produto[id].imageQuatro);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setSizeAlert(false);
  };

  //Botão do tamanho da camisa
  const handleButtonClick = (buttonId, { target }) => {
    setSelectedButton(buttonId);
    setSize(target.innerText);
  };

  const buttonsSize = [
    { id: 1, label: 'P' },
    { id: 2, label: 'M' },
    { id: 3, label: 'G' },
    { id: 4, label: 'GG' },
  ];

  //--------------------------//

  //Botoes das quantidades de produtos
  const handleClickAdd = () => {
    setQnt(+qnt + 1);
  };
  const handleClickRemove = () => {
    setQnt(+qnt - 1);
  };

  //--------------------------//

  let preco = qnt * valor;

  const handleCart = () => {
    if (size === '') {
      return setSizeAlert(true);
    }
    let preco = qnt * valor;
    const obj = [
      {
        id: ident,
        clube: clube,
        tipo: tipo,
        ano: ano,
        qnt: qnt,
        valor: valor,
        size: size,
        preco: preco,
      },
    ];
    setCart([...cart, obj]);
    setItem('sportzone', [...cart, obj]);
    setOpen(true);
  };

  return (
    <Container fixed>
      <Box
        className="content"
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '3rem',
          marginBottom: '10rem',
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="desgraca"
        >
          <Box
            sx={{
              width: '30rem',
              height: '30rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                marginTop: '3rem',
                width: '30rem',
                padding: '0.1rem',
                borderRadius: '4%',
                border: '1px solid white',
              }}
            />
          </Box>
          <Box
            className="demonio"
            sx={{
              display: 'flex',
              gap: '2rem',
              padding: '0.1rem',
              borderRadius: '10px',
            }}
          >
            <Box>
              <img
                onClick={imageClickDois}
                src={produto[id].imageDois}
                alt=""
                style={{
                  width: '6rem',
                  height: '6rem',
                  padding: '0.1rem',
                  borderRadius: '4%',
                  border: '1px solid white',
                }}
              />
            </Box>
            <Box>
              <img
                onClick={imageClickTres}
                src={produto[id].imageTres}
                alt=""
                style={{
                  width: '6rem',
                  height: '6rem',
                  padding: '0.1rem',
                  borderRadius: '4%',
                  border: '1px solid white',
                }}
              />
            </Box>
            <Box>
              <img
                onClick={imageClickQuatro}
                src={produto[id].imageQuatro}
                alt=""
                style={{
                  width: '6rem',
                  height: '6rem',
                  padding: '0.1rem',
                  borderRadius: '4%',
                  border: '1px solid white',
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          className="infos"
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
            <Typography style={{ fontWeight: 'bold', marginBottom: '0.7rem' }}>
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
          </Typography>
          <ButtonGroup
            variant="contained"
            size="large"
            color="inherit"
            style={{
              // backgroundColor: 'white',
              width: '10.3rem',
            }}
          >
            {buttonsSize.map((button) => (
              <Button
                key={button.id}
                variant="contained"
                color={selectedButton === button.id ? 'success' : 'inherit'}
                onClick={(event) => handleButtonClick(button.id, event)}
              >
                {button.label}
              </Button>
            ))}
          </ButtonGroup>

          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={sizeAlert} autoHideDuration={3000}>
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: '100%' }}
              >
                Escolha um tamanho
              </Alert>
            </Snackbar>
          </Stack>

          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={3000}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                Produto adicionado ao carrinho
              </Alert>
            </Snackbar>
          </Stack>

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
            onClick={() => handleCart(setIdent)}
          >
            Adicionar ao Carrinho
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeProduto;
