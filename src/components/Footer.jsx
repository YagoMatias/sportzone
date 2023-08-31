import React from 'react';
import '../style/global.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'inherit',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
  }));

  return (
    <footer
      className="footer"
      style={{ background: 'inherit', marginTop: '5rem', width: '100%' }}
    >
      <Box sx={{ width: '100%' }}>
        <Divider
          variant="fullWidth"
          component="div"
          style={{ backgroundColor: 'white' }}
        />
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ padding: '1rem' }}
        >
          <Grid item xs={6}>
            <Item>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginRight: '5rem',
                }}
              >
                <Typography variant="h6" color="white" fontWeight={'500'}>
                  Contatos
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginLeft: '5rem',
                  }}
                >
                  <Typography
                    variant="p"
                    color="white"
                    fontWeight={'500'}
                    style={{ display: 'flex', gap: '0.5rem', margin: '0.5rem' }}
                  >
                    <PhoneIcon />
                    <Link to={'tel:+558496009908'} target="_blank">
                      84 9600-9908
                    </Link>
                  </Typography>
                  <Typography
                    variant="p"
                    fontSize={'0.7rem'}
                    color="white"
                    fontWeight={'500'}
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      margin: '0.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <EmailIcon />

                    <Link to={'mailto:sportzone256@gmail.com'} target="_blank">
                      Sportzone256@gmail.com
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontWeight={'500'}
                  style={{ display: 'flex', flexWrap: 'nowrap' }}
                >
                  Redes Sociais
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                  }}
                >
                  <Typography
                    variant="p"
                    color="white"
                    fontWeight={'500'}
                    style={{ display: 'flex', gap: '0.5rem', margin: '0.5rem' }}
                  >
                    <InstagramIcon />
                    <Link
                      to={'https://www.instagram.com/s_portzone/'}
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </Typography>
                  <Typography
                    variant="p"
                    color="white"
                    fontWeight={'500'}
                    style={{ display: 'flex', gap: '0.5rem', margin: '0.5rem' }}
                  >
                    <WhatsAppIcon />
                    <Link
                      to={
                        'https://api.whatsapp.com/send/?phone=5584996009908&t&type=phone_number&app_absent=0'
                      }
                      target="_blank"
                    >
                      Whatsapp
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={15}>
            <Item>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h8"
                  color="white"
                  paddingTop={2}
                  fontWeight={'500'}
                >
                  <Link to={'https://github.com/YagoMatias'} target="_blank">
                    Copyright © 2023 Yago Matias - Todos os direitos reservados
                  </Link>
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
