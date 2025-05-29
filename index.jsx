
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function IronFitHome() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold">IRON FIT</h1>
        <p className="mt-4 text-lg md:text-xl italic">Wear Your Strength</p>
        <Button className="mt-6 text-black bg-white hover:bg-gray-200">Découvrir la collection</Button>
      </header>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">La marque</h2>
        <p className="text-lg md:text-xl">
          Iron Fit est bien plus qu'une marque de vêtements. C'est un symbole de détermination, de discipline et de puissance. Conçue pour les passionnés de musculation, de sport et de dépassement de soi.
        </p>
      </section>

      <section className="bg-gray-900 py-12 px-4">
        <h2 className="text-2xl md:text-4xl text-center font-semibold mb-10">Nos produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-4">
              <img src="/images/tshirt-front.png" alt="T-shirt Iron Fit devant" className="w-full rounded-xl" />
              <p className="mt-4 text-center font-semibold">T-shirt Iron Fit - Logo Dragon</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img src="/images/tshirt-back.png" alt="T-shirt Iron Fit dos" className="w-full rounded-xl" />
              <p className="mt-4 text-center font-semibold">T-shirt Iron Fit - Dos Branding</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Rejoins la communauté Iron Fit</h2>
        <p className="mb-6 text-gray-300">Sois le premier à recevoir les drops, les promos et plus encore.</p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <Input
            placeholder="Ton e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black"
          />
          <Button>S'abonner</Button>
        </div>
      </section>

      <footer className="bg-gray-800 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} IRON FIT. Tous droits réservés.
      </footer>
    </div>
  );
}
