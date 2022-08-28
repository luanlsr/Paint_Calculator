import React, { useEffect, useState } from 'react';
import { Button } from '../AtomicDesign/atoms/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { setColor } from '../../redux/slices/resultSlice';

export const Section = () => {
  const [colors, setColors] = useState('');
  console.log('🚀 ~ file: intex.tsx ~ line 10 ~ Section ~ colors', colors);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColor(colors));
  }, [dispatch, colors]);

  const handleChange = (e: any) => {
    const { value } = e.target;
    console.log('🚀 ~ file: intex.tsx ~ line 19 ~ handleChange ~ value', value);
    setColors(value);
  };

  const handleClick = () => {
    navigate('/wallone');
  };

  return (
    <div className='container'>
      <h1>Boas vindas à Calculadora de tintas</h1>
      <p>
        Aqui você saberá quantas latas de tinta precisará para pintar sua casa
      </p>
      <div className='chooseColor'>
        <h3>Escolha sua cor:</h3>
        <input type='color' name='color' id='color' onChange={handleChange} />
      </div>

      <Button title='Começar' className='start-btn' onClick={handleClick} />
    </div>
  );
};
