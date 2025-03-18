import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
    outline: 'border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
    text: 'text-green-600 hover:text-green-700 hover:bg-green-50 focus:ring-green-500',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
