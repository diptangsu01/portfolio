import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sky' | 'indigo' | 'emerald' | 'purple' | 'amber' | 'neutral';
  className?: string;
  onClick?: () => void;
}

export default function Badge({
  children,
  variant = 'neutral',
  className,
  onClick,
}: BadgeProps) {
  const variantStyles = {
    sky: 'bg-sky-950/60 text-sky-400 border-sky-800/50 hover:bg-sky-900/60',
    indigo: 'bg-indigo-950/60 text-indigo-400 border-indigo-800/50 hover:bg-indigo-900/60',
    emerald: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/50 hover:bg-emerald-900/60',
    purple: 'bg-purple-950/60 text-purple-400 border-purple-800/50 hover:bg-purple-900/60',
    amber: 'bg-amber-950/60 text-amber-400 border-amber-800/50 hover:bg-amber-900/60',
    neutral: 'bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-800/80',
  };

  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md transition-all duration-200',
        variantStyles[variant],
        onClick && 'cursor-pointer active:scale-95',
        className
      )}
    >
      {children}
    </span>
  );
}