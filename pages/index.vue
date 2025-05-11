<template>
    <div>
      <section class="main-hero">
        <div class="hero-overlay"></div>
        <img src="/assets/img/logo-shadow.png" alt="KTEQ Main Logo" class="main-logo" />
        <div class="donate-wrapper">
          <a
            href="https://give.sdsmt.edu/campaigns/kteq"
            class="donate-button"
            target="_blank"
            rel="noopener"
          >
            Donate to KTEQ
          </a>
        </div>
      </section>
  
      <section class="content-section">
        <h2>Show Schedule</h2>
        <p>KTEQ's programming is largely automated during the summer months when most students are off campus. If you're interested in hosting shows during the summer, or have any programming suggestions feel free to <a href="mailto:kteq@mines.sdsmt.edu">reach out</a>.</p>
        <iframe
          src="https://www.google.com/calendar/embed?showTitle=0&amp;mode=WEEK&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=kteq%40mines.sdsmt.edu&amp;color=%23333333&amp;ctz=America%2FDenver"
          width="100%"
          height="600"
          style="border: 0"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </section>
  
      <section class="content-section">
        <h2>About KTEQ</h2>
        <p>KTEQ-FM 91.3 is the non-commercial educational radio station of the South Dakota School of Mines & Technology. Operated by students and community volunteers, KTEQ has been a cultural voice in Rapid City since 1971.</p>
        <p>You can stream online, tune in locally, or get involved as a DJ, engineer, or volunteer.</p>
      </section>
    </div>
  </template>
  
  <style scoped>
  .main-hero {
    position: relative;
    text-align: center;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/assets/img/header-bg.png');
    background-size: cover;
    background-position: center;
    color: #fff;
    overflow: hidden;
    z-index: 1;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
  
  .main-logo {
    height: 60%;
    width: auto;
    max-height: 180px;
    position: relative;
    z-index: 1;
  }
  
  .donate-wrapper {
    margin-top: 1rem;
    z-index: 1;
    position: relative;
  }
  
  .donate-button {
    background-color: #fceb00;
    color: #000;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    border-radius: 9999px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .donate-button:hover {
    background-color: #e6d800;
  }
  
  .content-section {
    position: relative;
    z-index: 2;
    padding: 2rem;
    color: #fff;
  }
  </style>
  