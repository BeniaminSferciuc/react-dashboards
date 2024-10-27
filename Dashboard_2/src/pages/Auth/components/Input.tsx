import React from 'react';
import { Control, useController } from 'react-hook-form';

type InputProps = {
  icon?: React.ReactElement;
  label: string;
  placeholder?: string;
  type?: string;
  control: Control<any>;
  name: string;
};

const Input = ({
  icon,
  label,
  placeholder,
  type,
  control,
  name,
}: InputProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div>
      <div className="flex gap-4 rounded-2xl border p-2">
        <div className="flex w-fit items-center self-stretch border-r-2 border-neutral-200 px-4">
          {icon}
        </div>
        <div className="flex w-full flex-col">
          <p className="flex-1 text-xs tracking-tight text-black/60">{label}</p>
          <input
            type={type}
            autoFocus
            placeholder={placeholder}
            className="tracking-tight outline-none"
            {...control.register(name)}
          />
        </div>
      </div>
      {errors[name] && (
        <span className="text-xs text-red-500">
          {errors[name].message?.toString()}
        </span>
      )}
    </div>
  );
};

export default Input;
