import 'bootstrap/dist/css/bootstrap.min.css'

const ChessBoard = () => {

  return(
    <div className='container'>
      <LineWhite/>
      <BlackLine/>
      <LineWhite/>
      <BlackLine/>
      <LineWhite/>
      <BlackLine/>
      <LineWhite/>
      <BlackLine/>
    </div>
  )
}

const LineWhite = () => {
  let line = []
  
  for (let i = 0; i < 8; i++){
    line.push({
      color : (i % 2 == 0)? 'white' : 'black',
      fileNr : i
    })
  }

  return(
    <div className='row'>
      {
        line.map((tile) => (
          <ChessFile key={tile.fileNr} tile={tile}/>
        ))
      }
    </div>
  )
}

const BlackLine = () => {
  let line = []
  
  for (let i = 0; i < 8; i++){
    line.push({
      color : (i % 2 == 0)? 'black' : 'white',
      fileNr : i
    })
  }

  return(
    <div className='row'>
      {
        line.map((tile) => (
          <ChessFile key={tile.fileNr} tile={tile}/>
        ))
      }
    </div>
  )
}



const ChessFile = (props) => {
  return(
    <div className={getFileClass(props)}>
      {props.tile.color}
    </div>
  )
}

const getFileClass = (tile) => {
  console.log(tile.color);
  if (tile.color === 'white') return 'col container-sm bg-light' 
  return 'col container-sm bg-dark'
}

const App = () => {
  return (
    <div className="App container-flex">
      <h1 className='container-sm text-center'>Chess</h1>
      <ChessBoard />
    </div>
  )
}

export default App
