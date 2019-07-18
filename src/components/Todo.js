import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import PropTypes from "prop-types";

export default class App extends Component {
  static defaultProps = {
    title: "Todo Padrão"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  }
});
