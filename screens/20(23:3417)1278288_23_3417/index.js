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
        style={styles.TouchableOpacity_23_3429}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_4238"))
        }
      >
        <View style={styles.View_23_3430} />
        <View style={styles.View_23_3431}>
          <View style={styles.View_23_3432}>
            <Text style={styles.Text_23_3432}>
              Lição 3 - Desenvolvimento pessoal
            </Text>
          </View>
          <View style={styles.View_23_3433}>
            <Text style={styles.Text_23_3433}>chevron-down</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_29_4161}>
        <View style={styles.View_29_4162} />
        <View style={styles.View_29_4157}>
          <View style={styles.View_23_3423}>
            <View style={styles.View_23_3424}>
              <Text style={styles.Text_23_3424}>Lição 2 de 4</Text>
            </View>
            <View style={styles.View_23_3425}>
              <Text style={styles.Text_23_3425}>
                Responsabilidade no trânsito{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_23_3426}>
            <View style={styles.View_23_3427}>
              <Text style={styles.Text_23_3427}>Leis de trânsito </Text>
            </View>
            <View style={styles.View_23_3428}>
              <Text style={styles.Text_23_3428}>
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
          <View style={styles.View_23_3434} />
        </View>
        <View style={styles.View_23_3516}>
          <View style={styles.View_23_3517}>
            <View style={styles.View_23_3518}>
              <View style={styles.View_23_3519} />
              <View style={styles.View_23_3520}>
                <View style={styles.View_I23_3520_8_1078} />
                <View style={styles.View_I23_3520_8_1079}>
                  <View style={styles.View_I23_3520_8_1080}>
                    <Text style={styles.Text_I23_3520_8_1080}>
                      O uso de celular aumenta em quantos porcento o risco de
                      sofrer um acidente de trânsito?
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I23_3520_8_1081}>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_I23_3520_8_1082}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("17_1692")
                      )
                    }
                  >
                    <View style={styles.View_I23_3520_8_1083} />
                    <View style={styles.View_I23_3520_8_1084}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f686/0961/a6d8b49baf66890f9c9cb1a89577ec9f"
                        }}
                        style={styles.ImageBackground_I23_3520_8_1085}
                      />
                      <View style={styles.View_I23_3520_8_1086}>
                        <Text style={styles.Text_I23_3520_8_1086}>50%</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.View_I23_3520_8_1087}>
                    <View style={styles.View_I23_3520_8_1088} />
                    <View style={styles.View_I23_3520_8_1089}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f686/0961/a6d8b49baf66890f9c9cb1a89577ec9f"
                        }}
                        style={styles.ImageBackground_I23_3520_8_1090}
                      />
                      <View style={styles.View_I23_3520_8_1091}>
                        <Text style={styles.Text_I23_3520_8_1091}>80%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I23_3520_8_1092}>
                    <View style={styles.View_I23_3520_8_1093} />
                    <View style={styles.View_I23_3520_8_1094}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f686/0961/a6d8b49baf66890f9c9cb1a89577ec9f"
                        }}
                        style={styles.ImageBackground_I23_3520_8_1095}
                      />
                      <View style={styles.View_I23_3520_8_1096}>
                        <Text style={styles.Text_I23_3520_8_1096}>200%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I23_3520_8_1097}>
                    <View style={styles.View_I23_3520_8_1098} />
                    <View style={styles.View_I23_3520_8_1099}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f686/0961/a6d8b49baf66890f9c9cb1a89577ec9f"
                        }}
                        style={styles.ImageBackground_I23_3520_8_1100}
                      />
                      <View style={styles.View_I23_3520_8_1101}>
                        <Text style={styles.Text_I23_3520_8_1101}>400%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3521}>
            <View style={styles.View_23_3522}>
              <View style={styles.View_23_3523}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6c/7ce6/377997030587b4c703c525dd5b99ca7a"
                  }}
                  style={styles.ImageBackground_23_3524}
                />
                <View style={styles.View_23_3525}>
                  <Text style={styles.Text_23_3525}>Play</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_23_3526}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b18/f8a4/9d2755b8a811f7e0cac094c53e114c20"
                }}
                style={styles.ImageBackground_23_3527}
              />
              <View style={styles.View_23_3528}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb18/7635/1f69b8903e6684430671559893b6fbda"
                  }}
                  style={styles.ImageBackground_23_3529}
                />
                <View style={styles.View_23_3530}>
                  <Text style={styles.Text_23_3530}>Play</Text>
                </View>
              </View>
              <View style={styles.View_23_3531}>
                <Text style={styles.Text_23_3531}>
                  10 dicas de quem tem experiência no assunto
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3532}>
            <View style={styles.View_23_3533}>
              <View style={styles.View_23_3534} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b541/d6ad/73075dd307e815f9980df0d0946bfd34"
                }}
                style={styles.ImageBackground_23_3535}
              />
              <View style={styles.View_23_3536} />
              <View style={styles.View_23_3537}>
                <View style={styles.View_23_3538}>
                  <Text style={styles.Text_23_3538}>Respeite a lei</Text>
                </View>
                <View style={styles.View_23_3539}>
                  <Text style={styles.Text_23_3539}>
                    Antes de tudo, respeitar a lei é fundamental. As normas de
                    trânsito existem para garantir a sua segurança e um trânsito
                    harmonioso. Todas as nossas dicas abaixo são baseadas não só
                    nas melhores práticas, mas também nas leis vigentes.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3540}>
            <TouchableOpacity
              style={styles.TouchableOpacity_23_3541}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("21_2746"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1635/36ba/34218cdd2484d89eb4d83bfc3f16f12b"
                }}
                style={styles.ImageBackground_23_3542}
              />
              <View style={styles.View_23_3543}>
                <Text style={styles.Text_23_3543}>CHEVRON-LEFT</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_23_3544}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("23_3577"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1635/36ba/34218cdd2484d89eb4d83bfc3f16f12b"
                }}
                style={styles.ImageBackground_23_3545}
              />
              <View style={styles.View_23_3546}>
                <Text style={styles.Text_23_3546}>chevron-right</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View_23_3547}>
            <View style={styles.View_23_3548}>
              <View style={styles.View_23_3549} />
              <View style={styles.View_23_3550}>
                <View style={styles.View_23_3551}>
                  <Text style={styles.Text_23_3551}>
                    Dicas de Segurança no trânsito.
                  </Text>
                </View>
                <View style={styles.View_23_3552}>
                  <Text style={styles.Text_23_3552}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant hac habitant malesuada cursus blandit,
                    augue commodo sagittis elit justo sem congue dolor, orci
                    senectus tempor vestibulum feugiat bibendum nibh. aliquam
                    placerat amet tellus lacus elit nibh rhoncus iaculis ante,
                    morbi suscipit pellentesque{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_29_4160}>
          <View style={styles.View_29_4159}>
            <View style={styles.View_29_4158}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baba/9bb9/96f0e44a4643d18244ecf65ad307bef1"
                }}
                style={styles.ImageBackground_23_3469}
              />
              <View style={styles.View_23_3470}>
                <Text style={styles.Text_23_3470}>
                  molestie odio id odio malesuada hendrerit nostra ante hac
                  elementum diam viverra.
                </Text>
              </View>
            </View>
            <View style={styles.View_23_3471}>
              <View style={styles.View_23_3472}>
                <Text style={styles.Text_23_3472}>Assessórios</Text>
              </View>
              <View style={styles.View_23_3473}>
                <Text style={styles.Text_23_3473}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_3474}>
            <View style={styles.View_23_3475}>
              <Text style={styles.Text_23_3475}>2. Lorem ipsum</Text>
            </View>
            <View style={styles.View_23_3476}>
              <Text style={styles.Text_23_3476}>
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
          <View style={styles.View_23_3477}>
            <View style={styles.View_23_3478}>
              <View style={styles.View_23_3479}>
                <Text style={styles.Text_23_3479}>1. Lorem ipsum</Text>
              </View>
              <View style={styles.View_23_3480}>
                <Text style={styles.Text_23_3480}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_23_3481}>
              <View style={styles.View_23_3482}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_23_3483}
                />
                <View style={styles.View_23_3484}>
                  <Text style={styles.Text_23_3484}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_23_3485}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_23_3486}
                />
                <View style={styles.View_23_3487}>
                  <Text style={styles.Text_23_3487}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_23_3488}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_23_3489}
                />
                <View style={styles.View_23_3490}>
                  <Text style={styles.Text_23_3490}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_23_3491}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_23_3492}
                />
                <View style={styles.View_23_3493}>
                  <Text style={styles.Text_23_3493}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_23_3494}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_23_3495}
                />
                <View style={styles.View_23_3496}>
                  <Text style={styles.Text_23_3496}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_23_3497}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_23_3498}
                />
                <View style={styles.View_23_3499}>
                  <Text style={styles.Text_23_3499}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_23_3500}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("20_42818"))
        }
      >
        <View style={styles.View_23_3501} />
        <View style={styles.View_23_3502}>
          <View style={styles.View_23_3503}>
            <Text style={styles.Text_23_3503}>
              Lição 1 - iFood Decola: embarque no aprendizado
            </Text>
          </View>
          <View style={styles.View_23_3504}>
            <Text style={styles.Text_23_3504}>chevron-up</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_35_5061}>
        <View style={styles.View_35_5062} />
        <View style={styles.View_35_5063}>
          <View style={styles.View_35_5064}>
            <View style={styles.View_35_5065}>
              <Text style={styles.Text_35_5065}>Lição 3 de 4</Text>
            </View>
            <View style={styles.View_35_5066}>
              <Text style={styles.Text_35_5066}>Desenvolvimento pessoal</Text>
            </View>
          </View>
          <View style={styles.View_35_5067}>
            <View style={styles.View_35_5068}>
              <View style={styles.View_35_5069}>
                <Text style={styles.Text_35_5069}>Ética profissional</Text>
              </View>
              <View style={styles.View_35_5070}>
                <Text style={styles.Text_35_5070}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5071}>
              <View style={styles.View_35_5072}>
                <View style={styles.View_35_5073}>
                  <Text style={styles.Text_35_5073}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5074}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5075}
                  />
                  <View style={styles.View_35_5076}>
                    <Text style={styles.Text_35_5076}>1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5077}>
                <View style={styles.View_35_5078}>
                  <Text style={styles.Text_35_5078}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5079}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5080}
                  />
                  <View style={styles.View_35_5081}>
                    <Text style={styles.Text_35_5081}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5082}>
                <View style={styles.View_35_5083}>
                  <Text style={styles.Text_35_5083}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5084}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5085}
                  />
                  <View style={styles.View_35_5086}>
                    <Text style={styles.Text_35_5086}>3</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_35_5087}>
                <View style={styles.View_35_5088}>
                  <Text style={styles.Text_35_5088}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_35_5089}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_35_5090}
                  />
                  <View style={styles.View_35_5091}>
                    <Text style={styles.Text_35_5091}>4</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_35_5092}>
              <View style={styles.View_35_5093}>
                <Text style={styles.Text_35_5093}>Resolução de problemas</Text>
              </View>
              <View style={styles.View_35_5094}>
                <Text style={styles.Text_35_5094}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5095}>
              <View style={styles.View_35_5096}>
                <View style={styles.View_35_5097}>
                  <View style={styles.View_35_5098} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d2/9d88/35e0abd360d11d2e3796df331b345614"
                    }}
                    style={styles.ImageBackground_35_5099}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b8/18cb/10459a7057d972d21091f8c97ffac2cb"
                    }}
                    style={styles.ImageBackground_35_5100}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a5b/9cfb/18c3fbacf7742311be88de5bb8e4c430"
                    }}
                    style={styles.ImageBackground_35_5101}
                  />
                </View>
                <View style={styles.View_35_5102} />
              </View>
              <View style={styles.View_35_5103}>
                <View style={styles.View_35_5104}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829f/11d7/11063cd8a595947c631721f8acb503c5"
                    }}
                    style={styles.ImageBackground_35_5105}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bd/78f6/46ea9a46e5c3065ac186fe6f74d73fc9"
                  }}
                  style={styles.ImageBackground_35_5107}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4f/d6a9/18c9f4b08f6d343531f0eaaea025610b"
                  }}
                  style={styles.ImageBackground_35_5110}
                />
              </View>
              <View style={styles.View_35_5113}>
                <View style={styles.View_35_5114} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2715/05da/9d06ba0bfd00a93dee6c10a8b7c8ad2b"
                  }}
                  style={styles.ImageBackground_35_5115}
                />
                <View style={styles.View_35_5120}>
                  <Text style={styles.Text_35_5120}>2:50</Text>
                </View>
                <View style={styles.View_35_5121}>
                  <Text style={styles.Text_35_5121}>5:20</Text>
                </View>
                <View style={styles.View_35_5122} />
                <View style={styles.View_35_5123} />
              </View>
            </View>
            <View style={styles.View_35_5124}>
              <Text style={styles.Text_35_5124}>
                molestie odio id odio malesuada hendrerit nostra, ante hac
                elementum diam viverra taciti duis purus leo purus dolor, nulla
                enim commodo phasellus{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5125} />
        </View>
        <View style={styles.View_35_5126}>
          <TouchableOpacity
            style={styles.TouchableOpacity_35_5127}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("31_4522"))
            }
          />
          <View style={styles.View_35_5128}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501e/e426/b44f18f2cb69a4e9abc590d8b21d5efb"
              }}
              style={styles.ImageBackground_35_5129}
            />
          </View>
          <View style={styles.View_35_5133}>
            <View style={styles.View_35_5134}>
              <Text style={styles.Text_35_5134}>
                “ Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim”
              </Text>
            </View>
            <View style={styles.View_35_5135}>
              <Text style={styles.Text_35_5135}>- Sharon Salzberg</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_35_5136}>
          <View style={styles.View_35_5137}>
            <View style={styles.View_35_5138}>
              <Text style={styles.Text_35_5138}>Verdadeiro ou falso</Text>
            </View>
            <View style={styles.View_35_5139}>
              <Text style={styles.Text_35_5139}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5140}>
            <TouchableOpacity
              style={styles.TouchableOpacity_35_5141}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("31_4481"))
              }
            >
              <View style={styles.View_I35_5141_31_4477} />
              <View style={styles.View_I35_5141_31_4478}>
                <Text style={styles.Text_I35_5141_31_4478}>Verdadeiro</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_35_5142}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("31_4481"))
              }
            >
              <View style={styles.View_I35_5142_31_4477} />
              <View style={styles.View_I35_5142_31_4478}>
                <Text style={styles.Text_I35_5142_31_4478}>Falso</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_35_5143}>
          <View style={styles.View_35_5144}>
            <View style={styles.View_35_5145}>
              <Text style={styles.Text_35_5145}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_35_5146}>
              <Text style={styles.Text_35_5146}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5147}>
            <View style={styles.View_35_5148}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5149}
              />
              <View style={styles.View_35_5150}>
                <Text style={styles.Text_35_5150}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5151}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5152}
              />
              <View style={styles.View_35_5153}>
                <Text style={styles.Text_35_5153}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5154}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5155}
              />
              <View style={styles.View_35_5156}>
                <Text style={styles.Text_35_5156}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5157}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5158}
              />
              <View style={styles.View_35_5159}>
                <Text style={styles.Text_35_5159}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5160}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5161}
              />
              <View style={styles.View_35_5162}>
                <Text style={styles.Text_35_5162}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_5163}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_5164}
              />
              <View style={styles.View_35_5165}>
                <Text style={styles.Text_35_5165}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_23_3505}>
        <View style={styles.View_23_3506} />
        <View style={styles.View_23_3507}>
          <View style={styles.View_23_3508}>
            <Text style={styles.Text_23_3508}>bars</Text>
          </View>
        </View>
        <View style={styles.View_23_3509}>
          <Text style={styles.Text_23_3509}>
            iFood Decola: embarque no aprendizado
          </Text>
        </View>
        <View style={styles.View_23_3510}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1f3/dd0c/61574d080cc747e58bdb5df6d048a838"
            }}
            style={styles.ImageBackground_23_3511}
          />
          <View style={styles.View_23_3512}>
            <Text style={styles.Text_23_3512}>times</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_23_3513}>
        <View style={styles.View_23_3514} />
        <View style={styles.View_23_3515} />
      </View>
      <View style={styles.View_35_5390}>
        <View style={styles.View_35_5391}>
          <View style={styles.View_35_5392}>
            <Text style={styles.Text_35_5392}>Lição 1 de 4</Text>
          </View>
          <View style={styles.View_35_5393}>
            <Text style={styles.Text_35_5393}>
              iFood Decola: embarque no aprendizado
            </Text>
          </View>
        </View>
        <View style={styles.View_35_5394}>
          <View style={styles.View_35_5395}>
            <View style={styles.View_35_5396}>
              <View style={styles.View_35_5397}>
                <View style={styles.View_35_5398} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d2/9d88/35e0abd360d11d2e3796df331b345614"
                  }}
                  style={styles.ImageBackground_35_5399}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b8/18cb/10459a7057d972d21091f8c97ffac2cb"
                  }}
                  style={styles.ImageBackground_35_5400}
                />
              </View>
              <View style={styles.View_35_5401} />
            </View>
            <View style={styles.View_35_5402}>
              <View style={styles.View_35_5403}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829f/11d7/11063cd8a595947c631721f8acb503c5"
                  }}
                  style={styles.ImageBackground_35_5404}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bd/78f6/46ea9a46e5c3065ac186fe6f74d73fc9"
                }}
                style={styles.ImageBackground_35_5406}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4f/d6a9/18c9f4b08f6d343531f0eaaea025610b"
                }}
                style={styles.ImageBackground_35_5409}
              />
            </View>
            <View style={styles.View_35_5412}>
              <View style={styles.View_35_5413} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2715/05da/9d06ba0bfd00a93dee6c10a8b7c8ad2b"
                }}
                style={styles.ImageBackground_35_5414}
              />
              <View style={styles.View_35_5419}>
                <Text style={styles.Text_35_5419}>2:50</Text>
              </View>
              <View style={styles.View_35_5420}>
                <Text style={styles.Text_35_5420}>5:20</Text>
              </View>
              <View style={styles.View_35_5421} />
              <View style={styles.View_35_5422} />
            </View>
          </View>
          <View style={styles.View_35_5423}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4a8/c022/c04ade3ea8ded523250b3371ff168e33"
              }}
              style={styles.ImageBackground_35_5424}
            />
            <View style={styles.View_35_5425} />
            <View style={styles.View_35_5426}>
              <View style={styles.View_35_5427}>
                <Text style={styles.Text_35_5427}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia{" "}
                </Text>
              </View>
              <View style={styles.View_35_5428}>
                <Text style={styles.Text_35_5428}>- Lorem ipsum </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_35_5429}>
            <View style={styles.View_35_5430}>
              <Text style={styles.Text_35_5430}>O que é o iFood decola?</Text>
            </View>
            <View style={styles.View_35_5431}>
              <Text style={styles.Text_35_5431}>
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
        <View style={styles.View_35_5432}>
          <View style={styles.View_35_5433}>
            <View style={styles.View_35_5434}>
              <Text style={styles.Text_35_5434}>Sobre o ifood </Text>
            </View>
            <View style={styles.View_35_5435}>
              <Text style={styles.Text_35_5435}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_5436}>
            <View style={styles.View_35_5437}>
              <View style={styles.View_35_5438}>
                <Text style={styles.Text_35_5438}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5439}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5439_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5440}>
              <View style={styles.View_35_5441}>
                <Text style={styles.Text_35_5441}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5442}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5442_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5443}>
              <View style={styles.View_35_5444}>
                <Text style={styles.Text_35_5444}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5445}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5445_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_5446}>
              <View style={styles.View_35_5447}>
                <Text style={styles.Text_35_5447}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_5448}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_5448_21_2707} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.View_35_5449}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a5b/9cfb/18c3fbacf7742311be88de5bb8e4c430"
            }}
            style={styles.ImageBackground_35_5450}
          />
          <View style={styles.View_35_5451}>
            <Text style={styles.Text_35_5451}>
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
  TouchableOpacity_23_3429: {
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
  View_23_3430: {
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
  View_23_3431: {
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
  View_23_3432: {
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
  Text_23_3432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3433: {
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
  Text_23_3433: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4161: {
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
  View_29_4162: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("355%"),
    minHeight: hp("355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_29_4157: {
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
  View_23_3423: {
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
  View_23_3424: {
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
  Text_23_3424: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3425: {
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
  Text_23_3425: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3426: {
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
  View_23_3427: {
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
  Text_23_3427: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3428: {
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
  Text_23_3428: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3434: {
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
  View_23_3516: {
    width: wp("197%"),
    minWidth: wp("197%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%")
  },
  View_23_3517: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("120%"),
    top: hp("4%")
  },
  View_23_3518: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3519: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 233, 218, 1)"
  },
  View_23_3520: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_3520_8_1078: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 93, 105, 1)"
  },
  View_I23_3520_8_1079: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  View_I23_3520_8_1080: {
    width: wp("67%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I23_3520_8_1080: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3520_8_1081: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  TouchableOpacity_I23_3520_8_1082: {
    width: wp("67%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3520_8_1083: {
    width: wp("67%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3520_8_1084: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I23_3520_8_1085: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3520_8_1086: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_I23_3520_8_1086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3520_8_1087: {
    width: wp("67%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3520_8_1088: {
    width: wp("67%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3520_8_1089: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I23_3520_8_1090: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3520_8_1091: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_I23_3520_8_1091: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3520_8_1092: {
    width: wp("67%"),
    height: hp("9%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3520_8_1093: {
    width: wp("67%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3520_8_1094: {
    width: wp("19%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I23_3520_8_1095: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3520_8_1096: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_I23_3520_8_1096: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_3520_8_1097: {
    width: wp("67%"),
    height: hp("9%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3520_8_1098: {
    width: wp("67%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.10000000149011612
  },
  View_I23_3520_8_1099: {
    width: wp("19%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I23_3520_8_1100: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I23_3520_8_1101: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_I23_3520_8_1101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3521: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("106%"),
    top: hp("2%")
  },
  View_23_3522: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("28%")
  },
  View_23_3523: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_3524: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3525: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_23_3525: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3526: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_3527: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3528: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("28%")
  },
  ImageBackground_23_3529: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_3530: {
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
  Text_23_3530: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3531: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_23_3531: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3532: {
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
  View_23_3533: {
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
  View_23_3534: {
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
  ImageBackground_23_3535: {
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
  View_23_3536: {
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
  View_23_3537: {
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
  View_23_3538: {
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
  Text_23_3538: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3539: {
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
  Text_23_3539: {
    color: "rgba(241, 241, 241, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3540: {
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
  TouchableOpacity_23_3541: {
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
  ImageBackground_23_3542: {
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
  View_23_3543: {
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
  Text_23_3543: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_3544: {
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
  ImageBackground_23_3545: {
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
  View_23_3546: {
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
  Text_23_3546: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3547: {
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
  View_23_3548: {
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
  View_23_3549: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 1, 27, 1)"
  },
  View_23_3550: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%")
  },
  View_23_3551: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_3551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3552: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_23_3552: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4160: {
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
  View_29_4159: {
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
  View_29_4158: {
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
  ImageBackground_23_3469: {
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
  View_23_3470: {
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
  Text_23_3470: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3471: {
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
  View_23_3472: {
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
  Text_23_3472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3473: {
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
  Text_23_3473: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3474: {
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
  View_23_3475: {
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
  Text_23_3475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3476: {
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
  Text_23_3476: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3477: {
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
  View_23_3478: {
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
  View_23_3479: {
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
  Text_23_3479: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3480: {
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
  Text_23_3480: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3481: {
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
  View_23_3482: {
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
  ImageBackground_23_3483: {
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
  View_23_3484: {
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
  Text_23_3484: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3485: {
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
  ImageBackground_23_3486: {
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
  View_23_3487: {
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
  Text_23_3487: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3488: {
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
  ImageBackground_23_3489: {
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
  View_23_3490: {
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
  Text_23_3490: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3491: {
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
  ImageBackground_23_3492: {
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
  View_23_3493: {
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
  Text_23_3493: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3494: {
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
  ImageBackground_23_3495: {
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
  View_23_3496: {
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
  Text_23_3496: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3497: {
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
  ImageBackground_23_3498: {
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
  View_23_3499: {
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
  Text_23_3499: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_3500: {
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
  View_23_3501: {
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
  View_23_3502: {
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
  View_23_3503: {
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
  Text_23_3503: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3504: {
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
  Text_23_3504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5061: {
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
  View_35_5062: {
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
  View_35_5063: {
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
  View_35_5064: {
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
  View_35_5065: {
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
  Text_35_5065: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5066: {
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
  Text_35_5066: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5067: {
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
  View_35_5068: {
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
  View_35_5069: {
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
  Text_35_5069: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5070: {
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
  Text_35_5070: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5071: {
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
  View_35_5072: {
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
  View_35_5073: {
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
  Text_35_5073: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5074: {
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
  ImageBackground_35_5075: {
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
  View_35_5076: {
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
  Text_35_5076: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5077: {
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
  View_35_5078: {
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
  Text_35_5078: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5079: {
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
  ImageBackground_35_5080: {
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
  View_35_5081: {
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
  Text_35_5081: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5082: {
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
  View_35_5083: {
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
  Text_35_5083: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5084: {
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
  ImageBackground_35_5085: {
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
  View_35_5086: {
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
  Text_35_5086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5087: {
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
  View_35_5088: {
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
  Text_35_5088: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5089: {
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
  ImageBackground_35_5090: {
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
  View_35_5091: {
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
  Text_35_5091: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5092: {
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
  View_35_5093: {
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
  Text_35_5093: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5094: {
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
  Text_35_5094: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5095: {
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
  View_35_5096: {
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
  View_35_5097: {
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
  View_35_5098: {
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
  ImageBackground_35_5099: {
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
  ImageBackground_35_5100: {
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
  ImageBackground_35_5101: {
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
  View_35_5102: {
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
  View_35_5103: {
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
  View_35_5104: {
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
  ImageBackground_35_5105: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_35_5107: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_5110: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5113: {
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
  View_35_5114: {
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
  ImageBackground_35_5115: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_35_5120: {
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
  Text_35_5120: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5121: {
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
  Text_35_5121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5122: {
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
  View_35_5123: {
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
  View_35_5124: {
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
  Text_35_5124: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5125: {
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
  View_35_5126: {
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
  TouchableOpacity_35_5127: {
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
  View_35_5128: {
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
  ImageBackground_35_5129: {
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
  View_35_5133: {
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
  View_35_5134: {
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
  Text_35_5134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5135: {
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
  Text_35_5135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5136: {
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
  View_35_5137: {
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
  View_35_5138: {
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
  Text_35_5138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5139: {
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
  Text_35_5139: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5140: {
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
  TouchableOpacity_35_5141: {
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
  View_I35_5141_31_4477: {
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
  View_I35_5141_31_4478: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I35_5141_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5142: {
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
  View_I35_5142_31_4477: {
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
  View_I35_5142_31_4478: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I35_5142_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5143: {
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
  View_35_5144: {
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
  View_35_5145: {
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
  Text_35_5145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5146: {
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
  Text_35_5146: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5147: {
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
  View_35_5148: {
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
  ImageBackground_35_5149: {
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
  View_35_5150: {
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
  Text_35_5150: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5151: {
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
  ImageBackground_35_5152: {
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
  View_35_5153: {
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
  Text_35_5153: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5154: {
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
  ImageBackground_35_5155: {
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
  View_35_5156: {
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
  Text_35_5156: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5157: {
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
  ImageBackground_35_5158: {
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
  View_35_5159: {
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
  Text_35_5159: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5160: {
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
  ImageBackground_35_5161: {
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
  View_35_5162: {
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
  Text_35_5162: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5163: {
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
  ImageBackground_35_5164: {
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
  View_35_5165: {
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
  Text_35_5165: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3505: {
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
  View_23_3506: {
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
  View_23_3507: {
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
  View_23_3508: {
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
  Text_23_3508: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3509: {
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
  Text_23_3509: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3510: {
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
  ImageBackground_23_3511: {
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
  View_23_3512: {
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
  Text_23_3512: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_3513: {
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
  View_23_3514: {
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
  View_23_3515: {
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
  View_35_5390: {
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
  View_35_5391: {
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
  View_35_5392: {
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
  Text_35_5392: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5393: {
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
  Text_35_5393: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5394: {
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
  View_35_5395: {
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
  View_35_5396: {
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
  View_35_5397: {
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
  View_35_5398: {
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
  ImageBackground_35_5399: {
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
  ImageBackground_35_5400: {
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
  View_35_5401: {
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
  View_35_5402: {
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
  View_35_5403: {
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
  ImageBackground_35_5404: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_35_5406: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_5409: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5412: {
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
  View_35_5413: {
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
  ImageBackground_35_5414: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_35_5419: {
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
  Text_35_5419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5420: {
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
  Text_35_5420: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5421: {
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
  View_35_5422: {
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
  View_35_5423: {
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
  ImageBackground_35_5424: {
    width: wp("100%"),
    height: hp("61%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_5425: {
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
  View_35_5426: {
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
  View_35_5427: {
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
  Text_35_5427: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5428: {
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
  Text_35_5428: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5429: {
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
  View_35_5430: {
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
  Text_35_5430: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5431: {
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
  Text_35_5431: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5432: {
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
  View_35_5433: {
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
  View_35_5434: {
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
  Text_35_5434: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5435: {
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
  Text_35_5435: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_5436: {
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
  View_35_5437: {
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
  View_35_5438: {
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
  Text_35_5438: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5439: {
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
  View_I35_5439_21_2707: {
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
  View_35_5440: {
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
  View_35_5441: {
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
  Text_35_5441: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5442: {
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
  View_I35_5442_21_2707: {
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
  View_35_5443: {
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
  View_35_5444: {
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
  Text_35_5444: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5445: {
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
  View_I35_5445_21_2707: {
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
  View_35_5446: {
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
  View_35_5447: {
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
  Text_35_5447: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_5448: {
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
  View_I35_5448_21_2707: {
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
  View_35_5449: {
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
  ImageBackground_35_5450: {
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
  View_35_5451: {
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
  Text_35_5451: {
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
