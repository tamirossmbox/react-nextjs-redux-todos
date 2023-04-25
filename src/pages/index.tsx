import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TodoList from '@/components/TodoList'
import Form from '@/components/form/Form'
import Filter from '@/components/filter/Filter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="React + Redux + next.js todo demo app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>React + Next.js + Redux Todos </h2>
        <Form />
        <Filter />
        <TodoList />
      </main>
    </>
  )
}
