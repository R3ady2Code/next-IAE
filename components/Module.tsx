import React from 'react';
import { ModuleType } from '../types';

export type ModuleProps = {
  numberModule: number;
  module: ModuleType[];
};

const Module: React.FC<ModuleProps> = ({ numberModule, module }) => {
  return (
    <div className="moduleCard">
      <h4>{numberModule} модуль</h4>
      <ul>
        {module.map((item) => (
          <li key={item.id}>
            <span>{item.string}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Module;
