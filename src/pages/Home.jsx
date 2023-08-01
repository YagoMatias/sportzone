import { Container } from '@mui/material';
import GlobalProdutos from '../components/GlobalProdutos.jsx';

function Home({ searchTerm }) {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
      <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
        <GlobalProdutos searchTerm={searchTerm} />
      </Container>
    </Container>
  );
}

export default Home;
