import React from "react";
import FormComponent from "../client/components/ui/Form/Form";
import {Provider} from "react-redux";
import store from "../client/redux/redux-store";

const Home = () => {

  return (
    <>
      <Provider store={store}>
          <FormComponent state={store.getState().formPage} />
      </Provider>
    </>
  )
}

export default Home;