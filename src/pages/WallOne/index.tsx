import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WallFormOne } from '../../components/AtomicDesign/molecules/WallFormOne';
import { Button } from '../../components/AtomicDesign/atoms/Button';
import './style.css';

export const WallOne = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/walltwo');
  };

  return (
    <div className='container'>
      <WallFormOne title='Parede 1' />
      <Button
        title='Continuar'
        className='continue-btn'
        onClick={handleClick}
      />
    </div>
  );
};
