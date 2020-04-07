import Head from 'next/head'
import Map from '../components/Map'

const Home = () => (
  <div className="container">
    <Head>
      <title>Fleet</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Map />
      <div style={{
        position: 'absolute',
        top: 10,
        right: 10,
        bottom: 10,
        width: 300,
        backdropFilter: 'brightness(150%) blur(30px)',
        padding: 10,
        borderRadius: 10,
      }}>
        <div style={{ borderRadius: 5, width: '100%', height: 60, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <div style={{ borderRadius: 5, width: '100%', height: 60, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <div style={{ borderRadius: 5, width: '100%', height: 60, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <div style={{ borderRadius: 5, width: '100%', height: 60, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        backdropFilter: 'brightness(150%) blur(30px)',
        padding: 10,
        borderRadius: 10,
      }}>
        <div style={{ borderRadius: 24, width: 48, height: 48, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <div style={{ borderRadius: 24, width: 48, height: 48, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <div style={{ borderRadius: 24, width: 48, height: 48, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <div style={{ borderRadius: 24, width: 48, height: 48, marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
      </div>
    </main>

    <style jsx>{`
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
