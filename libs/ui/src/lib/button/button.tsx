import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <button className="p-3 text-white rounded-full bg-slate-700 hover:bg-slate-600">
      {label}
    </button>
  );
}

export default Button;
