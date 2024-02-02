import { ReactNode } from 'react';

export interface ISelectOption<ValueType> {
  label: string;
  value: ValueType;
}

export interface WithChildren {
  children: ReactNode;
}
