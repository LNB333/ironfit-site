
export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>IRON FIT</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Wear Your Strength</p>
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
        Découvrir la collection
      </button>
    </div>
  );
}
