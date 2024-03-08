import React, { forwardRef, ChangeEvent, KeyboardEvent } from 'react';
import './style.css';

// Props 정의
interface InputBoxProps {
  title: string;
  placeholder: string;
  type: 'text' | 'password';
  value: string;
  isErrMessage?: boolean;
  buttonTitle?: string;
  message?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeydown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>((props: InputBoxProps, ref) => {
  // Props 사용
  const { title, placeholder, type, value, isErrMessage, buttonTitle, message, onChange, onKeydown, onButtonClick } = props;

  const buttonClass = `input-box-button${value === '' ? '-disable' : ''}`;
  const messageClass = isErrMessage ? 'input-box-message-err' : 'input-box-message';

  return (
    <div className='input-box'>
      <div className='input-box-title'>{title}</div>
      <div className='input-box-content'>
        <div className='input-box-body'>
          <input ref={ref} className='input-box-input' placeholder={placeholder} type={type} value={value} onChange={onChange} onKeyDown={onKeydown}/>
          {buttonTitle !== undefined && onButtonClick !== undefined && (
            <div className={buttonClass} onClick={onButtonClick}>
              {buttonTitle}
            </div>
          )}
        </div>
        {message !== undefined && <div className={messageClass}>{message}</div>}
      </div>
    </div>
  );
});

export default InputBox;
