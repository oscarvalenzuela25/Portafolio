import { type FC, type InputHTMLAttributes } from 'react';
import useTextInput from './hooks/useTextInput';
import './styles.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  inputTitle: string;
};

const TextInput: FC<Props> = ({ inputTitle, ...rest }) => {
  const { inputId } = useTextInput(rest.id);

  return (
    <div className="container-text-input">
      <label className="label-text-input" htmlFor={inputId}>
        {inputTitle}
      </label>
      <input className="text-input" id={inputId} type="text" {...rest} />
    </div>
  );
};

export default TextInput;
