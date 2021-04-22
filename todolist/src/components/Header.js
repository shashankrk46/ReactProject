import Button from '../components/Button'


const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} onClick={onAdd} />

    </header>


  )
}

Header.defaultProps = {
  title: "Task tracker",
}


export default Header
