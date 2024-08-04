import React, { useState, type FC } from "react";
import './multiSelect.css'
import CloseIcon from "@icons/CloseIcon";
import XmarkIcon from "@icons/XmarkIcon"
import IconButton from '../IconButton/IconButton';
import { type TechnologiesFilter } from "@utils/types";

type Props = {
  inputTitle: string;
  type: 'FRONTEND' | 'BACKEND';
  options: TechnologiesFilter[];
  optionsSelected: TechnologiesFilter[];
  handleSetTechnologySelected: (newTechnology: TechnologiesFilter, type: 'FRONTEND' | 'BACKEND') => void
  handleRemoveTechnologySelected: (technology: TechnologiesFilter, type: 'FRONTEND' | 'BACKEND') => void
  handleRemoveAllTechnologySelected: (type: 'FRONTEND' | 'BACKEND') => void;
};

const MultiSelect: FC<Props> = ({
  inputTitle,
  type,
  options,
  optionsSelected,
  handleSetTechnologySelected,
  handleRemoveTechnologySelected,
  handleRemoveAllTechnologySelected
}) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="container-multi-select">
      <p className="label-multi-select">{inputTitle}</p>

      <div
        className="div-container-select"
        tabIndex={0}
        onClick={() => setIsOpen((prevState) => !prevState)}>
        {optionsSelected?.length == 0 && (
          <p className="placeholder-value">
            Selecciona opciones
          </p>
        )}
        {optionsSelected?.length > 0 && (
          <div className="div-container-selected-option">
            {optionsSelected.map((technology) => (
              <div key={technology.key}
                className="div-container-selected-option-content">
                {technology.label}
                <IconButton
                  onClick={() => handleRemoveTechnologySelected(technology, type)}>
                  <XmarkIcon styles={{ width: 14, color: "black" }} />
                </IconButton>
              </div>
            ))}
          </div>
        )}

        <IconButton
          onClick={e => {
            e.stopPropagation()
            handleRemoveAllTechnologySelected(type)
          }}>
          <CloseIcon styles={{ width: 20, color: "black" }} />
        </IconButton>

        {isOpen && (
          <div className="panel" >
            {
              options.length > 0 ? (
                options.map(option => {
                  return (
                    <div
                      key={option.label}
                      onClick={e => {
                        e.stopPropagation()
                        handleSetTechnologySelected(option, type)
                        setIsOpen(false)
                      }}
                      className="option-label" >{option.label}</div>
                  )
                })
              ) : (
                <div className="no-option">No hay opciones disponibles</div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};


export default MultiSelect;