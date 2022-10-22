import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import { useLazyBusinessesSearchQuery } from '@/store/slices/apiSlice'

const Home: NextPage = () => {
  const [_, result] = useLazyBusinessesSearchQuery()
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
          className={`${styles.hero} ${styles.textShadow} h-48 flex flex-col items-center justify-center gap-3`}
        >
          <h1 className="text-3xl font-cursive">GastroBudget</h1>
          <p>Find your delights.</p>
        </section>
        <Form />
        {result.isSuccess && <pre>{JSON.stringify(result.data, null, 4)}</pre>}
        {result.isError && <p>An error has occurred.</p>}
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Home
