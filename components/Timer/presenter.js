import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  time -= minutes * 60;
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

class Timer extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    //새로운props를 얻을때마다 실행
    const currentProps = this.props;

    // console.log(
    //   `The current props are : ${currentProps.isPlaying} and the new ones are : ${nextProps.isPlaying}`
    // );

    if (!currentProps.isPlaying && nextProps.isPlaying) {
      //start the interval
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      // stop the interval
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    //console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>

        <View style={styles.lower}>
          {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
          {isPlaying && (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ce0b24"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 80,
    fontWeight: "100"
  }
});

export default Timer;
