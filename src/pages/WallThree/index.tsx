import { useNavigate } from 'react-router-dom';
import { WallFormThree } from '../../components/AtomicDesign/molecules/WallFormThree';
import { Button } from '../../components/AtomicDesign/atoms/Button';
import './style.css';

export const WallThree = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wallfour');
  };

  return (
    <div className='container'>
      <WallFormThree title='Parede 3' />
      <Button
        title='Continuar'
        className='continue-btn'
        onClick={handleClick}
      />
    </div>
  );
};
