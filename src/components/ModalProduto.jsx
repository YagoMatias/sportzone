import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AttachMoney } from '@mui/icons-material';
import { ListItemText, TextField } from '@mui/material';
import ReactWhatsapp from 'react-whatsapp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  textTransform: 'capitalize',
  p: 4,
};

export const ModalProduto = ({ cart, valor }) => {
  const [open, setOpen] = React.useState(false);
  const [nameText, setNameText] = React.useState('');

  const handleChange = ({ target }) => {
    console.log(target.value);
    setNameText(target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDados = () => {
    const cartMensage = cart.map((item) => {
      return item.map((item) => {
        const texto = `\n${item.tipo} ${item.clube} ${item.ano} | Tamanho: ${item.size} | Qnt: ${item.qnt} | R$ ${item.preco},00 \n`;
        return texto;
      });
    });
    return cartMensage;
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        sx={{
          width: '15rem',
          height: '2.4rem',
          backgroundColor: 'darkgoldenrod',
        }}
        endIcon={<AttachMoney />}
        onClick={handleOpen}
      >
        Fechar Pedido
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="boxModal">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              FINALIZAR PEDIDO
            </Typography>
            <Box>
              <box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  gap: '1rem',
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Nome completo"
                  variant="standard"
                  className="nome"
                  onChange={handleChange}
                />
                <Typography variant="h6" component="h2">
                  Produtos
                </Typography>
                <Box border={'1px solid black'} padding={2}>
                  {cart.map((item) => {
                    return item.map((item) => {
                      return (
                        <ListItemText
                          key={item.id}
                          className="msg"
                          primary={
                            <li>
                              {`${item.tipo} ${item.clube} ${item.ano} | Tamanho:
                              ${item.size} | Qnt: ${item.qnt} | R$ ${item.preco}
                              ,00 |`}
                            </li>
                          }
                        />
                      );
                    });
                  })}
                </Box>
                <Button
                  color="success"
                  style={{
                    backgroundColor: 'darkgoldenrod',
                  }}
                >
                  <ReactWhatsapp
                    className="buttonWhatsapp"
                    number="5584996009908"
                    message={`Olá, meu nome é ${nameText} tenho interesse em adquirir esses produtos da SPORTZONE:\n${handleDados()}\n  no valor total de R$ ${valor},00`}
                  >
                    ENVIAR PEDIDO
                  </ReactWhatsapp>
                </Button>
              </box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalProduto;
