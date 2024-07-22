import React, { type FC, type InputHTMLAttributes } from "react";
import './multiSelect.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
    inputTitle: string;
};

const MultiSelect: FC<Props> = ({ inputTitle }) => {
    const options = [
        {value: 'NodeJs', label: 'NodeJs'},
        {value: 'ExpressJs', label: 'ExpressJs'},
        {value: 'NextJS', label: 'NextJS'},
        {value: 'TypeScript', label: 'TypeScript'},
    ];

    return (
        <div className="container-multi-select">
            <p className="label-multi-select">{inputTitle}</p>
            <div className="continer-list-option">
                <ul>
                    <div className="continer-option">
                        {options.map(options => {
                            return (
                                <li> key={options.label}
                                    <h4>{options.label}</h4>
                                </li>
                            )
                        })}
                    </div>
                </ul>
            </div>
        </div>
    );
};



export default MultiSelect;