import './navbar.css'
import './button/button'

const navbar = (props) => {
    console.log(props)
return (
    <nav className='navbar'>
        <h1 style={{ color: props.colorTitle}}>MI PAGINA</h1>
        <button text='CATALOGO'/>
        <button text='QUIENES SOMOS'/>
        <button/>
    </nav>
)    


}



export default navbar