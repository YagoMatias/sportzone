import { Container } from '@mui/material';
import Produtos from '../components/GlobalProdutos.jsx';

function Home() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
      <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
        <Produtos />
      </Container>
    </Container>
  );
}

export default Home;
