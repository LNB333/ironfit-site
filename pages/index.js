export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#fff', backgroundColor: '#000' }}>
      {/* Header */}
      <header style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#111' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>IRON FIT</h1>
        <p style={{ fontSize: '1.2rem' }}>Wear Your Strength</p>
      </header>

      {/* Hero */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#000' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>NOUVELLE COLLECTION</h2>
        <p>Découvrez nos vêtements sportifs de qualité supérieure, pensés pour la performance et le style.</p>
        <button style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          fontWeight: 'bold',
          borderRadius: '0.5rem',
          backgroundColor: '#fff',
          color: '#000',
          border: 'none',
          cursor: 'pointer'
        }}>
          Voir la collection
        </button>
      </section>

      {/* À propos */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#111' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>À propos de IRON FIT</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          IRON FIT est une marque dédiée aux passionnés de sport. Nos produits allient qualité, durabilité et esthétisme pour vous accompagner dans tous vos défis.
        </p>
      </section>

      {/* Produits */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#000' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Nos Produits</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {['T-shirt technique', 'Leggings Performance', 'Sweat à capuche', 'Casquette'].map((item, idx) => (
            <div key={idx} style={{
              border: '1px solid #444',
              borderRadius: '1rem',
              padding: '2rem',
              width: '250px',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item}</h3>
              <p>Produit haut de gamme pour les sportifs exigeants.</p>
              <button style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                cursor: 'pointer'
              }}>
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#111' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>Contactez-nous</h2>
        <form style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Votre nom" style={{ padding: '0.8rem', borderRadius: '0.5rem', border: 'none' }} />
          <input type="email" placeholder="Votre email" style={{ padding: '0.8rem', borderRadius: '0.5rem', border: 'none' }} />
          <textarea placeholder="Votre message" rows="4" style={{ padding: '0.8rem', borderRadius: '0.5rem', border: 'none' }} />
          <button type="submit" style={{
            padding: '1rem',
            fontWeight: 'bold',
            borderRadius: '0.5rem',
            backgroundColor: '#fff',
            color: '#000',
            border: 'none',
            cursor: 'pointer'
          }}>
            Envoyer
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#000', fontSize: '0.9rem', borderTop: '1px solid #333' }}>
        © {new Date().getFullYear()} IRON FIT. Tous droits réservés.
      </footer>
    </div>
  );
}
