import React from 'react';

import Module from './Module';
import MobileModule from './MobileModule';

import { ProgramType } from '../types';

type ProgramProps = {
  program: ProgramType;
};

const Program: React.FC<ProgramProps> = ({ program }) => {
  return (
    <div className="program">
      <h3>{program.title}</h3>
      <div className="program__container">
        {[...Array(2)].map((item, i) => (
          <>
            <Module
              key={i}
              numberModule={i + 1}
              module={
                i === 0
                  ? program.specializedSubjects.slice(0, 5)
                  : program.specializedSubjects.slice(5, 10)
              }
            />
            <MobileModule
              key={i}
              numberModule={i + 1}
              module={
                i === 0
                  ? program.specializedSubjects.slice(0, 5)
                  : program.specializedSubjects.slice(5, 10)
              }
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Program;
