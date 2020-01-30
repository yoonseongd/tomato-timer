import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import reducer from "./reducer";

import { createStore } from "redux";
//리듀서가 exported 된 후에 스토어를 생성할거야
//스토어는 리덕스에서 와.

import { Provider } from "react-redux";
//우리의 리듀서, 앱의state를 복사해와야해
//즉 우리의 컴포넌트로 복사해와야해
//방법으로 provider를 쓰면된다.

let store = createStore(reducer);

//console.log(store.getstate);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
