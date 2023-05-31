import './Header.css'
import Boton from '../Boton/Boton'

function Header () {
    return <section className="header">
        <div className='container__logo__boton'>
        <a href='#'><img src="/img/logo.png" alt="Logo ANIMEFLIX" className='logo__header'/></a>
        <Boton />
        </div>        
    </section>
}

export default Header