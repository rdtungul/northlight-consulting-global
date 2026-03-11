import Button from '@/components/ui/Button';

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-purpleDeep to-brand-purple py-20 px-6 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
        Ready to See Real Results?
      </h2>
      <p className="text-white/80 max-w-xl mx-auto mb-8">
        Book your free strategy consultation today and discover how NorthLight can transform your digital presence.
      </p>
      <Button href="#contact" variant="outline">Get a Free Consultation</Button>
    </section>
  );
}
