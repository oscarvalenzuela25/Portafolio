import React, { type FC, type InputHTMLAttributes } from 'react';
import './textInput.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  inputTitle: string;
};

const TextInput: FC<Props> = ({ inputTitle, ...rest }) => {
  return (
    <div className="container-text-input">
      <p className="label-text-input">{inputTitle}</p>
      <input className="text-input" type="text" {...rest} />
    </div>
  );
};

export default TextInput;
