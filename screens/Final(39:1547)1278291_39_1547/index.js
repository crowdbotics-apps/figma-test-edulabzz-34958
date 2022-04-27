import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4581/776e/9852436000479d88b870c689835ac51a"
        }}
        style={styles.ImageBackground_39_1548}
      />
      <View style={styles.View_39_1565}>
        <View style={styles.View_39_1555}>
          <View style={styles.View_39_1556}>
            <Text style={styles.Text_39_1556}>Ir para próxima aula</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_39_1563}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_42818"))
          }
        >
          <View style={styles.View_39_1564}>
            <Text style={styles.Text_39_1564}>Refazer lição</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_39_1568}>
        <View style={styles.View_39_1557}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4898/0639/c1f28068d9a288856390a2622d89929c"
            }}
            style={styles.ImageBackground_39_1558}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4544/a968/0e2ccf1d4a293abe7ca326c1d3750176"
            }}
            style={styles.ImageBackground_39_1559}
          />
        </View>
        <View style={styles.View_39_1566}>
          <View style={styles.View_39_1554}>
            <Text style={styles.Text_39_1554}>
              Parabéns, você concluiu a primeira aula.
            </Text>
          </View>
          <View style={styles.View_39_1560}>
            <Text style={styles.Text_39_1560}>
              Você ganhou 100 pontos pelas alternativas marcadas: Quizz Múltipla
              escolha Verdadeiro ou falso
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_39_1548: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_39_1565: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("103%")
  },
  View_39_1555: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 1, 27, 1)"
  },
  View_39_1556: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_39_1556: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_39_1563: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 1, 27, 0.10000000149011612)"
  },
  View_39_1564: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_39_1564: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_1568: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("34%")
  },
  View_39_1557: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  ImageBackground_39_1558: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_39_1559: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_39_1566: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  View_39_1554: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_39_1554: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_1560: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_39_1560: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
