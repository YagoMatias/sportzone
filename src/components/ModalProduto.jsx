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
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  textTransform: 'capitalize',
  p: 4,
};
export const ModalProduto = ({ cart, valor }) => {
  const [open, setOpen] = React.useState(false);
  const [nameText, setNameText] = React.useState('');
  const quebralinha = '%0a';

  const handleChange = ({ target }) => {
    console.log(target.value);
    setNameText(target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDados = () => {
    const macaco = cart.map((item) => {
      return item.map((item) => {
        return ` ------------ ${item.tipo} ${item.clube} ${item.ano}  | Tamanho: ${item.size} | Qnt: ${item.qnt} | R$ ${item.preco},00 | ------------`;
      });
    });
    return macaco;
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              FINALIZAR PEDIDO
            </Typography>
            <Box>
              <form
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
                <Box border={'1px solid black'} padding={1}>
                  {cart.map((item) => {
                    return item.map((item) => {
                      return (
                        <ListItemText
                          key={item.id}
                          className="msg"
                          primary={`${item.tipo} ${item.clube} ${item.ano}  | Tamanho: ${item.size} | Qnt: ${item.qnt} | R$ ${item.preco},00 |`}
                        />
                      );
                    });
                  })}
                </Box>
                <ReactWhatsapp
                  number="5584987187425"
                  message={`Olá, meu nome é ${nameText}  tenho interesse em adiquirir esses produtos da SPORTZONE: ${handleDados()} com o valor total de R$ ${valor},00 `}
                >
                  ENVIAR PEDIDO
                </ReactWhatsapp>
              </form>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalProduto;
