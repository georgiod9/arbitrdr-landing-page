import bg from './assets/bg.png';
import logo from './assets/logo.png';
import monitor from './assets/monitor.png';
import section1_text from './assets/section1-text.png'
import loading from './assets/loading.png';
import percent from './assets/percent.png';
import coming_soon from './assets/coming_soon.png';
import section2_text from './assets/section2-text.png';
import section3_image from './assets/section3-image.png';
import section3_text from './assets/section3-text.png';
import section3_chart from './assets/section3-chart.png';
import section4_text from './assets/section4-text.png';
import section3_part1 from './assets/section3-text1.png';
import section3_part2 from './assets/section3-text2.png';

import './App.css';

function App() {
  return (
    <div className="App">

      <div className='logo-div' id='logo' >
        <img className='logo' src={logo}></img>


      </div>

      <section className='section1-positioning'>
        <div className='flex-direction' style={{
          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',
          columnGap: '2rem'
        }}>
          <img className='monitor' src={monitor}></img>


          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
            <img className='section1-text' src={section1_text}></img>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>

              <div style={{ position: 'relative' }}>
                <img className='loading-sizing' style={{ position: 'relative' }} src={loading}></img>
                <img className='percent-sizing percent-positioning' style={{ position: 'absolute' }} src={percent}></img>
              </div>

              <img className="comingsoon-sizing" src={coming_soon}></img>
            </div>

          </div>

        </div>
      </section>

      <section className='section2-margin'>
        <div className='section2-direction' style={{
          display: 'flex',

          justifyContent: 'space-evenly',
          alignContent: 'center',
          alignItems: 'center',
          width: '100vw'
        }}>
          <div className='section2-paragraph-sizing'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              rowGap: '0rem'
            }}>
            <h1 className='text-blue'>OUR MISSION</h1>
            <p>Our aim is to help investors generate passive income through our tested arbitrage technology, packaged in an easy to use platform.</p>
            <p>We want to help bridge the gap between the world of cryptocurrency investing and traditional arbitrage. Allowing everyone to reap the benefits of Arbitrdr in the simplest way possible.</p>
          </div>


          <div className='section2-paragraph-sizing'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <h1 className='text-blue'>OUR VISION</h1>
            <p>We believe there is no need to invest
              hundreds of thousands of dollars in hedge
              funds, instead, through Arbitrdr we will
              make quanitative trading accessible to all,
              and strive to build more products to
              reflect the market's needs.</p>
            <p>Forward-thinking, we see ourselves as
              true visionaries in the world of crypto
              trading and we will continue to develop
              smart trading products to help our users
              generate maximum returns.
            </p>
          </div>
        </div>

      </section>

      <section className='section3-positioning'>
        <div className='section3-container'>
          <img className='section3-1-size' src={section3_part1}></img>
          <img className='section3-2-size' src={section3_part2}></img>

        </div>
        <div style={{ position: 'relative', width: '90vw', lineHeight: '1rem' }}>

          <div style={{ textAlign: 'left', margin: 'auto 1rem', width: '100vw' }}>
            <h2><span style={{ fontWeight: 'lighter' }}>THROUGH PREMIUM</span></h2>
            <h1>STATE-OF-THE-ART TECHNOLOGY</h1>
            <h2><span style={{ fontWeight: 'lighter' }}>CONSISTING OF AN</span></h2>
            <h1>AUTOMATED ALGORITHM</h1>
            <div style={{ lineHeight: '1.2rem', marginTop: '2.5rem' }}>
              <p>Arbitrdr provides users with an <br />
                exceptional trading platform involving an <br />
                arbitrage approach for your Crypto trading journey.
              </p>
              <p>Fully automated, our platform does all the <br />
                hard work on your behalf, seeking out the <br />
                best possible arbitrage opportunities <br />
                available in the Cryptocurreny market.
              </p>
            </div>

          </div>



          <img style={{ position: 'absolute' }} className='section3-chart-sizing section3-chart-positioning' src={section3_chart}></img>

        </div>
      </section>

      <section>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}>
          <img className='section4-text-sizing section4-text-positioning' src={section4_text}></img>

        </div>
      </section>


    </div>
  );
}

export default App;
