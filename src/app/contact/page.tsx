import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe BatiPro Afrique pour vos questions sur la construction au Sénégal.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="relative py-20 bg-mocha-deep">
        <div className="grain-overlay absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl text-white-cream mb-4">
            Contactez-nous
          </h1>
          <p className="text-mocha-light text-lg">
            Une question, une suggestion ou une collaboration ? Écrivez-nous.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
