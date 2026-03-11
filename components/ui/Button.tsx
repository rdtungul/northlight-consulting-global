import Link from 'next/link';

type ButtonProps = {
  variant?: 'primary' | 'outline';
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ variant = 'primary', href, children, className = '' }: ButtonProps) {
  const base = 'font-bold px-8 py-4 rounded-full transition-all duration-200 inline-block text-center cursor-pointer';
  const styles = {
    primary: 'bg-brand-purple hover:bg-brand-purpleDeep text-white',
    outline: 'border border-white/30 text-white hover:border-brand-purple hover:text-brand-purple',
  };
  const combined = `${base} ${styles[variant]} ${className}`;
  if (href) return <Link href={href} className={combined}>{children}</Link>;
  return <button className={combined}>{children}</button>;
}
