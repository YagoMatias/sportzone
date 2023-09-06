import React from 'react';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Button
        onClick={handleClick}
        color="error"
        variant="text"
        size="large"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          opacity: `${isVisible ? '1' : '0'}`,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <KeyboardDoubleArrowUpIcon fontSize="medium" />
      </Button>
    </>
  );
};

export default BackToTop;
