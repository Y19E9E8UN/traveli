import React, { forwardRef, ChangeEvent } from 'react';

interface Props {
  // Props에 필요한 속성들을 정의해주세요
}

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  return (
    <div className='input-box'>
      <div className='input-box-title'>{'아이디'}</div>
      <div className='input-box-content'>
        <input className='input-box-input' ref={ref} />
        <div className='input-box-button'>{'중복 확인'}</div>
      </div>
      <div className='input-box-message'>{'사용 가능한 아이디 입니다'}</div>
    </div>
  );
});