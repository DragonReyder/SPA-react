import { CartItem } from './CartItem';

function CartList({ catalog = [] }) {
    return (
        <div className='list'>
            {catalog.map((el) => (
                <CartItem key={el.idCategory} {...el} />
            ))}
        </div>
    )
}
export { CartList };