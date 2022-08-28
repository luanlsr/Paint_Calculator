import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WallFormTwo } from '../../components/AtomicDesign/molecules/WallFormTwo';
import { Button } from '../../components/AtomicDesign/atoms/Button';
import './style.css';

export const WallTwo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wallthree');
  };

  return (
    <div className='container'>
      <WallFormTwo title='Parede 2' />
      <Button
        title='Continuar'
        className='continue-btn'
        onClick={handleClick}
      />
    </div>
  );
};
