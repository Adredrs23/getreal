import { InputHTMLAttributes } from 'react';

export interface FormInputPropsType
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  stateValue: string | number;
  stateSetter: (item: string) => void;
}
