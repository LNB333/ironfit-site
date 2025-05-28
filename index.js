
export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>IRON FIT</h1>
      <p style={{ fontStyle: 'italic', marginTop: '1rem', fontSize: '1.25rem' }}>Wear Your Strength</p>
      <button style={{
        marginTop: '2rem',
        backgroundColor: '#fff',
        color: '#000',
        padding: '0.75rem 1.5rem',
        fontWeight: 'bold',
        borderRadius: '0.5rem',
        cursor: 'pointer'
      }}>
        Découvrir la collection
      </button>
    </div>
  );
}
