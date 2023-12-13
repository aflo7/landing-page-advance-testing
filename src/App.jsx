import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function App() {
  
  return (
    <>
      <nav>
        <img src="https://www.advancetesting.com/wp-content/uploads/2020/01/advancelogo_white_transparent-small-2.png" />
        <GiHamburgerMenu
          style={{ color: 'rgb(237,91,37)', fontSize: '1.6rem' }}
        />
      </nav>
      <main>
        <div className="main-inner">
          <h1>Join Our Team</h1>
          <button id="learnMoreBtn">Learn More</button>
        </div>
      </main>
      <div
        style={{
          display: 'flex',
          gap: '40px',
          backgroundColor: 'rgb(237, 91, 37)',
          flexDirection: 'column',
          padding: '20px'
        }}
      >
        <h2 className="construction-h2">
          Construction Materials Testing + Inspection
        </h2>
        <div className="divider-text-div">
          <div>Buildings</div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ backgroundColor: 'white' }}
          />

          <div>Highways</div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ backgroundColor: 'white' }}
          />

          <div>Bridges</div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ backgroundColor: 'white' }}
          />

          <div>Airports</div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ backgroundColor: 'white' }}
          />

          <div>Tunnels</div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ backgroundColor: 'white' }}
          />

          <div>Energy</div>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgb(30, 54, 88)', padding: '20px' }}>
        <h2 className="our-promise-h2">Our Promise</h2>
        <p style={{ color: 'white' }}>
          Advance Testing treats their clients' interests as their own and makes
          the service feel like a partnership and a commitment to your success.
        </p>
        <div className="chevron-wrapper">
          <div>
            <ChevronRightIcon
              style={{
                backgroundColor: 'white',
                borderRadius: '1000px',
                color: 'darkorange'
              }}
            />
            <div style={{ color: 'white' }}>
              A team dedicated to your project completing on time.
            </div>
          </div>
          <div>
            <ChevronRightIcon
              style={{
                backgroundColor: 'white',
                borderRadius: '1000px',
                color: 'darkorange'
              }}
            />
            <div style={{ color: 'white' }}>
              Industry experts providing technical guidance and project support.
            </div>
          </div>
          <div>
            <ChevronRightIcon
              style={{
                backgroundColor: 'white',
                borderRadius: '1000px',
                color: 'darkorange'
              }}
            />
            <div style={{ color: 'white' }}>
              Solutions to construction challenges and obstacles.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
