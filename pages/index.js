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
