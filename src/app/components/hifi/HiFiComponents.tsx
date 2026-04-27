import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Heart, MessageCircle, Users, User, Home as HomeIcon, Compass, Circle as CircleIcon, X, ChevronLeft, ChevronRight, Search, Settings, MoreVertical, Send, Smile, Image as ImageIcon, Plus, Check, Star, AlertCircle, Info } from 'lucide-react';

// Button Component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 active:from-primary-800 active:to-primary-800 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-neutral-50 active:bg-neutral-100 text-neutral-900 border-2 border-neutral-200 shadow-sm hover:border-neutral-300',
    ghost: 'bg-transparent hover:bg-neutral-100 active:bg-neutral-200 text-neutral-700',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-md',
    success: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-md',
  };

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm rounded-lg gap-1.5',
    md: 'h-11 px-4 text-base rounded-xl gap-2',
    lg: 'h-14 px-6 text-lg rounded-2xl gap-2',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
}

// Card Component
interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'hover' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', onClick, variant = 'default', padding = 'md' }: CardProps) {
  const baseClasses = 'bg-white rounded-2xl border overflow-hidden';
  const variantClasses = {
    default: 'border-neutral-100 shadow-sm',
    hover: 'border-neutral-100 shadow-sm transition-all duration-200 hover:shadow-md hover:border-neutral-200',
    interactive: 'border-neutral-100 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-neutral-200 hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]',
  };
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// Chip/Tag Component
interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
  icon?: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

export function Chip({ label, selected = false, onClick, size = 'md', icon, variant = 'default' }: ChipProps) {
  const baseClasses = 'inline-flex items-center gap-1.5 font-medium transition-all duration-200';

  const sizeClasses = {
    sm: 'h-7 px-3 text-xs rounded-full',
    md: 'h-9 px-4 text-sm rounded-full',
  };

  const variantClasses = {
    default: selected
      ? 'bg-gradient-to-r from-primary-600 to-primary-600 text-white shadow-md'
      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200',
    primary: selected
      ? 'bg-gradient-to-r from-primary-600 to-primary-600 text-white shadow-md'
      : 'bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-200',
    success: selected
      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md'
      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200',
    warning: selected
      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
      : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {label}
    </button>
  );
}

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Input({ label, error, helper, icon, iconPosition = 'left', className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          className={`w-full h-12 px-4 ${icon && iconPosition === 'left' ? 'pl-10' : ''} ${icon && iconPosition === 'right' ? 'pr-10' : ''} bg-white border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500'} rounded-xl text-base text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-200 ${className}`}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
      {helper && !error && (
        <p className="mt-1.5 text-sm text-neutral-500">{helper}</p>
      )}
    </div>
  );
}

// Textarea Component
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export function Textarea({ label, error, helper, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        className={`w-full min-h-[120px] px-4 py-3 bg-white border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500'} rounded-xl text-base text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-200 resize-none ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
      {helper && !error && (
        <p className="mt-1.5 text-sm text-neutral-500">{helper}</p>
      )}
    </div>
  );
}

// Avatar Component
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away';
  fallback?: string;
}

export function Avatar({ src, alt, size = 'md', status, fallback }: AvatarProps) {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-2xl',
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-neutral-400',
    away: 'bg-amber-500',
  };

  return (
    <div className="relative inline-block">
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold overflow-hidden`}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span>{fallback || '?'}</span>
        )}
      </div>
      {status && (
        <div className={`absolute bottom-0 right-0 ${size === 'xs' ? 'w-2 h-2' : size === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3'} ${statusColors[status]} rounded-full border-2 border-white`} />
      )}
    </div>
  );
}

// Badge Component
interface BadgeProps {
  count: number;
  max?: number;
  variant?: 'primary' | 'danger' | 'success';
}

export function Badge({ count, max = 99, variant = 'primary' }: BadgeProps) {
  const displayCount = count > max ? `${max}+` : count;

  const variantClasses = {
    primary: 'bg-primary-600',
    danger: 'bg-red-600',
    success: 'bg-green-600',
  };

  if (count === 0) return null;

  return (
    <div className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 ${variantClasses[variant]} text-white text-xs font-semibold rounded-full`}>
      {displayCount}
    </div>
  );
}

// Bottom Navigation
interface BottomNavItem {
  icon: ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  onClick?: () => void;
}

interface BottomNavProps {
  items: BottomNavItem[];
}

export function BottomNav({ items }: BottomNavProps) {
  return (
    <div className="h-20 bg-white border-t border-neutral-200 px-2 safe-area-bottom">
      <div className="flex items-center justify-around h-full">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 ${
              item.active ? 'text-primary-600' : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            <div className="relative">
              <div className={`w-6 h-6 ${item.active ? 'scale-110' : ''} transition-transform duration-200`}>
                {item.icon}
              </div>
              {item.badge !== undefined && item.badge > 0 && (
                <div className="absolute -top-1 -right-1">
                  <Badge count={item.badge} variant="danger" />
                </div>
              )}
            </div>
            <span className={`text-xs font-medium ${item.active ? 'font-semibold' : ''}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Header Component
interface HeaderProps {
  title?: string;
  subtitle?: string;
  leftAction?: ReactNode;
  rightAction?: ReactNode;
  transparent?: boolean;
}

export function Header({ title, subtitle, leftAction, rightAction, transparent = false }: HeaderProps) {
  return (
    <div className={`h-16 px-4 flex items-center justify-between ${transparent ? 'bg-transparent' : 'bg-white border-b border-neutral-200'}`}>
      <div className="flex items-center gap-3 flex-1">
        {leftAction}
        {(title || subtitle) && (
          <div className="flex-1">
            {title && <h1 className="text-lg font-semibold text-neutral-900">{title}</h1>}
            {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
          </div>
        )}
      </div>
      {rightAction && <div>{rightAction}</div>}
    </div>
  );
}

// Icon Button
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'solid' | 'outline';
}

export function IconButton({ icon, size = 'md', variant = 'ghost', className = '', ...props }: IconButtonProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const variantClasses = {
    ghost: 'bg-transparent hover:bg-neutral-100 active:bg-neutral-200 text-neutral-700',
    solid: 'bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-900',
    outline: 'bg-white hover:bg-neutral-50 active:bg-neutral-100 border border-neutral-300 text-neutral-700',
  };

  return (
    <button
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}

// Divider
export function Divider({ className = '' }: { className?: string }) {
  return <div className={`h-px bg-neutral-200 ${className}`} />;
}

// Empty State
interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      {icon && (
        <div className="w-16 h-16 mb-4 text-neutral-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-neutral-500 mb-6 max-w-sm">{description}</p>
      )}
      {action}
    </div>
  );
}

// Loading Spinner
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`${sizeClasses[size]} border-2 border-neutral-200 border-t-primary-600 rounded-full animate-spin`} />
  );
}

// Alert/Banner Component
interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  children: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
}

export function Alert({ variant = 'info', children, icon, onClose }: AlertProps) {
  const variantClasses = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    error: 'bg-red-50 border-red-200 text-red-900',
  };

  const defaultIcons = {
    info: <Info className="w-5 h-5" />,
    success: <Check className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
  };

  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${variantClasses[variant]}`}>
      <div className="flex-shrink-0 mt-0.5">
        {icon || defaultIcons[variant]}
      </div>
      <div className="flex-1 text-sm">{children}</div>
      {onClose && (
        <button onClick={onClose} className="flex-shrink-0 hover:opacity-70 transition-opacity">
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

// Modal Component (simple version)
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col shadow-xl">
        {title && (
          <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
            <IconButton icon={<X className="w-5 h-5" />} onClick={onClose} />
          </div>
        )}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 border-t border-neutral-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
