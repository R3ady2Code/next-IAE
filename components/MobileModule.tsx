import React from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

import plus from '../public/plus.png';
import minus from '../public/minus.png';

import { ModuleProps } from './Module';

const MobileModule: React.FC<ModuleProps> = ({ numberModule, module }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="mobileModule" onClick={() => setIsVisible(!isVisible)}>
      <div className={`mobileModule__header ${isVisible && 'mobileModule__header_active'}`}>
        {isVisible && <Image src={minus} alt="icon" width={20} height={2} />}
        {!isVisible && <Image src={plus} alt="icon" width={20} height={20} />}
        {numberModule} модуль
      </div>
      <CSSTransition in={isVisible} timeout={500} classNames="list" mountOnEnter unmountOnExit>
        <ul>
          {module.map((item) => (
            <li key={item.id}>
              <span>{item.string}</span>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default MobileModule;
