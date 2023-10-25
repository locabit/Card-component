import React, { useState } from "react";
import "./card.css";

export interface Action {
  label: string;
  func: () => void;
}

interface CardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  collapsable?: boolean;
  collapsableTitle?: string;
  hasActions?: boolean;
  actions?: Array<Action>;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  collapsable,
  collapsableTitle,
  hasActions,
  actions = [],
}) => {
  const [icon, setIcon] = useState<string>("fa-solid fa-arrow-down");
  const [show, setShow] = useState<boolean>(false);

  const getIcon = () => {
    if (show === false) {
      setIcon("fa-solid fa-arrow-up");
    } else {
      setIcon("fa-solid fa-arrow-down");
    }
    return setShow(!show);
  };

  const renderCardContent = () => {
    return (
      <div className="card">
        {image && (
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
        )}
        {title && <p className="card-title">{title}</p>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {hasActions && (
          <div className="card-footer">
            {actions.map((action, index) => (
              <button key={index} className="card-button" onClick={action.func}>
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card-wrapper">
      {collapsable ? (
        <>
          <div className="collapsable">
            <p className="collapsable-title">{collapsableTitle}</p>
            <button className={icon} onClick={getIcon}></button>
          </div>
          {show && renderCardContent()}
        </>
      ) : (
        renderCardContent()
      )}
    </div>
  );
};

export default Card;
