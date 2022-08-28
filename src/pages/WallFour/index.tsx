import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { WallFormFour } from '../../components/AtomicDesign/molecules/WallFormFour';
import { Button } from '../../components/AtomicDesign/atoms/Button';
import './style.css';
import { setTotalWallsArea } from '../../redux/slices/resultSlice';
import { useAppSelector } from '../../redux/hooks';

export const WallFour = () => {
  const {
    doorsHeigth,
    doorsWidth,
    windowsHeight,
    windowsWidth,
    canOfPaintXLarge,
    canOfPaintLarge,
    canOfPaintMedium,
    canOfPaintSmall,
    totalWallsArea,
    coveragePerLitter,
  } = useAppSelector(state => state.resultSlice);
  const {
    height: wallOneHeigth,
    width: wallOneWidth,
    doors: wallOneDoors,
    windows: wallOneWindows,
  } = useAppSelector(state => state.wallOneSlice);
  const {
    height: wallTwoHeigth,
    width: wallTwoWidth,
    doors: wallTwoDoors,
    windows: wallTwoWindows,
  } = useAppSelector(state => state.wallTwoSlice);
  const {
    height: wallThreeHeigth,
    width: wallThreeWidth,
    doors: wallThreeDoors,
    windows: wallThreeWindows,
  } = useAppSelector(state => state.wallThreeSlice);
  const {
    height: wallFourHeigth,
    width: wallFourWidth,
    doors: wallFourDoors,
    windows: wallFourWindows,
  } = useAppSelector(state => state.wallFourSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const calcTotalArea = (): number => {
    const areaDoorsOne = doorsHeigth * doorsWidth * wallOneDoors;
    const areaDoorsTwo = doorsHeigth * doorsWidth * wallTwoDoors;
    const areaDoorsThree = doorsHeigth * doorsWidth * wallThreeDoors;
    const areaDoorsFour = doorsHeigth * doorsWidth * wallFourDoors;

    const areaWindowsOne = windowsHeight * windowsWidth * wallOneWindows;
    const areaWindowsTwo = windowsHeight * windowsWidth * wallTwoWindows;
    const areaWindowsThree = windowsHeight * windowsWidth * wallThreeWindows;
    const areaWindowsFour = windowsHeight * windowsWidth * wallFourWindows;

    const totalAreaDoorsWindows =
      areaDoorsOne +
      areaDoorsTwo +
      areaDoorsThree +
      areaDoorsFour +
      areaWindowsOne +
      areaWindowsTwo +
      areaWindowsThree +
      areaWindowsFour;

    const wallOneArea = wallOneHeigth * wallOneWidth;
    const wallTwoArea = wallTwoHeigth * wallTwoWidth;
    const wallThreeArea = wallThreeHeigth * wallThreeWidth;
    const wallFourArea = wallFourHeigth * wallFourWidth;

    const totalAreaToPaint =
      wallOneArea +
      wallTwoArea +
      wallThreeArea +
      wallFourArea -
      totalAreaDoorsWindows;

    return totalAreaToPaint;
  };

  const handleClick = () => {
    dispatch(setTotalWallsArea(calcTotalArea()));
    navigate('/result');
  };

  return (
    <div className='container'>
      <WallFormFour title='Parede 4' />
      <Button title='Calcular' className='calc-btn' onClick={handleClick} />
    </div>
  );
};
