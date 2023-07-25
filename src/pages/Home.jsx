import { Container } from '@mui/material';
import Produtos from '../components/GlobalProdutos.jsx';

function Home({ searchTerm }) {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
      <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
        <Produtos searchTerm={searchTerm} />
      </Container>
    </Container>
  );
}

export default Home;
