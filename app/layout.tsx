import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--x4v7-font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--x4v7-font-body',
  display: 'swap',
})

const SITE_URL = 'https://stake-casino.example.com'

export const metadata: Metadata = {
  title: 'Stake Casino — официальный сайт и рабочее зеркало | Стейк казино регистрация',
  description:
    'Stake casino зеркало и официальный сайт: как войти, пройти регистрацию и играть онлайн. Актуальное стейк казино зеркало, бонусы и пошаговая инструкция для игроков.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`x4v7-root ${playfair.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Stake Casino — официальный сайт и рабочее зеркало | Стейк казино регистрация
        </title>
        <meta
          name="description"
          content="Stake casino зеркало и официальный сайт: как войти, пройти регистрацию и играть онлайн. Актуальное стейк казино зеркало, бонусы и пошаговая инструкция для игроков."
        />
        <meta
          name="keywords"
          content="stake casino, stake зеркало, stake casino зеркало, stake casino официальный сайт, стейк зеркало, стейк казино зеркало, стейк казино играть, стейк казино онлайн, стейк казино официальный, стейк казино официальный сайт, стейк казино регистрация, стейк казино сайт, stake casino регистрация, stake казино, stake казино зеркало, стейк казино"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#0b0d10" />
        <meta name="color-scheme" content="dark" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Stake Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="Stake Casino — официальный сайт и рабочее зеркало"
        />
        <meta
          property="og:description"
          content="Stake casino зеркало и официальный сайт: как войти, пройти регистрацию и играть онлайн. Актуальное стейк казино зеркало и бонусы."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Stake Casino — официальный сайт и рабочее зеркало"
        />
        <meta
          name="twitter:description"
          content="Stake casino зеркало и официальный сайт: как войти, пройти регистрацию и играть онлайн."
        />

        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="x4v7-body">{children}</body>
    </html>
  )
}
