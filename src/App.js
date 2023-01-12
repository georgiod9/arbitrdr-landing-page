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
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='logo-div' id='logo' >
        <img className='logo' src={logo}></img>
      </div>

      <section>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
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
                <img className='percent-sizing percent-positioning' style={{ position: 'absolute'}} src={percent}></img>
              </div>

              <img className="comingsoon-sizing" src={coming_soon}></img>
            </div>

          </div>

        </div>
      </section>

      <section>
        <img className='section2-text-sizing' src={section2_text}></img>
      </section>

      <section>
        <img className='section3-image-sizing' src={section3_image}></img>
        <div style={{ position: 'relative', width: '90vw' }}>
          <img style={{ position: 'absolute' }} className='section3-text-sizing section3-text-positioning' src={section3_text}></img>

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
