import cartImg from './assets/cart.svg'

const CartWidget = () => {
    return (
        <button>
            <img src={'public\images\107831.png'} alt='cart-widget'/>
            <img src={cartImg} alt='cart-widget-import'/>
            15
        </button>
    )
}

export default CartWidget