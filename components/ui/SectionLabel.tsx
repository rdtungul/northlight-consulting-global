export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-brand-purple uppercase tracking-widest text-xs font-semibold mb-3">
      {children}
    </p>
  );
}
