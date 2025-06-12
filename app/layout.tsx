// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>YES! Idiomas</title>
        <meta name="description" content="Falar inglês é falar com o mundo" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
