import { Fragment } from 'react';

import classes from './Header.module.css';
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderButton/HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React meals</h1>
                <HeaderCartButton onClick={props.toggleCart}>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full a delicious food' />
            </div>
        </Fragment>
    );
};

export default Header;
