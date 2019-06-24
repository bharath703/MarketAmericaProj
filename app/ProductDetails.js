import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { getProductDetails } from "./BusinessService";
import { Actions } from "react-native-router-flux";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: {},
      isLoading: true
    };
  }


  componentDidMount() {
    getProductDetails("en_US", "abc1234567", String(this.props.productId))
      .then((productDetails) => this.setState({ productDetails, isLoading: false }))
      .catch(error => console.log(error));
  }

  render() {
    const { productDetails, isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator size="large" /> :
          <ScrollView>
            <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
              <Text style={styles.brandContainer}>{this.state.productDetails.brand}</Text>
              <Image style={styles.productImg} source={{ uri: this.state.productDetails.image.sizes[0].url }} />
              <Text style={styles.name}>{this.state.productDetails.name}</Text>
              <Text style={styles.price}>${this.state.productDetails.options[0].price} </Text>
              <Text style={styles.description}>
                {this.state.productDetails.shortDescription}
              </Text>
            </View>
            <Button
              onPress={() => Actions.push("BulbNative")}
              title="Native Bulb"
              color="#841584"
              accessibilityLabel="Native Implementation"
            />
          </ScrollView>}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "center"
  },
  productContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 16,
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: 'bold'
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: "#696969",
  },
});