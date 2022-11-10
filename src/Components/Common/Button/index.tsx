import React from 'react';
import './index.scss';

type Props = {
  value: "Complete Checkout";
  
};
function Index({ value}: Props) {
  return (
    <>
    <div className='button'>
      <button type='submit'>{value}</button>
    </div>
    </>
  );
}

export default Index;