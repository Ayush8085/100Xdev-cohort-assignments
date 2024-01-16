import Card from './components/Card'

function App() {

  return (
    <div className='wrapper'>
      <Card name={'Ayush Kumar Tiwari'} description={'A passionate developer!'} social={['LinkedIn', 'Twitter']} interests={['Dev', 'DSA', 'Open source']} />
    </div>
  )
}

export default App;
