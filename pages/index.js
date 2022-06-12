import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Фамильный домен Попывановых</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Добро пожаловать!</h1>
        <p className="description">
          Домен <code>popyvanov.ru</code> занят. </br>Для того, чтобы получить домены типа  <code>XXX.popyvanov.ru</code> или почты формата <code>XXX@popyvanov.ru</code>
    </br>свяжитесь с <a href="mailto:mail@htmlacademy.ru">владельцем домена</a>
        </p>
     <ul>
     <li><a href="https://s.popyvanov.ru/blog">https://s.popyvanov.ru/blog</a> - персональный блог</li>
     <li><a href="https://s.popyvanov.ru">https://s.popyvanov.ru</a> - визитка</li>
     <li><a href="https://s.popyvanov.ru/dg">https://s.popyvanov.ru/dg</a> - цифровой сад</li>
   </ul>
      </main>

      <Footer />
    </div>
  )
}
