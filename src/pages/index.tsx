import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import { useBusinesses } from '@/hooks/useBusinesses'
import { Footer } from '@/components/Footer'

const Home: NextPage = () => {
  const { businesses, isLoading, isError } = useBusinesses()
  return (
    <>
      <Head>
        <title>GastroBudget</title>
        <meta name="description" content="Restaurant finder Web application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section
          className={`${styles.hero} ${styles.textShadow} h-48 flex flex-col items-center justify-center gap-3 border`}
        >
          <h1 className="text-3xl font-cursive">GastroBudget</h1>
          <p>Find your delights.</p>
        </section>
        <Form />
        <section>
          {isLoading && <p>Loading...</p>}
          {businesses.length > 0 && (
            <pre>{JSON.stringify(businesses, null, 4)}</pre>
          )}
          {isError && <p>An error has occurred.</p>}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
