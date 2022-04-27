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
        style={styles.TouchableOpacity_23_3589}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_4238"))
        }
      >
        <View style={styles.View_23_3590} />
        <View style={styles.View_23_3591}>
          <View style={styles.View_23_3592}>
            <Text style={styles.Text_23_3592}>
              Lição 3 - Desenvolvimento pessoal
            </Text>
          </View>
          <View style={styles.View_23_3593}>
            <Text style={styles.Text_23_3593}>chevron-down</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_29_4201}>
        <View style={styles.View_29_4166}>
          <View style={styles.View_23_3583}>
            <View style={styles.View_23_3584}>
              <Text style={styles.Text_23_3584}>Lição 2 de 4</Text>
            </View>
            <View style={styles.View_23_3585}>
              <Text style={styles.Text_23_3585}>
                Responsabilidade no trânsito{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_23_3586}>
            <View style={styles.View_23_3587}>
              <Text style={styles.Text_23_3587}>Leis de trânsito </Text>
            </View>
            <View style={styles.View_23_3588}>
              <Text style={styles.Text_23_3588}>
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
          <View style={styles.View_23_3594} />
        </View>
        <View style={styles.View_29_4167}>
          <View style={styles.View_29_4168}>
            <View style={styles.View_29_4169}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baba/9bb9/96f0e44a4643d18244ecf65ad307bef1"
                }}
                style={styles.ImageBackground_29_4170}
              />
              <View style={styles.View_29_4171}>
                <Text style={styles.Text_29_4171}>
                  molestie odio id odio malesuada hendrerit nostra ante hac
                  elementum diam viverra.
                </Text>
              </View>
            </View>
            <View style={styles.View_29_4172}>
              <View style={styles.View_29_4173}>
                <Text style={styles.Text_29_4173}>Assessórios</Text>
              </View>
              <View style={styles.View_29_4174}>
                <Text style={styles.Text_29_4174}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_29_4175}>
            <View style={styles.View_29_4176}>
              <Text style={styles.Text_29_4176}>2. Lorem ipsum</Text>
            </View>
            <View style={styles.View_29_4177}>
              <Text style={styles.Text_29_4177}>
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
          <View style={styles.View_29_4178}>
            <View style={styles.View_29_4179}>
              <View style={styles.View_29_4180}>
                <Text style={styles.Text_29_4180}>1. Lorem ipsum</Text>
              </View>
              <View style={styles.View_29_4181}>
                <Text style={styles.Text_29_4181}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_29_4182}>
              <View style={styles.View_29_4183}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4184}
                />
                <View style={styles.View_29_4185}>
                  <Text style={styles.Text_29_4185}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4186}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4187}
                />
                <View style={styles.View_29_4188}>
                  <Text style={styles.Text_29_4188}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4189}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4190}
                />
                <View style={styles.View_29_4191}>
                  <Text style={styles.Text_29_4191}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4192}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4193}
                />
                <View style={styles.View_29_4194}>
                  <Text style={styles.Text_29_4194}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4195}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4196}
                />
                <View style={styles.View_29_4197}>
                  <Text style={styles.Text_29_4197}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_29_4198}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_29_4199}
                />
                <View style={styles.View_29_4200}>
                  <Text style={styles.Text_29_4200}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_23_3704}>
          <View style={styles.View_23_3705}>
            <View style={styles.View_23_3706}>
              <View style={styles.View_23_3707} />
              <View style={styles.View_23_3708}>
                <View style={styles.View_I23_3708_8_1078} />
                <View style={styles.View_I23_3708_8_1079}>
                  <View style={styles.View_I23_3708_8_1080}>
                    <Text style={styles.Text_I23_3708_8_1080}>
                      O uso de celular aumenta em quantos porcento o risco de
                      sofrer um acidente de trânsito?
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I23_3708_8_1081}>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_I23_3708_8_1082}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("17_1692")
                      )
                    }
                  >
                    <View style={styles.View_I23_3708_8_1083} />
                    <View style={styles.View_I23_3708_8_1084}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f1b/162c/780f8fcd69a49f47a1f8e575a9b32eab"
                        }}
                        style={styles.ImageBackground_I23_3708_8_1085}
                      />
                      <View style={styles.View_I23_3708_8_1086}>
                        <Text style={styles.Text_I23_3708_8_1086}>50%</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.View_I23_3708_8_1087}>
                    <View style={styles.View_I23_3708_8_1088} />
                    <View style={styles.View_I23_3708_8_1089}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f1b/162c/780f8fcd69a49f47a1f8e575a9b32eab"
                        }}
                        style={styles.ImageBackground_I23_3708_8_1090}
                      />
                      <View style={styles.View_I23_3708_8_1091}>
                        <Text style={styles.Text_I23_3708_8_1091}>80%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I23_3708_8_1092}>
                    <View style={styles.View_I23_3708_8_1093} />
                    <View style={styles.View_I23_3708_8_1094}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f1b/162c/780f8fcd69a49f47a1f8e575a9b32eab"
                        }}
                        style={styles.ImageBackground_I23_3708_8_1095}
                      />
                      <View style={styles.View_I23_3708_8_1096}>
                        <Text style={styles.Text_I23_3708_8_1096}>200%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I23_3708_8_1097}>
                    <View style={styles.View_I23_3708_8_1098} />
                    <View style={styles.View_I23_3708_8_1099}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f1b/162c/780f8fcd69a49f47a1f8e575a9b32eab"
                        }}
                        style={styles.ImageBackground_I23_3708_8_1100}
                      />
                      <View style={styles.View_I23_3708_8_1101}>
                        <Text style={styles.Text_I23_3708_8_1101}>400%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3709}>
            <View style={styles.View_23_3710}>
              <View style={styles.View_23_3711}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bd9/6493/67a6d8c1fb9c92c7156fe59a675ab858"
                  }}
                  style={styles.ImageBackground_23_3712}
                />
                <View style={styles.View_23_3713}>
                  <Text style={styles.Text_23_3713}>Play</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_23_3714}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2c1/3dd5/2c295304326c9d56dd1e26dbbf53477d"
                }}
                style={styles.ImageBackground_23_3715}
              />
              <View style={styles.View_23_3716}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e04a/5116/24137bad8ffd80b9836d5377982c0378"
                  }}
                  style={styles.ImageBackground_23_3717}
                />
                <View style={styles.View_23_3718}>
                  <Text style={styles.Text_23_3718}>Play</Text>
                </View>
              </View>
              <View style={styles.View_23_3719}>
                <Text style={styles.Text_23_3719}>
                  10 dicas de quem tem experiência no assunto
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3720}>
            <View style={styles.View_23_3721}>
              <View style={styles.View_23_3722} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b541/d6ad/73075dd307e815f9980df0d0946bfd34"
                }}
                style={styles.ImageBackground_23_3723}
              />
              <View style={styles.View_23_3724} />
              <View style={styles.View_23_3725}>
                <View style={styles.View_23_3726}>
                  <Text style={styles.Text_23_3726}>Respeite a lei</Text>
                </View>
                <View style={styles.View_23_3727}>
                  <Text style={styles.Text_23_3727}>
                    Antes de tudo, respeitar a lei é fundamental. As normas de
                    trânsito existem para garantir a sua segurança e um trânsito
                    harmonioso. Todas as nossas dicas abaixo são baseadas não só
                    nas melhores práticas, mas também nas leis vigentes.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3728}>
            <TouchableOpacity
              style={styles.TouchableOpacity_23_3729}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("23_3417"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1635/36ba/34218cdd2484d89eb4d83bfc3f16f12b"
                }}
                style={styles.ImageBackground_23_3730}
              />
              <View style={styles.View_23_3731}>
                <Text style={styles.Text_23_3731}>CHEVRON-LEFT</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_23_3732}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("23_3759"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1635/36ba/34218cdd2484d89eb4d83bfc3f16f12b"
                }}
                style={styles.ImageBackground_23_3733}
              />
              <View style={styles.View_23_3734}>
                <Text style={styles.Text_23_3734}>chevron-right</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_23_3664}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("20_42818"))
        }
      >
        <View style={styles.View_23_3665} />
        <View style={styles.View_23_3666}>
          <View style={styles.View_23_3667}>
            <Text style={styles.Text_23_3667}>
              Lição 1 - iFood Decola: embarque no aprendizado
            </Text>
          </View>
          <View style={styles.View_23_3668}>
            <Text style={styles.Text_23_3668}>chevron-up</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_23_3669}>
        <View style={styles.View_23_3670} />
        <View style={styles.View_23_3671}>
          <View style={styles.View_23_3672}>
            <Text style={styles.Text_23_3672}>bars</Text>
          </View>
        </View>
        <View style={styles.View_23_3673}>
          <Text style={styles.Text_23_3673}>
            iFood Decola: embarque no aprendizado
          </Text>
        </View>
        <View style={styles.View_23_3674}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1f3/dd0c/61574d080cc747e58bdb5df6d048a838"
            }}
            style={styles.ImageBackground_23_3675}
          />
          <View style={styles.View_23_3676}>
            <Text style={styles.Text_23_3676}>times</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_35_5170}>
        <View style={styles.View_35_5171} />
        <View style={styles.View_35_5172}>
          <View style={styles.View_35_5173}>
            <View style={styles.View_35_5174}>
              <Text style={styles.Text_35_5174}>Lição 3 de 4</Text>
            </View>
            <View style={styles.View_35_5175}>
              <Text style={styles.Text_35_5175}>Desenvolvimento pessoal</Text>
            </View>
          </View>
          <View style={styles.View_35_5176}>
            <View style={styles.View_35_5177}>
              <View style={styles.View_35_5178}>
                <Text style={styles.Text_35_5178}>Ética profissional</Text>
              </View>
              <View style={styles.View_35_5179}>
                <Text style={styles.Text_35_5179}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5180}>
              <View style={styles.View_35_5181}>
                <View style={styles.View_35_5182}>
                  <Text style={styles.Text_35_5182}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5183}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5184}
                  />
                  <View style={styles.View_35_5185}>
                    <Text style={styles.Text_35_5185}>1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5186}>
                <View style={styles.View_35_5187}>
                  <Text style={styles.Text_35_5187}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5188}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5189}
                  />
                  <View style={styles.View_35_5190}>
                    <Text style={styles.Text_35_5190}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5191}>
                <View style={styles.View_35_5192}>
                  <Text style={styles.Text_35_5192}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5193}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5194}
                  />
                  <View style={styles.View_35_5195}>
                    <Text style={styles.Text_35_5195}>3</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5196}>
                <View style={styles.View_35_5197}>
                  <Text style={styles.Text_35_5197}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5198}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5199}
                  />
                  <View style={styles.View_35_5200}>
                    <Text style={styles.Text_35_5200}>4</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_35_5201}>
              <View style={styles.View_35_5202}>
                <Text style={styles.Text_35_5202}>Resolução de problemas</Text>
              </View>
              <View style={styles.View_35_5203}>
                <Text style={styles.Text_35_5203}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5204}>
              <View style={styles.View_35_5205}>
                <View style={styles.View_35_5206}>
                  <View style={styles.View_35_5207} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d2/9d88/35e0abd360d11d2e3796df331b345614"
                    }}
                    style={styles.ImageBackground_35_5208}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b8/18cb/10459a7057d972d21091f8c97ffac2cb"
                    }}
                    style={styles.ImageBackground_35_5209}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a5b/9cfb/18c3fbacf7742311be88de5bb8e4c430"
                    }}
                    style={styles.ImageBackground_35_5210}
                  />
                </View>
                <View style={styles.View_35_5211} />
              </View>
              <View style={styles.View_35_5212}>
                <View style={styles.View_35_5213}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829f/11d7/11063cd8a595947c631721f8acb503c5"
                    }}
                    style={styles.ImageBackground_35_5214}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bd/78f6/46ea9a46e5c3065ac186fe6f74d73fc9"
                  }}
                  style={styles.ImageBackground_35_5216}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4f/d6a9/18c9f4b08f6d343531f0eaaea025610b"
                  }}
                  style={styles.ImageBackground_35_5219}
                />
              </View>
              <View style={styles.View_35_5222}>
                <View style={styles.View_35_5223} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2715/05da/9d06ba0bfd00a93dee6c10a8b7c8ad2b"
                  }}
                  style={styles.ImageBackground_35_5224}
                />
                <View style={styles.View_35_5229}>
                  <Text style={styles.Text_35_5229}>2:50</Text>
                </View>
                <View style={styles.View_35_5230}>
                  <Text style={styles.Text_35_5230}>5:20</Text>
                </View>
                <View style={styles.View_35_5231} />
                <View style={styles.View_35_5232} />
              </View>
            </View>
            <View style={styles.View_35_5233}>
              <Text style={styles.Text_35_5233}>
                molestie odio id odio malesuada hendrerit nostra, ante hac
                elementum diam viverra taciti duis purus leo purus dolor, nulla
                enim commodo phasellus{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5234} />
        </View>
        <View style={styles.View_35_5235}>
          <TouchableOpacity
            style={styles.TouchableOpacity_35_5236}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("31_4522"))
            }
          />
          <View style={styles.View_35_5237}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501e/e426/b44f18f2cb69a4e9abc590d8b21d5efb"
              }}
              style={styles.ImageBackground_35_5238}
            />
          </View>
          <View style={styles.View_35_5242}>
            <View style={styles.View_35_5243}>
              <Text style={styles.Text_35_5243}>
                “ Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim”
              </Text>
            </View>
            <View style={styles.View_35_5244}>
              <Text style={styles.Text_35_5244}>- Sharon Salzberg</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_35_5245}>
          <View style={styles.View_35_5246}>
            <View style={styles.View_35_5247}>
              <Text style={styles.Text_35_5247}>Verdadeiro ou falso</Text>
            </View>
            <View style={styles.View_35_5248}>
              <Text style={styles.Text_35_5248}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5249}>
            <TouchableOpacity
              style={styles.TouchableOpacity_35_5250}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("31_4481"))
              }
            >
              <View style={styles.View_I35_5250_31_4477} />
              <View style={styles.View_I35_5250_31_4478}>
                <Text style={styles.Text_I35_5250_31_4478}>Verdadeiro</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_35_5251}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("31_4481"))
              }
            >
              <View style={styles.View_I35_5251_31_4477} />
              <View style={styles.View_I35_5251_31_4478}>
                <Text style={styles.Text_I35_5251_31_4478}>Falso</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_35_5252}>
          <View style={styles.View_35_5253}>
            <View style={styles.View_35_5254}>
              <Text style={styles.Text_35_5254}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_35_5255}>
              <Text style={styles.Text_35_5255}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5256}>
            <View style={styles.View_35_5257}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5258}
              />
              <View style={styles.View_35_5259}>
                <Text style={styles.Text_35_5259}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5260}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5261}
              />
              <View style={styles.View_35_5262}>
                <Text style={styles.Text_35_5262}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5263}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5264}
              />
              <View style={styles.View_35_5265}>
                <Text style={styles.Text_35_5265}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5266}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5267}
              />
              <View style={styles.View_35_5268}>
                <Text style={styles.Text_35_5268}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5269}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5270}
              />
              <View style={styles.View_35_5271}>
                <Text style={styles.Text_35_5271}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5272}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5273}
              />
              <View style={styles.View_35_5274}>
                <Text style={styles.Text_35_5274}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_23_3677}>
        <View style={styles.View_23_3678} />
        <View style={styles.View_23_3679} />
      </View>
      <View style={styles.View_35_5456}>
        <View style={styles.View_35_5457}>
          <View style={styles.View_35_5458}>
            <Text style={styles.Text_35_5458}>Lição 1 de 4</Text>
          </View>
          <View style={styles.View_35_5459}>
            <Text style={styles.Text_35_5459}>
              iFood Decola: embarque no aprendizado
            </Text>
          </View>
        </View>
        <View style={styles.View_35_5460}>
          <View style={styles.View_35_5461}>
            <View style={styles.View_35_5462}>
              <View style={styles.View_35_5463}>
                <View style={styles.View_35_5464} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d2/9d88/35e0abd360d11d2e3796df331b345614"
                  }}
                  style={styles.ImageBackground_35_5465}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b8/18cb/10459a7057d972d21091f8c97ffac2cb"
                  }}
                  style={styles.ImageBackground_35_5466}
                />
              </View>
              <View style={styles.View_35_5467} />
            </View>
            <View style={styles.View_35_5468}>
              <View style={styles.View_35_5469}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829f/11d7/11063cd8a595947c631721f8acb503c5"
                  }}
                  style={styles.ImageBackground_35_5470}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bd/78f6/46ea9a46e5c3065ac186fe6f74d73fc9"
                }}
                style={styles.ImageBackground_35_5472}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4f/d6a9/18c9f4b08f6d343531f0eaaea025610b"
                }}
                style={styles.ImageBackground_35_5475}
              />
            </View>
            <View style={styles.View_35_5478}>
              <View style={styles.View_35_5479} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2715/05da/9d06ba0bfd00a93dee6c10a8b7c8ad2b"
                }}
                style={styles.ImageBackground_35_5480}
              />
              <View style={styles.View_35_5485}>
                <Text style={styles.Text_35_5485}>2:50</Text>
              </View>
              <View style={styles.View_35_5486}>
                <Text style={styles.Text_35_5486}>5:20</Text>
              </View>
              <View style={styles.View_35_5487} />
              <View style={styles.View_35_5488} />
            </View>
          </View>
          <View style={styles.View_35_5489}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4a8/c022/c04ade3ea8ded523250b3371ff168e33"
              }}
              style={styles.ImageBackground_35_5490}
            />
            <View style={styles.View_35_5491} />
            <View style={styles.View_35_5492}>
              <View style={styles.View_35_5493}>
                <Text style={styles.Text_35_5493}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia{" "}
                </Text>
              </View>
              <View style={styles.View_35_5494}>
                <Text style={styles.Text_35_5494}>- Lorem ipsum </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_35_5495}>
            <View style={styles.View_35_5496}>
              <Text style={styles.Text_35_5496}>O que é o iFood decola?</Text>
            </View>
            <View style={styles.View_35_5497}>
              <Text style={styles.Text_35_5497}>
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
        <View style={styles.View_35_5498}>
          <View style={styles.View_35_5499}>
            <View style={styles.View_35_5500}>
              <Text style={styles.Text_35_5500}>Sobre o ifood </Text>
            </View>
            <View style={styles.View_35_5501}>
              <Text style={styles.Text_35_5501}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5502}>
            <View style={styles.View_35_5503}>
              <View style={styles.View_35_5504}>
                <Text style={styles.Text_35_5504}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5505}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5505_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5506}>
              <View style={styles.View_35_5507}>
                <Text style={styles.Text_35_5507}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5508}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5508_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5509}>
              <View style={styles.View_35_5510}>
                <Text style={styles.Text_35_5510}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5511}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5511_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5512}>
              <View style={styles.View_35_5513}>
                <Text style={styles.Text_35_5513}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5514}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5514_21_2707} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.View_35_5515}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a5b/9cfb/18c3fbacf7742311be88de5bb8e4c430"
            }}
            style={styles.ImageBackground_35_5516}
          />
          <View style={styles.View_35_5517}>
            <Text style={styles.Text_35_5517}>
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
  TouchableOpacity_23_3589: {
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
  View_23_3590: {
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
  View_23_3591: {
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
  View_23_3592: {
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
  Text_23_3592: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3593: {
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
  Text_23_3593: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4201: {
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
  View_29_4166: {
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
  View_23_3583: {
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
  View_23_3584: {
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
  Text_23_3584: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3585: {
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
  Text_23_3585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3586: {
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
  View_23_3587: {
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
  Text_23_3587: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3588: {
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
  Text_23_3588: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3594: {
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
  View_29_4167: {
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
  View_29_4168: {
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
  View_29_4169: {
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
  ImageBackground_29_4170: {
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
  View_29_4171: {
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
  Text_29_4171: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4172: {
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
  View_29_4173: {
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
  Text_29_4173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4174: {
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
  Text_29_4174: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4175: {
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
  View_29_4176: {
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
  Text_29_4176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4177: {
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
  Text_29_4177: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4178: {
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
  View_29_4179: {
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
  View_29_4180: {
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
  Text_29_4180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4181: {
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
  Text_29_4181: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4182: {
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
  View_29_4183: {
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
  ImageBackground_29_4184: {
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
  View_29_4185: {
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
  Text_29_4185: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4186: {
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
  ImageBackground_29_4187: {
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
  View_29_4188: {
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
  Text_29_4188: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4189: {
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
  ImageBackground_29_4190: {
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
  View_29_4191: {
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
  Text_29_4191: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4192: {
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
  ImageBackground_29_4193: {
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
  View_29_4194: {
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
  Text_29_4194: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4195: {
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
  ImageBackground_29_4196: {
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
  View_29_4197: {
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
  Text_29_4197: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4198: {
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
  ImageBackground_29_4199: {
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
  View_29_4200: {
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
  Text_29_4200: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3704: {
    width: wp("194%"),
    minWidth: wp("194%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%")
  },
  View_23_3705: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("112%"),
    top: hp("2%")
  },
  View_23_3706: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3707: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 233, 218, 1)"
  },
  View_23_3708: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_3708_8_1078: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 93, 105, 1)"
  },
  View_I23_3708_8_1079: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  View_I23_3708_8_1080: {
    width: wp("72%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I23_3708_8_1080: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3708_8_1081: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("17%")
  },
  TouchableOpacity_I23_3708_8_1082: {
    width: wp("72%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3708_8_1083: {
    width: wp("72%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3708_8_1084: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I23_3708_8_1085: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3708_8_1086: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I23_3708_8_1086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3708_8_1087: {
    width: wp("72%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3708_8_1088: {
    width: wp("72%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3708_8_1089: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I23_3708_8_1090: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3708_8_1091: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I23_3708_8_1091: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3708_8_1092: {
    width: wp("72%"),
    height: hp("9%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3708_8_1093: {
    width: wp("72%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3708_8_1094: {
    width: wp("20%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I23_3708_8_1095: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3708_8_1096: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I23_3708_8_1096: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3708_8_1097: {
    width: wp("72%"),
    height: hp("9%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3708_8_1098: {
    width: wp("72%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3708_8_1099: {
    width: wp("20%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I23_3708_8_1100: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3708_8_1101: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I23_3708_8_1101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3709: {
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
  View_23_3710: {
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
  View_23_3711: {
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
  ImageBackground_23_3712: {
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
  View_23_3713: {
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
  Text_23_3713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3714: {
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
  ImageBackground_23_3715: {
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
  View_23_3716: {
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
  ImageBackground_23_3717: {
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
  View_23_3718: {
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
  Text_23_3718: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3719: {
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
  Text_23_3719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3720: {
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
  View_23_3721: {
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
  View_23_3722: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(187, 8, 16, 1)"
  },
  ImageBackground_23_3723: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_23_3724: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_23_3725: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("28%")
  },
  View_23_3726: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_3726: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3727: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_23_3727: {
    color: "rgba(241, 241, 241, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3728: {
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
  TouchableOpacity_23_3729: {
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
  ImageBackground_23_3730: {
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
  View_23_3731: {
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
  Text_23_3731: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_3732: {
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
  ImageBackground_23_3733: {
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
  View_23_3734: {
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
  Text_23_3734: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_3664: {
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
  View_23_3665: {
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
  View_23_3666: {
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
  View_23_3667: {
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
  Text_23_3667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3668: {
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
  Text_23_3668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3669: {
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
  View_23_3670: {
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
  View_23_3671: {
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
  View_23_3672: {
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
  Text_23_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3673: {
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
  Text_23_3673: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3674: {
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
  ImageBackground_23_3675: {
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
  View_23_3676: {
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
  Text_23_3676: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5170: {
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
  View_35_5171: {
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
  View_35_5172: {
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
  View_35_5173: {
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
  View_35_5174: {
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
  Text_35_5174: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5175: {
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
  Text_35_5175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5176: {
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
  View_35_5177: {
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
  View_35_5178: {
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
  Text_35_5178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5179: {
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
  Text_35_5179: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5180: {
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
  View_35_5181: {
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
  View_35_5182: {
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
  Text_35_5182: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5183: {
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
  ImageBackground_35_5184: {
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
  View_35_5185: {
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
  Text_35_5185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5186: {
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
  View_35_5187: {
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
  Text_35_5187: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5188: {
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
  ImageBackground_35_5189: {
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
  View_35_5190: {
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
  Text_35_5190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5191: {
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
  View_35_5192: {
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
  Text_35_5192: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5193: {
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
  ImageBackground_35_5194: {
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
  View_35_5195: {
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
  Text_35_5195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5196: {
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
  View_35_5197: {
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
  Text_35_5197: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5198: {
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
  ImageBackground_35_5199: {
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
  View_35_5200: {
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
  Text_35_5200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5201: {
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
  View_35_5202: {
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
  Text_35_5202: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5203: {
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
  Text_35_5203: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5204: {
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
  View_35_5205: {
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
  View_35_5206: {
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
  View_35_5207: {
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
  ImageBackground_35_5208: {
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
  ImageBackground_35_5209: {
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
  ImageBackground_35_5210: {
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
  View_35_5211: {
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
  View_35_5212: {
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
  View_35_5213: {
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
  ImageBackground_35_5214: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_35_5216: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_5219: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5222: {
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
  View_35_5223: {
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
  ImageBackground_35_5224: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_35_5229: {
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
  Text_35_5229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5230: {
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
  Text_35_5230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5231: {
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
  View_35_5232: {
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
  View_35_5233: {
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
  Text_35_5233: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5234: {
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
  View_35_5235: {
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
  TouchableOpacity_35_5236: {
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
  View_35_5237: {
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
  ImageBackground_35_5238: {
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
  View_35_5242: {
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
  View_35_5243: {
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
  Text_35_5243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5244: {
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
  Text_35_5244: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5245: {
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
  View_35_5246: {
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
  View_35_5247: {
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
  Text_35_5247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5248: {
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
  Text_35_5248: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5249: {
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
  TouchableOpacity_35_5250: {
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
  View_I35_5250_31_4477: {
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
  View_I35_5250_31_4478: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I35_5250_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5251: {
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
  View_I35_5251_31_4477: {
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
  View_I35_5251_31_4478: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I35_5251_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5252: {
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
  View_35_5253: {
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
  View_35_5254: {
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
  Text_35_5254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5255: {
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
  Text_35_5255: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5256: {
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
  View_35_5257: {
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
  ImageBackground_35_5258: {
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
  View_35_5259: {
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
  Text_35_5259: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5260: {
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
  ImageBackground_35_5261: {
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
  View_35_5262: {
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
  Text_35_5262: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5263: {
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
  ImageBackground_35_5264: {
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
  View_35_5265: {
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
  Text_35_5265: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5266: {
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
  ImageBackground_35_5267: {
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
  View_35_5268: {
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
  Text_35_5268: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5269: {
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
  ImageBackground_35_5270: {
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
  View_35_5271: {
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
  Text_35_5271: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5272: {
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
  ImageBackground_35_5273: {
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
  View_35_5274: {
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
  Text_35_5274: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3677: {
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
  View_23_3678: {
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
  View_23_3679: {
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
  View_35_5456: {
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
  View_35_5457: {
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
  View_35_5458: {
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
  Text_35_5458: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5459: {
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
  Text_35_5459: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5460: {
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
  View_35_5461: {
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
  View_35_5462: {
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
  View_35_5463: {
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
  View_35_5464: {
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
  ImageBackground_35_5465: {
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
  ImageBackground_35_5466: {
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
  View_35_5467: {
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
  View_35_5468: {
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
  View_35_5469: {
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
  ImageBackground_35_5470: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_35_5472: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_5475: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5478: {
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
  View_35_5479: {
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
  ImageBackground_35_5480: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_35_5485: {
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
  Text_35_5485: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5486: {
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
  Text_35_5486: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5487: {
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
  View_35_5488: {
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
  View_35_5489: {
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
  ImageBackground_35_5490: {
    width: wp("100%"),
    height: hp("61%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5491: {
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
  View_35_5492: {
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
  View_35_5493: {
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
  Text_35_5493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5494: {
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
  Text_35_5494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5495: {
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
  View_35_5496: {
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
  Text_35_5496: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5497: {
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
  Text_35_5497: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5498: {
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
  View_35_5499: {
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
  View_35_5500: {
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
  Text_35_5500: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5501: {
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
  Text_35_5501: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5502: {
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
  View_35_5503: {
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
  View_35_5504: {
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
  Text_35_5504: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5505: {
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
  View_I35_5505_21_2707: {
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
  View_35_5506: {
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
  View_35_5507: {
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
  Text_35_5507: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5508: {
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
  View_I35_5508_21_2707: {
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
  View_35_5509: {
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
  View_35_5510: {
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
  Text_35_5510: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5511: {
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
  View_I35_5511_21_2707: {
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
  View_35_5512: {
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
  View_35_5513: {
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
  Text_35_5513: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5514: {
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
  View_I35_5514_21_2707: {
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
  View_35_5515: {
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
  ImageBackground_35_5516: {
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
  View_35_5517: {
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
  Text_35_5517: {
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
