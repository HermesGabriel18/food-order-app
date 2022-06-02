import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

import CartProvider from './store/CartProvider';

function App() {
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart((prevState) => !prevState);
    };

    return (
        <CartProvider>
            {showCart && <Cart onClose={toggleCart} />}
            <Header toggleCart={toggleCart} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
