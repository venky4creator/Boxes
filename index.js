const Box = props => {
  //  Write your code here.
  const {className, boxText} = props
  return (
    <div className={className}>
      <p className={boxText}> {boxText} </p>
    </div>
  )
}

const element = (
  <div className='boxes-bg-con'>
    <h1 className='box-heading'>Boxes</h1>
    <div className='box-con'>
      <Box className='small' boxText='Small' />
      <Box className='medium' boxText='Medium' />
      <Box className='large' boxText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
