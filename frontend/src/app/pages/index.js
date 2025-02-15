import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TEDxBBAU - Ideas Worth Spreading</title>
        <meta name="description" content="Official TEDxBBAU Website" />
      </Head>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1>Welcome to TEDxBBAU</h1>
          <p>Ideas Worth Spreading at Babasaheb Bhimrao Ambedkar University</p>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About TEDxBBAU</h2>
          <p>
            TEDxBBAU is an independently organized TED event that brings together
            innovative minds, speakers, and thinkers to inspire and ignite change.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <ul>
            <li>🔴 TEDxBBAU 2025 - Coming Soon!</li>
            <li>🗣 Speaker Sessions</li>
            <li>🎤 Panel Discussions</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 TEDxBBAU | All Rights Reserved</p>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .container { max-width: 800px; margin: auto; text-align: center; padding: 20px; }
        .hero { background: #e62b1e; color: white; padding: 50px 20px; }
        .hero .btn { background: white; color: #e62b1e; padding: 10px 20px; text-decoration: none; }
        .about, .events { padding: 40px 20px; }
        .events ul { list-style: none; padding: 0; }
        .footer { background: #111; color: white; padding: 20px; }
      `}</style>
    </div>
  );
}
