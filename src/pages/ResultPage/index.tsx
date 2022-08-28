import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { Button } from '../../components/AtomicDesign/atoms/Button';
import './style.css';

export const ResultPage = () => {
  const {
    canOfPaintXLarge,
    canOfPaintLarge,
    canOfPaintMedium,
    canOfPaintSmall,
    totalWallsArea,
    coveragePerLitter,
    color,
  } = useAppSelector(state => state.resultSlice);

  const totalLitters = totalWallsArea / coveragePerLitter;

  let restOfDivisionXLarge = 0;
  let restOfDivisionLarge = 0;
  let restOfDivisionMedium = 0;

  let quantityXLargeCanOfPaint = 0;
  let quantityLargeCanOfPaint = 0;
  let quantityMediumCanOfPaint = 0;
  let quantitySmallCanOfPaint = 0;

  // XL
  restOfDivisionXLarge = totalLitters % canOfPaintXLarge;
  quantityXLargeCanOfPaint = Math.floor(totalLitters / canOfPaintXLarge);

  // L
  if (quantityXLargeCanOfPaint < 1) {
    quantityLargeCanOfPaint = Math.floor(totalLitters / canOfPaintLarge);
    restOfDivisionLarge = totalLitters % canOfPaintLarge;
  }
  if (restOfDivisionXLarge >= canOfPaintLarge) {
    quantityLargeCanOfPaint = Math.floor(
      restOfDivisionXLarge / canOfPaintLarge,
    );
    restOfDivisionLarge = restOfDivisionXLarge % canOfPaintLarge;
  }
  console.log(
    '🚀 ~ file: index.tsx ~ line 42 ~ ResultPage ~ restOfDivisionLarge',
    restOfDivisionLarge,
  );

  // M
  if (quantityLargeCanOfPaint < 1 && quantityXLargeCanOfPaint < 1) {
    quantityMediumCanOfPaint = Math.floor(totalLitters / canOfPaintMedium);
    restOfDivisionMedium = totalLitters % canOfPaintMedium;
  }
  if (
    restOfDivisionXLarge >= canOfPaintMedium &&
    restOfDivisionXLarge < canOfPaintLarge
  ) {
    quantityMediumCanOfPaint = Math.floor(
      restOfDivisionXLarge / canOfPaintMedium,
    );
    restOfDivisionMedium = restOfDivisionXLarge % canOfPaintMedium;
  }
  if (restOfDivisionLarge >= canOfPaintMedium) {
    quantityMediumCanOfPaint = Math.floor(
      restOfDivisionLarge / canOfPaintMedium,
    );
    restOfDivisionMedium = restOfDivisionLarge % canOfPaintMedium;
  }

  // P
  if (
    quantityXLargeCanOfPaint < 1 &&
    quantityLargeCanOfPaint < 1 &&
    quantityMediumCanOfPaint < 1
  ) {
    quantitySmallCanOfPaint = Math.ceil(totalLitters / canOfPaintSmall);
  }
  if (
    restOfDivisionXLarge < canOfPaintLarge &&
    restOfDivisionXLarge < canOfPaintMedium
  ) {
    quantitySmallCanOfPaint = Math.ceil(restOfDivisionXLarge / canOfPaintSmall);
  }
  if (restOfDivisionLarge < canOfPaintMedium) {
    quantitySmallCanOfPaint = Math.ceil(restOfDivisionLarge / canOfPaintSmall);
  } else {
    quantitySmallCanOfPaint = Math.ceil(restOfDivisionMedium / canOfPaintSmall);
  }

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div
      className='container'
      style={
        color.startsWith('#f') || color.startsWith('#e')
          ? { backgroundColor: '#888' }
          : { backgroundColor: '#fff' }
      }
    >
      <h1>Area a ser pintada: {totalWallsArea.toFixed(2)} m²</h1>
      <br />
      <h2>
        Você precisará de:{' '}
        <span className='litters'>
          {totalLitters.toFixed(2)} litros de tinta
        </span>
      </h2>
      <br />
      {quantityXLargeCanOfPaint > 0 ? (
        <h1
          className='canOfPaints'
          style={{ color: color }}
        >{`${quantityXLargeCanOfPaint} latas de 18 litros`}</h1>
      ) : (
        ''
      )}
      {quantityLargeCanOfPaint > 0 ? (
        <h1
          className='canOfPaints'
          style={{ color: color }}
        >{`${quantityLargeCanOfPaint} latas de 3,6 litros`}</h1>
      ) : (
        ''
      )}
      {quantityMediumCanOfPaint > 0 ? (
        <h1
          className='canOfPaints'
          style={{ color: color }}
        >{`${quantityMediumCanOfPaint} latas de 2,5 litros`}</h1>
      ) : (
        ''
      )}
      {quantitySmallCanOfPaint > 0 ? (
        <h1
          className='canOfPaints'
          style={{ color: color }}
        >{`${quantitySmallCanOfPaint} latas de 0,5 litro`}</h1>
      ) : (
        ''
      )}

      <Button
        title={'Calcular novamente'}
        className='calc-again-btn'
        onClick={handleClick}
      />
    </div>
  );
};
