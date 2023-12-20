
import { Fragment } from 'react';
import img from './image/form.PNG';
import classes from './Head.module.css'
const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <img src={img} alt=""/>

            </div>



        </Fragment>
    );
};

export default Head;
