// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <header style={{ padding: '10px', background: '#000', color: '#fff' }}>
          <h2>The Sad Station</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
