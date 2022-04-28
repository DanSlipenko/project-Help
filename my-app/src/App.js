
import './App.scss';
import Navbar from './compontents/header/Navbar'
import Main from './compontents/main/Main'
import Ministries from './compontents/ministries/Ministries'
import Comparison from './compontents/comparison/Comparison'
import Connect from './compontents/connect/Connect'
import About from './compontents/about/About'
import Footer from './compontents/footer/Footer'


function App() {
  return (
    <>
      <div className='Wrapper'>
        <Navbar />
        <Main />
      </div>
      <Ministries />
      <Comparison />
      <Connect />
      <About />
      <Footer />
    </>
  );
}

export default App;
