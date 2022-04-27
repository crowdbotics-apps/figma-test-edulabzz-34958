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
      <TouchableOpacity
        style={styles.TouchableOpacity_23_3771}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_4238"))
        }
      >
        <View style={styles.View_23_3772} />
        <View style={styles.View_23_3773}>
          <View style={styles.View_23_3774}>
            <Text style={styles.Text_23_3774}>
              Lição 3 - Desenvolvimento pessoal
            </Text>
          </View>
          <View style={styles.View_23_3775}>
            <Text style={styles.Text_23_3775}>chevron-down</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_29_4237}>
        <View style={styles.View_29_4236}>
          <View style={styles.View_23_3765}>
            <View style={styles.View_23_3766}>
              <Text style={styles.Text_23_3766}>Lição 2 de 4</Text>
            </View>
            <View style={styles.View_23_3767}>
              <Text style={styles.Text_23_3767}>
                Responsabilidade no trânsito{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_23_3768}>
            <View style={styles.View_23_3769}>
              <Text style={styles.Text_23_3769}>Leis de trânsito </Text>
            </View>
            <View style={styles.View_23_3770}>
              <Text style={styles.Text_23_3770}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant hac habitant malesuada cursus blandit, augue commodo
                sagittis elit justo sem congue dolor, orci senectus tempor
                vestibulum feugiat bibendum nibh. aliquam placerat amet tellus
                lacus elit nibh rhoncus iaculis ante, morbi suscipit
                pellentesque class libero interdum metus fames aliquet
                habitasse, fermentum enim urna inceptos ut suspendisse morbi
                auctor. cras sem tellus curabitur nec commodo ipsum proin
                molestie velit, class mauris cubilia lobortis integer tempus
                quam mattis, felis nam adipiscing commodo mauris venenatis
                bibendum risus.
              </Text>
            </View>
          </View>
          <View style={styles.View_23_3776} />
        </View>
        <View style={styles.View_29_4202}>
          <View style={styles.View_29_4203}>
            <View style={styles.View_29_4204}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baba/9bb9/96f0e44a4643d18244ecf65ad307bef1"
                }}
                style={styles.ImageBackground_29_4205}
              />
              <View style={styles.View_29_4206}>
                <Text style={styles.Text_29_4206}>
                  molestie odio id odio malesuada hendrerit nostra ante hac
                  elementum diam viverra.
                </Text>
              </View>
            </View>
            <View style={styles.View_29_4207}>
              <View style={styles.View_29_4208}>
                <Text style={styles.Text_29_4208}>Assessórios</Text>
              </View>
              <View style={styles.View_29_4209}>
                <Text style={styles.Text_29_4209}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_29_4210}>
            <View style={styles.View_29_4211}>
              <Text style={styles.Text_29_4211}>2. Lorem ipsum</Text>
            </View>
            <View style={styles.View_29_4212}>
              <Text style={styles.Text_29_4212}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant Lorem ipsum justo interdum molestie odio id odio
                malesuada hendrerit nostra, ante hac elementum diam viverra
                taciti duis purus leo purus dolor, nulla enim commodo phasellus
                praesent primis lacinia consectetur vehicula. metus semper
                blandit habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_29_4213}>
            <View style={styles.View_29_4214}>
              <View style={styles.View_29_4215}>
                <Text style={styles.Text_29_4215}>1. Lorem ipsum</Text>
              </View>
              <View style={styles.View_29_4216}>
                <Text style={styles.Text_29_4216}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_29_4217}>
              <View style={styles.View_29_4218}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4219}
                />
                <View style={styles.View_29_4220}>
                  <Text style={styles.Text_29_4220}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4221}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4222}
                />
                <View style={styles.View_29_4223}>
                  <Text style={styles.Text_29_4223}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4224}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4225}
                />
                <View style={styles.View_29_4226}>
                  <Text style={styles.Text_29_4226}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4227}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4228}
                />
                <View style={styles.View_29_4229}>
                  <Text style={styles.Text_29_4229}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4230}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4231}
                />
                <View style={styles.View_29_4232}>
                  <Text style={styles.Text_29_4232}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4233}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4234}
                />
                <View style={styles.View_29_4235}>
                  <Text style={styles.Text_29_4235}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_23_3877}>
          <View style={styles.View_23_3878}>
            <View style={styles.View_23_3879}>
              <View style={styles.View_23_3880} />
              <View style={styles.View_23_3881}>
                <View style={styles.View_I23_3881_8_1078} />
                <View style={styles.View_I23_3881_8_1079}>
                  <View style={styles.View_I23_3881_8_1080}>
                    <Text style={styles.Text_I23_3881_8_1080}>
                      O uso de celular aumenta em quantos porcento o risco de
                      sofrer um acidente de trânsito?
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I23_3881_8_1081}>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_I23_3881_8_1082}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("17_1692")
                      )
                    }
                  >
                    <View style={styles.View_I23_3881_8_1083} />
                    <View style={styles.View_I23_3881_8_1084}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e57/08e9/5c07d22bfac3a378b09d6f869ba45596"
                        }}
                        style={styles.ImageBackground_I23_3881_8_1085}
                      />
                      <View style={styles.View_I23_3881_8_1086}>
                        <Text style={styles.Text_I23_3881_8_1086}>400%</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.View_I23_3881_8_1087}>
                    <View style={styles.View_I23_3881_8_1088} />
                    <View style={styles.View_I23_3881_8_1089}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e57/08e9/5c07d22bfac3a378b09d6f869ba45596"
                        }}
                        style={styles.ImageBackground_I23_3881_8_1090}
                      />
                      <View style={styles.View_I23_3881_8_1091}>
                        <Text style={styles.Text_I23_3881_8_1091}>80%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I23_3881_8_1092}>
                    <View style={styles.View_I23_3881_8_1093} />
                    <View style={styles.View_I23_3881_8_1094}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e57/08e9/5c07d22bfac3a378b09d6f869ba45596"
                        }}
                        style={styles.ImageBackground_I23_3881_8_1095}
                      />
                      <View style={styles.View_I23_3881_8_1096}>
                        <Text style={styles.Text_I23_3881_8_1096}>200%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I23_3881_8_1097}>
                    <View style={styles.View_I23_3881_8_1098} />
                    <View style={styles.View_I23_3881_8_1099}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e57/08e9/5c07d22bfac3a378b09d6f869ba45596"
                        }}
                        style={styles.ImageBackground_I23_3881_8_1100}
                      />
                      <View style={styles.View_I23_3881_8_1101}>
                        <Text style={styles.Text_I23_3881_8_1101}>50%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3882}>
            <View style={styles.View_23_3883}>
              <View style={styles.View_23_3884}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a1/d9ee/0b4ff9b73cb0e624ff9eafdeb780c167"
                  }}
                  style={styles.ImageBackground_23_3885}
                />
                <View style={styles.View_23_3886}>
                  <Text style={styles.Text_23_3886}>Play</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_23_3887}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf1a/7757/6f23d694d0d8531b0e1897c2d63c5309"
                }}
                style={styles.ImageBackground_23_3888}
              />
              <View style={styles.View_23_3889}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b76d/121b/363ec7dc16920bdff73e8ca29eed730b"
                  }}
                  style={styles.ImageBackground_23_3890}
                />
                <View style={styles.View_23_3891}>
                  <Text style={styles.Text_23_3891}>Play</Text>
                </View>
              </View>
              <View style={styles.View_23_3892}>
                <Text style={styles.Text_23_3892}>
                  10 dicas de quem tem experiência no assunto
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3893}>
            <TouchableOpacity
              style={styles.TouchableOpacity_23_3894}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("23_3577"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1635/36ba/34218cdd2484d89eb4d83bfc3f16f12b"
                }}
                style={styles.ImageBackground_23_3895}
              />
              <View style={styles.View_23_3896}>
                <Text style={styles.Text_23_3896}>CHEVRON-LEFT</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.View_23_3897}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1635/36ba/34218cdd2484d89eb4d83bfc3f16f12b"
                }}
                style={styles.ImageBackground_23_3898}
              />
              <View style={styles.View_23_3899}>
                <Text style={styles.Text_23_3899}>chevron-right</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_23_3837}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("20_42818"))
        }
      >
        <View style={styles.View_23_3838} />
        <View style={styles.View_23_3839}>
          <View style={styles.View_23_3840}>
            <Text style={styles.Text_23_3840}>
              Lição 1 - iFood Decola: embarque no aprendizado
            </Text>
          </View>
          <View style={styles.View_23_3841}>
            <Text style={styles.Text_23_3841}>chevron-up</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_23_3842}>
        <View style={styles.View_23_3843} />
        <View style={styles.View_23_3844}>
          <View style={styles.View_23_3845}>
            <Text style={styles.Text_23_3845}>bars</Text>
          </View>
        </View>
        <View style={styles.View_23_3846}>
          <Text style={styles.Text_23_3846}>
            iFood Decola: embarque no aprendizado
          </Text>
        </View>
        <View style={styles.View_23_3847}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1f3/dd0c/61574d080cc747e58bdb5df6d048a838"
            }}
            style={styles.ImageBackground_23_3848}
          />
          <View style={styles.View_23_3849}>
            <Text style={styles.Text_23_3849}>times</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_35_5279}>
        <View style={styles.View_35_5280} />
        <View style={styles.View_35_5281}>
          <View style={styles.View_35_5282}>
            <View style={styles.View_35_5283}>
              <Text style={styles.Text_35_5283}>Lição 3 de 4</Text>
            </View>
            <View style={styles.View_35_5284}>
              <Text style={styles.Text_35_5284}>Desenvolvimento pessoal</Text>
            </View>
          </View>
          <View style={styles.View_35_5285}>
            <View style={styles.View_35_5286}>
              <View style={styles.View_35_5287}>
                <Text style={styles.Text_35_5287}>Ética profissional</Text>
              </View>
              <View style={styles.View_35_5288}>
                <Text style={styles.Text_35_5288}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5289}>
              <View style={styles.View_35_5290}>
                <View style={styles.View_35_5291}>
                  <Text style={styles.Text_35_5291}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5292}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5293}
                  />
                  <View style={styles.View_35_5294}>
                    <Text style={styles.Text_35_5294}>1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5295}>
                <View style={styles.View_35_5296}>
                  <Text style={styles.Text_35_5296}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5297}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5298}
                  />
                  <View style={styles.View_35_5299}>
                    <Text style={styles.Text_35_5299}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5300}>
                <View style={styles.View_35_5301}>
                  <Text style={styles.Text_35_5301}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5302}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5303}
                  />
                  <View style={styles.View_35_5304}>
                    <Text style={styles.Text_35_5304}>3</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5305}>
                <View style={styles.View_35_5306}>
                  <Text style={styles.Text_35_5306}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5307}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5308}
                  />
                  <View style={styles.View_35_5309}>
                    <Text style={styles.Text_35_5309}>4</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_35_5310}>
              <View style={styles.View_35_5311}>
                <Text style={styles.Text_35_5311}>Resolução de problemas</Text>
              </View>
              <View style={styles.View_35_5312}>
                <Text style={styles.Text_35_5312}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5313}>
              <View style={styles.View_35_5314}>
                <View style={styles.View_35_5315}>
                  <View style={styles.View_35_5316} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d2/9d88/35e0abd360d11d2e3796df331b345614"
                    }}
                    style={styles.ImageBackground_35_5317}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b8/18cb/10459a7057d972d21091f8c97ffac2cb"
                    }}
                    style={styles.ImageBackground_35_5318}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a5b/9cfb/18c3fbacf7742311be88de5bb8e4c430"
                    }}
                    style={styles.ImageBackground_35_5319}
                  />
                </View>
                <View style={styles.View_35_5320} />
              </View>
              <View style={styles.View_35_5321}>
                <View style={styles.View_35_5322}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829f/11d7/11063cd8a595947c631721f8acb503c5"
                    }}
                    style={styles.ImageBackground_35_5323}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bd/78f6/46ea9a46e5c3065ac186fe6f74d73fc9"
                  }}
                  style={styles.ImageBackground_35_5325}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4f/d6a9/18c9f4b08f6d343531f0eaaea025610b"
                  }}
                  style={styles.ImageBackground_35_5328}
                />
              </View>
              <View style={styles.View_35_5331}>
                <View style={styles.View_35_5332} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2715/05da/9d06ba0bfd00a93dee6c10a8b7c8ad2b"
                  }}
                  style={styles.ImageBackground_35_5333}
                />
                <View style={styles.View_35_5338}>
                  <Text style={styles.Text_35_5338}>2:50</Text>
                </View>
                <View style={styles.View_35_5339}>
                  <Text style={styles.Text_35_5339}>5:20</Text>
                </View>
                <View style={styles.View_35_5340} />
                <View style={styles.View_35_5341} />
              </View>
            </View>
            <View style={styles.View_35_5342}>
              <Text style={styles.Text_35_5342}>
                molestie odio id odio malesuada hendrerit nostra, ante hac
                elementum diam viverra taciti duis purus leo purus dolor, nulla
                enim commodo phasellus{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5343} />
        </View>
        <View style={styles.View_35_5344}>
          <TouchableOpacity
            style={styles.TouchableOpacity_35_5345}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("31_4522"))
            }
          />
          <View style={styles.View_35_5346}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501e/e426/b44f18f2cb69a4e9abc590d8b21d5efb"
              }}
              style={styles.ImageBackground_35_5347}
            />
          </View>
          <View style={styles.View_35_5351}>
            <View style={styles.View_35_5352}>
              <Text style={styles.Text_35_5352}>
                “ Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim”
              </Text>
            </View>
            <View style={styles.View_35_5353}>
              <Text style={styles.Text_35_5353}>- Sharon Salzberg</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_35_5354}>
          <View style={styles.View_35_5355}>
            <View style={styles.View_35_5356}>
              <Text style={styles.Text_35_5356}>Verdadeiro ou falso</Text>
            </View>
            <View style={styles.View_35_5357}>
              <Text style={styles.Text_35_5357}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5358}>
            <TouchableOpacity
              style={styles.TouchableOpacity_35_5359}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("31_4481"))
              }
            >
              <View style={styles.View_I35_5359_31_4477} />
              <View style={styles.View_I35_5359_31_4478}>
                <Text style={styles.Text_I35_5359_31_4478}>Verdadeiro</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_35_5360}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("31_4481"))
              }
            >
              <View style={styles.View_I35_5360_31_4477} />
              <View style={styles.View_I35_5360_31_4478}>
                <Text style={styles.Text_I35_5360_31_4478}>Falso</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_35_5361}>
          <View style={styles.View_35_5362}>
            <View style={styles.View_35_5363}>
              <Text style={styles.Text_35_5363}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_35_5364}>
              <Text style={styles.Text_35_5364}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5365}>
            <View style={styles.View_35_5366}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5367}
              />
              <View style={styles.View_35_5368}>
                <Text style={styles.Text_35_5368}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5369}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5370}
              />
              <View style={styles.View_35_5371}>
                <Text style={styles.Text_35_5371}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5372}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5373}
              />
              <View style={styles.View_35_5374}>
                <Text style={styles.Text_35_5374}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5375}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5376}
              />
              <View style={styles.View_35_5377}>
                <Text style={styles.Text_35_5377}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5378}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5379}
              />
              <View style={styles.View_35_5380}>
                <Text style={styles.Text_35_5380}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5381}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5382}
              />
              <View style={styles.View_35_5383}>
                <Text style={styles.Text_35_5383}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_23_3850}>
        <View style={styles.View_23_3851} />
        <View style={styles.View_23_3852} />
      </View>
      <View style={styles.View_35_5522}>
        <View style={styles.View_35_5523}>
          <View style={styles.View_35_5524}>
            <Text style={styles.Text_35_5524}>Lição 1 de 4</Text>
          </View>
          <View style={styles.View_35_5525}>
            <Text style={styles.Text_35_5525}>
              iFood Decola: embarque no aprendizado
            </Text>
          </View>
        </View>
        <View style={styles.View_35_5526}>
          <View style={styles.View_35_5527}>
            <View style={styles.View_35_5528}>
              <View style={styles.View_35_5529}>
                <View style={styles.View_35_5530} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d2/9d88/35e0abd360d11d2e3796df331b345614"
                  }}
                  style={styles.ImageBackground_35_5531}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b8/18cb/10459a7057d972d21091f8c97ffac2cb"
                  }}
                  style={styles.ImageBackground_35_5532}
                />
              </View>
              <View style={styles.View_35_5533} />
            </View>
            <View style={styles.View_35_5534}>
              <View style={styles.View_35_5535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829f/11d7/11063cd8a595947c631721f8acb503c5"
                  }}
                  style={styles.ImageBackground_35_5536}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bd/78f6/46ea9a46e5c3065ac186fe6f74d73fc9"
                }}
                style={styles.ImageBackground_35_5538}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4f/d6a9/18c9f4b08f6d343531f0eaaea025610b"
                }}
                style={styles.ImageBackground_35_5541}
              />
            </View>
            <View style={styles.View_35_5544}>
              <View style={styles.View_35_5545} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2715/05da/9d06ba0bfd00a93dee6c10a8b7c8ad2b"
                }}
                style={styles.ImageBackground_35_5546}
              />
              <View style={styles.View_35_5551}>
                <Text style={styles.Text_35_5551}>2:50</Text>
              </View>
              <View style={styles.View_35_5552}>
                <Text style={styles.Text_35_5552}>5:20</Text>
              </View>
              <View style={styles.View_35_5553} />
              <View style={styles.View_35_5554} />
            </View>
          </View>
          <View style={styles.View_35_5555}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4a8/c022/c04ade3ea8ded523250b3371ff168e33"
              }}
              style={styles.ImageBackground_35_5556}
            />
            <View style={styles.View_35_5557} />
            <View style={styles.View_35_5558}>
              <View style={styles.View_35_5559}>
                <Text style={styles.Text_35_5559}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia{" "}
                </Text>
              </View>
              <View style={styles.View_35_5560}>
                <Text style={styles.Text_35_5560}>- Lorem ipsum </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_35_5561}>
            <View style={styles.View_35_5562}>
              <Text style={styles.Text_35_5562}>O que é o iFood decola?</Text>
            </View>
            <View style={styles.View_35_5563}>
              <Text style={styles.Text_35_5563}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant hac habitant malesuada cursus blandit, augue commodo
                sagittis elit justo sem congue dolor, orci senectus tempor
                vestibulum feugiat bibendum nibh. aliquam placerat amet tellus
                lacus elit nibh rhoncus iaculis ante, morbi suscipit
                pellentesque class libero interdum metus fames aliquet
                habitasse, fermentum enim urna inceptos ut suspendisse morbi
                auctor. cras sem tellus curabitur nec commodo ipsum proin
                molestie velit, class mauris cubilia lobortis integer tempus
                quam mattis, felis nam adipiscing commodo mauris venenatis
                bibendum risus.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_35_5564}>
          <View style={styles.View_35_5565}>
            <View style={styles.View_35_5566}>
              <Text style={styles.Text_35_5566}>Sobre o ifood </Text>
            </View>
            <View style={styles.View_35_5567}>
              <Text style={styles.Text_35_5567}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5568}>
            <View style={styles.View_35_5569}>
              <View style={styles.View_35_5570}>
                <Text style={styles.Text_35_5570}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5571}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5571_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5572}>
              <View style={styles.View_35_5573}>
                <Text style={styles.Text_35_5573}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5574}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5574_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5575}>
              <View style={styles.View_35_5576}>
                <Text style={styles.Text_35_5576}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5577}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5577_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5578}>
              <View style={styles.View_35_5579}>
                <Text style={styles.Text_35_5579}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5580}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5580_21_2707} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.View_35_5581}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a5b/9cfb/18c3fbacf7742311be88de5bb8e4c430"
            }}
            style={styles.ImageBackground_35_5582}
          />
          <View style={styles.View_35_5583}>
            <Text style={styles.Text_35_5583}>
              molestie odio id odio malesuada hendrerit nostra, ante hac
              elementum diam viverra taciti duis purus leo purus dolor, nulla
              enim commodo phasellus praesent primis lacinia consectetur
              vehicula. metus semper blandit habitant{" "}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("396%") },
  TouchableOpacity_23_3771: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("386%")
  },
  View_23_3772: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 1, 27, 1)"
  },
  View_23_3773: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%")
  },
  View_23_3774: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_3774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3775: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_23_3775: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4237: {
    width: wp("197%"),
    minWidth: wp("197%"),
    height: hp("355%"),
    minHeight: hp("355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-97%"),
    top: hp("23%")
  },
  View_29_4236: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102%"),
    top: hp("0%")
  },
  View_23_3765: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3766: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_3766: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3767: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_23_3767: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3768: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_23_3769: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_3769: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3770: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_23_3770: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3776: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_29_4202: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("179%"),
    minHeight: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("176%")
  },
  View_29_4203: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_4204: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  ImageBackground_29_4205: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_29_4206: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_29_4206: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4207: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_29_4208: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4209: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_29_4209: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4210: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("135%")
  },
  View_29_4211: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4212: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_29_4212: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4213: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("67%")
  },
  View_29_4214: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_4215: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4216: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_29_4216: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4217: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("28%")
  },
  View_29_4218: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_29_4219: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_29_4220: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4220: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4221: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_29_4222: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_29_4223: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4223: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4224: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_29_4225: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_29_4226: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4226: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4227: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  ImageBackground_29_4228: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_29_4229: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4229: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4230: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  ImageBackground_29_4231: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_29_4232: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4232: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4233: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%")
  },
  ImageBackground_29_4234: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_29_4235: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_4235: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3877: {
    width: wp("191%"),
    minWidth: wp("191%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%")
  },
  View_23_3878: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102%"),
    top: hp("0%")
  },
  View_23_3879: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3880: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 233, 218, 1)"
  },
  View_23_3881: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_3881_8_1078: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 93, 105, 1)"
  },
  View_I23_3881_8_1079: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_I23_3881_8_1080: {
    width: wp("77%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I23_3881_8_1080: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3881_8_1081: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("18%")
  },
  TouchableOpacity_I23_3881_8_1082: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3881_8_1083: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3881_8_1084: {
    width: wp("21%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I23_3881_8_1085: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3881_8_1086: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_I23_3881_8_1086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3881_8_1087: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3881_8_1088: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3881_8_1089: {
    width: wp("18%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I23_3881_8_1090: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3881_8_1091: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_I23_3881_8_1091: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3881_8_1092: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3881_8_1093: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3881_8_1094: {
    width: wp("20%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I23_3881_8_1095: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3881_8_1096: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_I23_3881_8_1096: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3881_8_1097: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3881_8_1098: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3881_8_1099: {
    width: wp("18%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I23_3881_8_1100: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3881_8_1101: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_I23_3881_8_1101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3882: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3883: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("30%")
  },
  View_23_3884: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_3885: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3886: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_23_3886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3887: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_3888: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3889: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("30%")
  },
  ImageBackground_23_3890: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3891: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_23_3891: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3892: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_23_3892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3893: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("123%"),
    top: hp("74%")
  },
  TouchableOpacity_23_3894: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_3895: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3896: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_23_3896: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3897: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  ImageBackground_23_3898: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3899: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_23_3899: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_3837: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_23_3838: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 1, 27, 1)"
  },
  View_23_3839: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_23_3840: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_23_3840: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3841: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_3841: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3842: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3843: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_23_3844: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_23_3845: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_3845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3846: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_23_3846: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3847: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("2%")
  },
  ImageBackground_23_3848: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3849: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_23_3849: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5279: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("366%"),
    minHeight: hp("366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("396%")
  },
  View_35_5280: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("366%"),
    minHeight: hp("366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_35_5281: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("208%"),
    minHeight: hp("208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5282: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_35_5283: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5283: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5284: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_35_5284: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5285: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("192%"),
    minHeight: hp("192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_35_5286: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_35_5287: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5288: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_35_5288: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5289: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("22%")
  },
  View_35_5290: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5291: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5291: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5292: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_5293: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5294: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_35_5294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5295: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_35_5296: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5296: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5297: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_5298: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5299: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_35_5299: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5300: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_35_5301: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5301: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5302: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_5303: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5304: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_35_5304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5305: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%")
  },
  View_35_5306: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5306: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5307: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_5308: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5309: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_35_5309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5310: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("121%")
  },
  View_35_5311: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5312: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_35_5312: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5313: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("144%")
  },
  View_35_5314: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5315: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5316: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 29, 44, 1)"
  },
  ImageBackground_35_5317: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_5318: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_35_5319: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_35_5320: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  View_35_5321: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("15%")
  },
  View_35_5322: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  ImageBackground_35_5323: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_35_5325: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_5328: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5331: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("27%")
  },
  View_35_5332: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  ImageBackground_35_5333: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_35_5338: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_35_5338: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5339: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_35_5339: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5340: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  View_35_5341: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 1, 27, 1)"
  },
  View_35_5342: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("183%"),
    justifyContent: "flex-start"
  },
  Text_35_5342: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5343: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_35_5344: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("216%")
  },
  TouchableOpacity_35_5345: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_35_5346: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("33%")
  },
  ImageBackground_35_5347: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5351: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  View_35_5352: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5352: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5353: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_35_5353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5354: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("258%")
  },
  View_35_5355: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5356: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5357: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_35_5357: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5358: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  TouchableOpacity_35_5359: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_5359_31_4477: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(220, 220, 220, 1)",
    borderWidth: 2
  },
  View_I35_5359_31_4478: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I35_5359_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5360: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_5360_31_4477: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(220, 220, 220, 1)",
    borderWidth: 2
  },
  View_I35_5360_31_4478: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I35_5360_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5361: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("302%")
  },
  View_35_5362: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5363: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5363: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5364: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_35_5364: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5365: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("28%")
  },
  View_35_5366: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_5367: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_35_5368: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5368: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5369: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_35_5370: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_35_5371: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5371: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5372: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_35_5373: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_35_5374: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5374: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5375: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  ImageBackground_35_5376: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_35_5377: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5377: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5378: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  ImageBackground_35_5379: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_35_5380: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5380: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5381: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%")
  },
  ImageBackground_35_5382: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_35_5383: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5383: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3850: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_23_3851: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_23_3852: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 1, 27, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  View_35_5522: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("366%"),
    minHeight: hp("366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-366%")
  },
  View_35_5523: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_35_5524: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5524: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5525: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_35_5525: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5526: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("165%"),
    minHeight: hp("165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_35_5527: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5528: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5529: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5530: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 29, 44, 1)"
  },
  ImageBackground_35_5531: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_5532: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_35_5533: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  View_35_5534: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("15%")
  },
  View_35_5535: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  ImageBackground_35_5536: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_35_5538: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_5541: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5544: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("27%")
  },
  View_35_5545: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  ImageBackground_35_5546: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_35_5551: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_35_5551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5552: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_35_5552: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5553: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  View_35_5554: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 1, 27, 1)"
  },
  View_35_5555: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%")
  },
  ImageBackground_35_5556: {
    width: wp("100%"),
    height: hp("61%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5557: {
    width: wp("100%"),
    height: hp("61%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_35_5558: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%")
  },
  View_35_5559: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5559: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5560: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_35_5560: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5561: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%")
  },
  View_35_5562: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5562: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5563: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_35_5563: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5564: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("188%")
  },
  View_35_5565: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5566: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5566: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5567: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_35_5567: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5568: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_35_5569: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_5570: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5570: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5571: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_5571_21_2707: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 2
  },
  View_35_5572: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_35_5573: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5573: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5574: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_5574_21_2707: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 2
  },
  View_35_5575: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_35_5576: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5576: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5577: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_5577_21_2707: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 2
  },
  View_35_5578: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%")
  },
  View_35_5579: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_5579: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5580: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_5580_21_2707: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 2
  },
  View_35_5581: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("316%")
  },
  ImageBackground_35_5582: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_35_5583: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_35_5583: {
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
