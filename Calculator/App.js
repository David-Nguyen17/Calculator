/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from "react-native";
import styles from "./style.js";
const buttonNumberInput = [
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "x"],
  ["1", "2", "3", "+"],
  [".", "0", "=", "-"]
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paremeter_1: "",
      paremeter_2: "",
      paremeter_3: "",
      kindOfButton: "",
      makeOperation: "0"
    };
  }
  _onChangeTextRow_1 = rowInputOne => {
    this.setState({ paremeter_1: rowInputOne });
  };
  _onChangeTextRow_2 = rowInputTwo => {
    this.setState({ paremeter_2: rowInputTwo });
  };

  _renderButton() {
    let views = [];
    for (let i = 0; i < 4; i++) {
      let inputNew = [];
      for (let j = 0; j < 4; j++) {
        inputNew.push(
          <TouchableHighlight
            onPress={() => this._checkOperator(buttonNumberInput[i][j])}
            style={styles.number}
          >
            <Text style={styles.font}>{buttonNumberInput[i][j]} </Text>
          </TouchableHighlight>
        );
      }
      views.push(<View style={styles.buttonNumber}>{inputNew}</View>);
    }
    return views;
  }

  _checkOperator(text) {
    if (text === "+" || text === "-" || text === "x" || text === "÷") {
      return this.setState({ makeOperation: "1", kindOfButton: text });
    } else if (text === "=") {
      if (this.state.kindOfButton === "+") {
        this.setState({
          paremeter_3:
            parseFloat(this.state.paremeter_1) +
            parseFloat(this.state.paremeter_2),
          paremeter_1:
            parseFloat(this.state.paremeter_1) +
            parseFloat(this.state.paremeter_2),
          makeOperation: "1",
          kindOfButton: "",
          paremeter_2: ""
        });
        return this.state.paremeter_3;
      } else if (this.state.kindOfButton === "-") {
        this.setState({
          paremeter_3:
            parseFloat(this.state.paremeter_1) -
            parseFloat(this.state.paremeter_2),
          paremeter_1:
            parseFloat(this.state.paremeter_1) -
            parseFloat(this.state.paremeter_2),
          paremeter_2: "",
          makeOperation: "1",
          kindOfButton: ""
        });
        return this.state.paremeter_3;
      } else if (this.state.kindOfButton === "÷") {
        this.setState({
          paremeter_3:
            parseFloat(this.state.paremeter_2) === 0
              ? "ERROR"
              : parseFloat(this.state.paremeter_1) /
                parseFloat(this.state.paremeter_2),
          paremeter_1:
            parseFloat(this.state.paremeter_2) === 0
              ? "ERROR"
              : parseFloat(this.state.paremeter_1) /
                parseFloat(this.state.paremeter_2),
          paremeter_2: "",
          makeOperation: "1",
          kindOfButton: ""
        });
        return this.state.paremeter_3;
      } else if (this.state.kindOfButton === "x") {
        this.setState({
          paremeter_3:
            parseFloat(this.state.paremeter_1) *
            parseFloat(this.state.paremeter_2),
          paremeter_1:
            parseFloat(this.state.paremeter_1) *
            parseFloat(this.state.paremeter_2),
          paremeter_2: "",
          makeOperation: "1",
          kindOfButton: ""
        });
        return this.state.paremeter_3;
      }
      return 0;
    } else if (this.state.makeOperation === "0") {
      return this.setState({
        makeOperation: "0",
        paremeter_1: this.state.paremeter_1 + text
      });
    } else if (this.state.makeOperation === "1") {
      return this.setState({
        paremeter_2: this.state.paremeter_2 + text
      });
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerInput}>
          <View style={styles.viewInput}>
            <TextInput
              onChangeText={this._onChangeTextRow_1}
              style={styles.input}
            >
              {this.state.paremeter_1}
            </TextInput>
          </View>
          <View style={styles.viewInput}>
            <TextInput
              onChangeText={this._onChangeTextRow_2}
              style={styles.input}
            >
              {this.state.paremeter_2}
            </TextInput>
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.input}>
              {this.state.paremeter_1 +
                this.state.kindOfButton +
                this.state.paremeter_2 +
                ""}
            </Text>
          </View>
        </View>
        <View style={styles.containerOutput}>
          <Text style={styles.result}>{this.state.paremeter_3} </Text>
        </View>

        <View style={styles.containerButtonNumber}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row", borderWidth: 1 }}>
              <View style={styles.addMargin}>
                <TouchableHighlight
                  onPress={() =>
                    this.setState({
                      paremeter_1: "",
                      paremeter_2: "",
                      paremeter_3: "",
                      kindOfButton: "",
                      makeOperation: "0"
                    })
                  }
                  style={styles.clear_Del}
                >
                  <Text style={styles.font}>CLEAR</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.addMargin}>
                <TouchableHighlight
                  onPress={() =>
                    this.state.makeOperation === "0"
                      ? this.setState({
                          paremeter_1: this.state.paremeter_1.substr(
                            0,
                            this.state.paremeter_1.length - 1
                          )
                        })
                      : this.setState({
                          paremeter_2: this.state.paremeter_2.substr(
                            0,
                            this.state.paremeter_2.length - 1
                          )
                        })
                  }
                >
                  <Text style={styles.font}>DEL</Text>
                </TouchableHighlight>
              </View>
            </View>
            {this._renderButton()}
          </View>
        </View>
      </View>
    );
  }
}
