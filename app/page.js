// app/page.js

export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>স্বাগতম, The Sad Station-এ!</h1>
      <p>এটি আমার নিজের তৈরি করা ওয়েবসাইট।</p>
      <nav>
        <a href="/music" style={{ marginRight: '10px' }}>মিউজিক</a>
        <a href="/blog">ব্লগ</a>
      </nav>
    </main>
  );
}
