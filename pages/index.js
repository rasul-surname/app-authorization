import React from "react";
import 'antd/dist/antd.css';
import FormComponent from "../client/components/ui/Form/Form";
import {Provider} from "react-redux";
import store from "../client/redux/redux-store";
import Link from 'next/link';
import classes from './index.module.css';

const Home = () => {

  return (
      <Provider store={store}>
          <div className={classes.container}>

              <FormComponent state={store.getState().formPage} />
              <h1 className="title">
                  Read{' '}
                  <Link href="/feature/home">
                      <a>home page!</a>
                  </Link>
              </h1>

          </div>
      </Provider>
  )
}

export default Home;