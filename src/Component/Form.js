
import { Fragment } from 'react';
import Card from './Card.js'
import Head from './Head.js';
import classes from './Form.module.css'
const Form = (props) => {
    return (
        <Fragment>
            <Card>
                <Head />
                <form>
                    <div className={classes.inputs}>
                        <input className={classes.valueinput} placeholder="Username" />
                    </div>

                </form>


            </Card>



        </Fragment>
            );
        };
        
        export default Form;
