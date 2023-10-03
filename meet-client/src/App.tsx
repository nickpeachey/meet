import CookieConsent from 'react-cookie-consent';
import './App.css';

function App() {
  return (
    <>
      fdsfds
      <div className='App'>
        <CookieConsent
          location='bottom'
          buttonText='Sure man!!'
          cookieName='meet-ackcook-ban'
          style={{ background: '#2B373B' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{' '}
          <span style={{ fontSize: '10px' }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>
      </div>
    </>
  );
}

export default App;
