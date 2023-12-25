
import { Fragment } from 'react';
import Card from './Card.js'
import Head from './Head.js';
import classes from './Form.module.css'
const Form = (props) => {
    return (
        <Fragment>
            <Card>
                <form className={classes.form}>
                    <Head />

                    <div className={classes.inputs}>
                        <input className={classes.valueinput} placeholder="work with your email address" />
                    </div>
                    <div className={classes.button}>
                        <button className={classes.btn}>Continue</button>
                    </div>
                    <div className={classes.text}>
                        <p>Need help with logging in or signing up?</p>
                        <span>Read our Privacy Statement</span>
                    </div>
                </form>


            </Card>



        </Fragment>
    );
};

export default Form;
