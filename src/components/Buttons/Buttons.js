import './Buttons.css'

const PrimaryButtons = (props) => {
  return (
    <div className='button primary-btn'>{props.children}</div>
  )
}

const SeconderyButtons = (props) => {
  return (
    <div className='button secondery-btn'>{props.children}</div>
  )
}

export default PrimaryButtons
export {SeconderyButtons}