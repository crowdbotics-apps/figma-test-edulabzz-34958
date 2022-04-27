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
      <View style={styles.View_31_4818}>
        <View style={styles.View_31_4819} />
        <View style={styles.View_31_4820}>
          <View style={styles.View_31_4821}>
            <View style={styles.View_31_4822}>
              <Text style={styles.Text_31_4822}>Lição 3 de 4</Text>
            </View>
            <View style={styles.View_31_4823}>
              <Text style={styles.Text_31_4823}>Desenvolvimento pessoal</Text>
            </View>
          </View>
          <View style={styles.View_31_4824}>
            <View style={styles.View_31_4825}>
              <View style={styles.View_31_4826}>
                <Text style={styles.Text_31_4826}>Ética profissional</Text>
              </View>
              <View style={styles.View_31_4827}>
                <Text style={styles.Text_31_4827}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4828}>
              <View style={styles.View_31_4829}>
                <View style={styles.View_31_4830}>
                  <Text style={styles.Text_31_4830}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_31_4831}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_31_4832}
                  />
                  <View style={styles.View_31_4833}>
                    <Text style={styles.Text_31_4833}>1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_31_4834}>
                <View style={styles.View_31_4835}>
                  <Text style={styles.Text_31_4835}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_31_4836}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_31_4837}
                  />
                  <View style={styles.View_31_4838}>
                    <Text style={styles.Text_31_4838}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_31_4839}>
                <View style={styles.View_31_4840}>
                  <Text style={styles.Text_31_4840}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_31_4841}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_31_4842}
                  />
                  <View style={styles.View_31_4843}>
                    <Text style={styles.Text_31_4843}>3</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_31_4844}>
                <View style={styles.View_31_4845}>
                  <Text style={styles.Text_31_4845}>
                    Lorem ipsum justo interdum molestie odio id odio malesuada
                    hendrerit nostra, ante hac elementum diam viverra taciti
                    duis purus leo purus dolor, nulla enim commodo phasellus
                    praesent primis lacinia consectetur vehicula. metus semper
                    blandit habitant{" "}
                  </Text>
                </View>
                <View style={styles.View_31_4846}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a601/0c6e/fc513aff8d9327b418b267edf54cb144"
                    }}
                    style={styles.ImageBackground_31_4847}
                  />
                  <View style={styles.View_31_4848}>
                    <Text style={styles.Text_31_4848}>4</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_31_4849}>
              <View style={styles.View_31_4850}>
                <Text style={styles.Text_31_4850}>Resolução de problemas</Text>
              </View>
              <View style={styles.View_31_4851}>
                <Text style={styles.Text_31_4851}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4852}>
              <View style={styles.View_31_4853}>
                <View style={styles.View_31_4854}>
                  <View style={styles.View_31_4855} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d2/9d88/35e0abd360d11d2e3796df331b345614"
                    }}
                    style={styles.ImageBackground_31_4856}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8af5/fbf4/ae872ec9f06cac7e4d6fdf6f5a4ea66c"
                    }}
                    style={styles.ImageBackground_31_4858}
                  />
                </View>
                <View style={styles.View_31_4859} />
              </View>
              <View style={styles.View_31_4860}>
                <View style={styles.View_31_4861}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829f/11d7/11063cd8a595947c631721f8acb503c5"
                    }}
                    style={styles.ImageBackground_31_4862}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bd/78f6/46ea9a46e5c3065ac186fe6f74d73fc9"
                  }}
                  style={styles.ImageBackground_31_4864}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4f/d6a9/18c9f4b08f6d343531f0eaaea025610b"
                  }}
                  style={styles.ImageBackground_31_4867}
                />
              </View>
              <View style={styles.View_31_4870}>
                <View style={styles.View_31_4871} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2715/05da/9d06ba0bfd00a93dee6c10a8b7c8ad2b"
                  }}
                  style={styles.ImageBackground_31_4872}
                />
                <View style={styles.View_31_4877}>
                  <Text style={styles.Text_31_4877}>2:50</Text>
                </View>
                <View style={styles.View_31_4878}>
                  <Text style={styles.Text_31_4878}>5:20</Text>
                </View>
                <View style={styles.View_31_4879} />
                <View style={styles.View_31_4880} />
              </View>
            </View>
            <View style={styles.View_31_4881}>
              <Text style={styles.Text_31_4881}>
                molestie odio id odio malesuada hendrerit nostra, ante hac
                elementum diam viverra taciti duis purus leo purus dolor, nulla
                enim commodo phasellus{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_31_4882} />
        </View>
        <View style={styles.View_31_4883}>
          <TouchableOpacity
            style={styles.TouchableOpacity_31_4884}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("29_4238"))
            }
          />
          <View style={styles.View_31_4885}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f143/b3a8/2ca3353e1d7157646ef8c789c3f743cd"
              }}
              style={styles.ImageBackground_31_4886}
            />
          </View>
          <View style={styles.View_31_4890}>
            <View style={styles.View_31_4891}>
              <Text style={styles.Text_31_4891}>
                “ Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim Lorem ipsum justo interdum
                molestie odio id odio malesuada”
              </Text>
            </View>
            <View style={styles.View_31_4892}>
              <Text style={styles.Text_31_4892}>- Louis Brandeis</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_31_4893}>
          <View style={styles.View_31_4894}>
            <View style={styles.View_31_4895}>
              <Text style={styles.Text_31_4895}>Verdadeiro ou falso</Text>
            </View>
            <View style={styles.View_31_4896}>
              <Text style={styles.Text_31_4896}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_31_4897}>
            <TouchableOpacity
              style={styles.TouchableOpacity_31_4898}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("31_4481"))
              }
            >
              <View style={styles.View_I31_4898_31_4477} />
              <View style={styles.View_I31_4898_31_4478}>
                <Text style={styles.Text_I31_4898_31_4478}>Verdadeiro</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_31_4899}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("31_4481"))
              }
            >
              <View style={styles.View_I31_4899_31_4477} />
              <View style={styles.View_I31_4899_31_4478}>
                <Text style={styles.Text_I31_4899_31_4478}>Falso</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_31_4900}>
          <View style={styles.View_31_4901}>
            <View style={styles.View_31_4902}>
              <Text style={styles.Text_31_4902}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_31_4903}>
              <Text style={styles.Text_31_4903}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_31_4904}>
            <View style={styles.View_31_4905}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_31_4906}
              />
              <View style={styles.View_31_4907}>
                <Text style={styles.Text_31_4907}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4908}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_31_4909}
              />
              <View style={styles.View_31_4910}>
                <Text style={styles.Text_31_4910}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4911}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_31_4912}
              />
              <View style={styles.View_31_4913}>
                <Text style={styles.Text_31_4913}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4914}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_31_4915}
              />
              <View style={styles.View_31_4916}>
                <Text style={styles.Text_31_4916}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4917}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_31_4918}
              />
              <View style={styles.View_31_4919}>
                <Text style={styles.Text_31_4919}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4920}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_31_4921}
              />
              <View style={styles.View_31_4922}>
                <Text style={styles.Text_31_4922}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_31_4923}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("35_5588"))
        }
      >
        <View style={styles.View_31_4924} />
        <View style={styles.View_31_4925}>
          <View style={styles.View_31_4926}>
            <Text style={styles.Text_31_4926}>
              Lição 4 - Responsabilidade no trânsito{" "}
            </Text>
          </View>
          <View style={styles.View_31_4927}>
            <Text style={styles.Text_31_4927}>chevron-down</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_31_4928}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("21_2746"))
        }
      >
        <View style={styles.View_31_4929} />
        <View style={styles.View_31_4930}>
          <View style={styles.View_31_4931}>
            <Text style={styles.Text_31_4931}>
              Lição 2 - Responsabilidade no trânsito{" "}
            </Text>
          </View>
          <View style={styles.View_31_4932}>
            <Text style={styles.Text_31_4932}>chevron-up</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_31_4933}>
        <View style={styles.View_31_4934} />
        <View style={styles.View_31_4935}>
          <View style={styles.View_31_4936}>
            <Text style={styles.Text_31_4936}>bars</Text>
          </View>
        </View>
        <View style={styles.View_31_4937}>
          <Text style={styles.Text_31_4937}>
            iFood Decola: embarque no aprendizado
          </Text>
        </View>
        <View style={styles.View_31_4938}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1f3/dd0c/61574d080cc747e58bdb5df6d048a838"
            }}
            style={styles.ImageBackground_31_4939}
          />
          <View style={styles.View_31_4940}>
            <Text style={styles.Text_31_4940}>times</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_4941}>
        <View style={styles.View_31_4942} />
        <View style={styles.View_31_4943} />
      </View>
      <View style={styles.View_31_4741}>
        <View style={styles.View_31_4742}>
          <View style={styles.View_31_4743}>
            <View style={styles.View_31_4744}>
              <Text style={styles.Text_31_4744}>Lição 2 de 4</Text>
            </View>
            <View style={styles.View_31_4745}>
              <Text style={styles.Text_31_4745}>
                Responsabilidade no trânsito{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_31_4746}>
            <View style={styles.View_31_4747}>
              <Text style={styles.Text_31_4747}>Leis de trânsito </Text>
            </View>
            <View style={styles.View_31_4748}>
              <Text style={styles.Text_31_4748}>
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
          <View style={styles.View_31_4749} />
        </View>
        <View style={styles.View_31_4750}>
          <View style={styles.View_31_4751}>
            <View style={styles.View_31_4752}>
              <View style={styles.View_31_4753}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f63/57db/45479fc2357b4b459b05467a039ca079"
                  }}
                  style={styles.ImageBackground_31_4754}
                />
                <View style={styles.View_31_4755}>
                  <Text style={styles.Text_31_4755}>Play</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_31_4756}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb74/c195/d44e4cf4519d0b83ec9bb367e45b4121"
                }}
                style={styles.ImageBackground_31_4757}
              />
              <View style={styles.View_31_4758}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37c5/2d02/241a40ea667c16d420ddbc70008ffe07"
                  }}
                  style={styles.ImageBackground_31_4759}
                />
                <View style={styles.View_31_4760}>
                  <Text style={styles.Text_31_4760}>Play</Text>
                </View>
              </View>
              <View style={styles.View_31_4761}>
                <Text style={styles.Text_31_4761}>
                  10 dicas de quem tem experiência no assunto
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_31_4762}>
            <View style={styles.View_31_4763}>
              <View style={styles.View_31_4764} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/523b/6f38/5a9932014898a4a684a166d7b00d9fec"
                }}
                style={styles.ImageBackground_31_4765}
              />
              <View style={styles.View_31_4766} />
              <View style={styles.View_31_4767}>
                <View style={styles.View_31_4768}>
                  <Text style={styles.Text_31_4768}>Respeite a lei</Text>
                </View>
                <View style={styles.View_31_4769}>
                  <Text style={styles.Text_31_4769}>
                    Antes de tudo, respeitar a lei é fundamental. As normas de
                    trânsito existem para garantir a sua segurança e um trânsito
                    harmonioso. Todas as nossas dicas abaixo são baseadas não só
                    nas melhores práticas, mas também nas leis vigentes.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_31_4770}>
            <View style={styles.View_31_4771}>
              <View style={styles.View_31_4772} />
              <View style={styles.View_31_4773}>
                <View style={styles.View_31_4774}>
                  <Text style={styles.Text_31_4774}>
                    Dicas de Segurança no trânsito.
                  </Text>
                </View>
                <View style={styles.View_31_4775}>
                  <Text style={styles.Text_31_4775}>
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
          <View style={styles.View_31_4776}>
            <View style={styles.View_31_4777}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1635/36ba/34218cdd2484d89eb4d83bfc3f16f12b"
                }}
                style={styles.ImageBackground_31_4778}
              />
              <View style={styles.View_31_4779}>
                <Text style={styles.Text_31_4779}>CHEVRON-LEFT</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_31_4780}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("23_3417"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1635/36ba/34218cdd2484d89eb4d83bfc3f16f12b"
                }}
                style={styles.ImageBackground_31_4781}
              />
              <View style={styles.View_31_4782}>
                <Text style={styles.Text_31_4782}>chevron-right</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_31_4783}>
          <View style={styles.View_31_4784}>
            <View style={styles.View_31_4785}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baba/9bb9/96f0e44a4643d18244ecf65ad307bef1"
                }}
                style={styles.ImageBackground_31_4786}
              />
              <View style={styles.View_31_4787}>
                <Text style={styles.Text_31_4787}>
                  molestie odio id odio malesuada hendrerit nostra ante hac
                  elementum diam viverra.
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4788}>
              <View style={styles.View_31_4789}>
                <Text style={styles.Text_31_4789}>Assessórios</Text>
              </View>
              <View style={styles.View_31_4790}>
                <Text style={styles.Text_31_4790}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_31_4791}>
            <View style={styles.View_31_4792}>
              <Text style={styles.Text_31_4792}>2. Lorem ipsum</Text>
            </View>
            <View style={styles.View_31_4793}>
              <Text style={styles.Text_31_4793}>
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
          <View style={styles.View_31_4794}>
            <View style={styles.View_31_4795}>
              <View style={styles.View_31_4796}>
                <Text style={styles.Text_31_4796}>1. Lorem ipsum</Text>
              </View>
              <View style={styles.View_31_4797}>
                <Text style={styles.Text_31_4797}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_31_4798}>
              <View style={styles.View_31_4799}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_31_4800}
                />
                <View style={styles.View_31_4801}>
                  <Text style={styles.Text_31_4801}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_31_4802}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_31_4803}
                />
                <View style={styles.View_31_4804}>
                  <Text style={styles.Text_31_4804}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_31_4805}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_31_4806}
                />
                <View style={styles.View_31_4807}>
                  <Text style={styles.Text_31_4807}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_31_4808}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_31_4809}
                />
                <View style={styles.View_31_4810}>
                  <Text style={styles.Text_31_4810}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_31_4811}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_31_4812}
                />
                <View style={styles.View_31_4813}>
                  <Text style={styles.Text_31_4813}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
              <View style={styles.View_31_4814}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                  }}
                  style={styles.ImageBackground_31_4815}
                />
                <View style={styles.View_31_4816}>
                  <Text style={styles.Text_31_4816}>
                    Lorem ipsum justo interdum
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_31_4817} />
      </View>
      <View style={styles.View_35_6444}>
        <View style={styles.View_35_6445} />
        <View style={styles.View_35_6446}>
          <View style={styles.View_35_6447}>
            <View style={styles.View_35_6448}>
              <View style={styles.View_35_6449}>
                <Text style={styles.Text_35_6449}>Lição 4 de 4</Text>
              </View>
              <View style={styles.View_35_6450}>
                <Text style={styles.Text_35_6450}>Equipamento</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_35_6451}>
            <View style={styles.View_35_6452}>
              <View style={styles.View_35_6453}>
                <View style={styles.View_35_6454} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d2/9d88/35e0abd360d11d2e3796df331b345614"
                  }}
                  style={styles.ImageBackground_35_6455}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec65/f873/38399e8f89087b75aa07d6e9d307af14"
                  }}
                  style={styles.ImageBackground_35_6456}
                />
              </View>
              <View style={styles.View_35_6457} />
            </View>
            <View style={styles.View_35_6458}>
              <View style={styles.View_35_6459}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829f/11d7/11063cd8a595947c631721f8acb503c5"
                  }}
                  style={styles.ImageBackground_35_6460}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bd/78f6/46ea9a46e5c3065ac186fe6f74d73fc9"
                }}
                style={styles.ImageBackground_35_6462}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4f/d6a9/18c9f4b08f6d343531f0eaaea025610b"
                }}
                style={styles.ImageBackground_35_6465}
              />
            </View>
            <View style={styles.View_35_6468}>
              <View style={styles.View_35_6469} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2715/05da/9d06ba0bfd00a93dee6c10a8b7c8ad2b"
                }}
                style={styles.ImageBackground_35_6470}
              />
              <View style={styles.View_35_6475}>
                <Text style={styles.Text_35_6475}>2:50</Text>
              </View>
              <View style={styles.View_35_6476}>
                <Text style={styles.Text_35_6476}>5:20</Text>
              </View>
              <View style={styles.View_35_6477} />
              <View style={styles.View_35_6478} />
            </View>
          </View>
        </View>
        <View style={styles.View_35_6479}>
          <View style={styles.View_35_6480}>
            <View style={styles.View_35_6481}>
              <Text style={styles.Text_35_6481}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_35_6482}>
              <Text style={styles.Text_35_6482}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_6483}>
            <View style={styles.View_35_6484}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_6485}
              />
              <View style={styles.View_35_6486}>
                <Text style={styles.Text_35_6486}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_6487}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_6488}
              />
              <View style={styles.View_35_6489}>
                <Text style={styles.Text_35_6489}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_6490}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_6491}
              />
              <View style={styles.View_35_6492}>
                <Text style={styles.Text_35_6492}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_6493}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_6494}
              />
              <View style={styles.View_35_6495}>
                <Text style={styles.Text_35_6495}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_6496}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_6497}
              />
              <View style={styles.View_35_6498}>
                <Text style={styles.Text_35_6498}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
            <View style={styles.View_35_6499}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a35a/9fe8/f28e1c3d74834f9f9c5bd6055f11d521"
                }}
                style={styles.ImageBackground_35_6500}
              />
              <View style={styles.View_35_6501}>
                <Text style={styles.Text_35_6501}>
                  Lorem ipsum justo interdum
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_35_6502}>
          <View style={styles.View_35_6503}>
            <View style={styles.View_35_6504}>
              <Text style={styles.Text_35_6504}>Múltipla escolha</Text>
            </View>
            <View style={styles.View_35_6505}>
              <Text style={styles.Text_35_6505}>
                Lorem ipsum justo interdum molestie odio id odio malesuada
                hendrerit nostra, ante hac elementum diam viverra taciti duis
                purus leo purus dolor, nulla enim commodo phasellus praesent
                primis lacinia consectetur vehicula. metus semper blandit
                habitant{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_35_6506}>
            <View style={styles.View_35_6507}>
              <View style={styles.View_35_6508}>
                <Text style={styles.Text_35_6508}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_6509}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_6509_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_6510}>
              <View style={styles.View_35_6511}>
                <Text style={styles.Text_35_6511}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_6512}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_6512_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_6513}>
              <View style={styles.View_35_6514}>
                <Text style={styles.Text_35_6514}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_6515}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_6515_21_2707} />
              </TouchableOpacity>
            </View>
            <View style={styles.View_35_6516}>
              <View style={styles.View_35_6517}>
                <Text style={styles.Text_35_6517}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim commodo phasellus praesent
                  primis lacinia consectetur vehicula. metus semper blandit
                  habitant{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_6518}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("21_2710"))
                }
              >
                <View style={styles.View_I35_6518_21_2707} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.View_35_6519}>
          <View style={styles.View_35_6520}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53e0/0052/737e52d1733c1545996d57170182f547"
              }}
              style={styles.ImageBackground_35_6521}
            />
            <View style={styles.View_35_6522} />
            <View style={styles.View_35_6523}>
              <View style={styles.View_35_6524}>
                <Text style={styles.Text_35_6524}>
                  “Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla”
                </Text>
              </View>
              <View style={styles.View_35_6525}>
                <Text style={styles.Text_35_6525}>- Lorem ipsum </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_35_6526}>
            <View style={styles.View_35_6527}>
              <View style={styles.View_35_6528}>
                <Text style={styles.Text_35_6528}>Verdadeiro ou falso</Text>
              </View>
              <View style={styles.View_35_6529}>
                <Text style={styles.Text_35_6529}>
                  Lorem ipsum justo interdum molestie odio id odio malesuada
                  hendrerit nostra, ante hac elementum diam viverra taciti duis
                  purus leo purus dolor, nulla enim{" "}
                </Text>
              </View>
            </View>
            <View style={styles.View_35_6530}>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_6531}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("31_4481"))
                }
              >
                <View style={styles.View_I35_6531_31_4477} />
                <View style={styles.View_I35_6531_31_4478}>
                  <Text style={styles.Text_I35_6531_31_4478}>Verdadeiro</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_35_6532}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("31_4481"))
                }
              >
                <View style={styles.View_I35_6532_31_4477} />
                <View style={styles.View_I35_6532_31_4478}>
                  <Text style={styles.Text_I35_6532_31_4478}>Falso</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("407%") },
  View_31_4818: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("366%"),
    minHeight: hp("366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  View_31_4819: {
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
  View_31_4820: {
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
  View_31_4821: {
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
  View_31_4822: {
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
  Text_31_4822: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4823: {
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
  Text_31_4823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4824: {
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
  View_31_4825: {
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
  View_31_4826: {
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
  Text_31_4826: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4827: {
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
  Text_31_4827: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4828: {
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
  View_31_4829: {
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
  View_31_4830: {
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
  Text_31_4830: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4831: {
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
  ImageBackground_31_4832: {
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
  View_31_4833: {
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
  Text_31_4833: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4834: {
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
  View_31_4835: {
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
  Text_31_4835: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4836: {
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
  ImageBackground_31_4837: {
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
  View_31_4838: {
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
  Text_31_4838: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4839: {
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
  View_31_4840: {
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
  Text_31_4840: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4841: {
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
  ImageBackground_31_4842: {
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
  View_31_4843: {
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
  Text_31_4843: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4844: {
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
  View_31_4845: {
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
  Text_31_4845: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4846: {
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
  ImageBackground_31_4847: {
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
  View_31_4848: {
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
  Text_31_4848: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4849: {
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
  View_31_4850: {
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
  Text_31_4850: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4851: {
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
  Text_31_4851: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4852: {
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
  View_31_4853: {
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
  View_31_4854: {
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
  View_31_4855: {
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
  ImageBackground_31_4856: {
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
  ImageBackground_31_4858: {
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
  View_31_4859: {
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
  View_31_4860: {
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
  View_31_4861: {
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
  ImageBackground_31_4862: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_4864: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_31_4867: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_4870: {
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
  View_31_4871: {
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
  ImageBackground_31_4872: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_31_4877: {
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
  Text_31_4877: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4878: {
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
  Text_31_4878: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4879: {
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
  View_31_4880: {
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
  View_31_4881: {
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
  Text_31_4881: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4882: {
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
  View_31_4883: {
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
  TouchableOpacity_31_4884: {
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
  View_31_4885: {
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
  ImageBackground_31_4886: {
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
  View_31_4890: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%")
  },
  View_31_4891: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_4891: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4892: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_31_4892: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4893: {
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
  View_31_4894: {
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
  View_31_4895: {
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
  Text_31_4895: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4896: {
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
  Text_31_4896: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4897: {
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
  TouchableOpacity_31_4898: {
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
  View_I31_4898_31_4477: {
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
  View_I31_4898_31_4478: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I31_4898_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_31_4899: {
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
  View_I31_4899_31_4477: {
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
  View_I31_4899_31_4478: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I31_4899_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4900: {
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
  View_31_4901: {
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
  View_31_4902: {
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
  Text_31_4902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4903: {
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
  Text_31_4903: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4904: {
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
  View_31_4905: {
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
  ImageBackground_31_4906: {
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
  View_31_4907: {
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
  Text_31_4907: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4908: {
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
  ImageBackground_31_4909: {
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
  View_31_4910: {
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
  Text_31_4910: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4911: {
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
  ImageBackground_31_4912: {
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
  View_31_4913: {
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
  Text_31_4913: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4914: {
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
  ImageBackground_31_4915: {
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
  View_31_4916: {
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
  Text_31_4916: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4917: {
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
  ImageBackground_31_4918: {
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
  View_31_4919: {
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
  Text_31_4919: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4920: {
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
  ImageBackground_31_4921: {
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
  View_31_4922: {
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
  Text_31_4922: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_31_4923: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("397%")
  },
  View_31_4924: {
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
  View_31_4925: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%")
  },
  View_31_4926: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_4926: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4927: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_31_4927: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_31_4928: {
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
  View_31_4929: {
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
  View_31_4930: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%")
  },
  View_31_4931: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_31_4931: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4932: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_4932: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4933: {
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
  View_31_4934: {
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
  View_31_4935: {
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
  View_31_4936: {
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
  Text_31_4936: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4937: {
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
  Text_31_4937: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4938: {
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
  ImageBackground_31_4939: {
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
  View_31_4940: {
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
  Text_31_4940: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4941: {
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
  View_31_4942: {
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
  View_31_4943: {
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
  View_31_4741: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("355%"),
    minHeight: hp("355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-355%")
  },
  View_31_4742: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_31_4743: {
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
  View_31_4744: {
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
  Text_31_4744: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4745: {
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
  Text_31_4745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4746: {
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
  View_31_4747: {
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
  Text_31_4747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4748: {
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
  Text_31_4748: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4749: {
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
  View_31_4750: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("83%")
  },
  View_31_4751: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%")
  },
  View_31_4752: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("26%")
  },
  View_31_4753: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_31_4754: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_31_4755: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_31_4755: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4756: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_31_4757: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_31_4758: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("26%")
  },
  ImageBackground_31_4759: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_31_4760: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_31_4760: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4761: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_31_4761: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4762: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_31_4763: {
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
  View_31_4764: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(187, 8, 16, 1)"
  },
  ImageBackground_31_4765: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("20%"),
    minHeight: hp("20%"),
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
  View_31_4766: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("20%"),
    minHeight: hp("20%"),
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
  View_31_4767: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("26%")
  },
  View_31_4768: {
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
  Text_31_4768: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4769: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_31_4769: {
    color: "rgba(241, 241, 241, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4770: {
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
  View_31_4771: {
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
  View_31_4772: {
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
  View_31_4773: {
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
  View_31_4774: {
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
  Text_31_4774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4775: {
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
  Text_31_4775: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4776: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("74%")
  },
  View_31_4777: {
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
  ImageBackground_31_4778: {
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
  View_31_4779: {
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
  Text_31_4779: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_31_4780: {
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
  ImageBackground_31_4781: {
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
  View_31_4782: {
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
  Text_31_4782: {
    color: "rgba(255, 1, 27, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4783: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("179%"),
    minHeight: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("176%")
  },
  View_31_4784: {
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
  View_31_4785: {
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
  ImageBackground_31_4786: {
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
  View_31_4787: {
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
  Text_31_4787: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4788: {
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
  View_31_4789: {
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
  Text_31_4789: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4790: {
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
  Text_31_4790: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4791: {
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
  View_31_4792: {
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
  Text_31_4792: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4793: {
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
  Text_31_4793: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4794: {
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
  View_31_4795: {
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
  View_31_4796: {
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
  Text_31_4796: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4797: {
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
  Text_31_4797: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4798: {
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
  View_31_4799: {
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
  ImageBackground_31_4800: {
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
  View_31_4801: {
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
  Text_31_4801: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4802: {
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
  ImageBackground_31_4803: {
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
  View_31_4804: {
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
  Text_31_4804: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4805: {
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
  ImageBackground_31_4806: {
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
  View_31_4807: {
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
  Text_31_4807: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4808: {
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
  ImageBackground_31_4809: {
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
  View_31_4810: {
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
  Text_31_4810: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4811: {
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
  ImageBackground_31_4812: {
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
  View_31_4813: {
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
  Text_31_4813: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4814: {
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
  ImageBackground_31_4815: {
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
  View_31_4816: {
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
  Text_31_4816: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_4817: {
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
  View_35_6444: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("354%"),
    minHeight: hp("354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("407%")
  },
  View_35_6445: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("354%"),
    minHeight: hp("354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_35_6446: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_6447: {
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
  View_35_6448: {
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
  View_35_6449: {
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
  Text_35_6449: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6450: {
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
  Text_35_6450: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6451: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_35_6452: {
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
  View_35_6453: {
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
  View_35_6454: {
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
  ImageBackground_35_6455: {
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
  ImageBackground_35_6456: {
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
  View_35_6457: {
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
  View_35_6458: {
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
  View_35_6459: {
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
  ImageBackground_35_6460: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_35_6462: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_35_6465: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_6468: {
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
  View_35_6469: {
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
  ImageBackground_35_6470: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_35_6475: {
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
  Text_35_6475: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6476: {
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
  Text_35_6476: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6477: {
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
  View_35_6478: {
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
  View_35_6479: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("52%")
  },
  View_35_6480: {
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
  View_35_6481: {
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
  Text_35_6481: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6482: {
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
  Text_35_6482: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6483: {
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
  View_35_6484: {
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
  ImageBackground_35_6485: {
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
  View_35_6486: {
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
  Text_35_6486: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6487: {
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
  ImageBackground_35_6488: {
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
  View_35_6489: {
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
  Text_35_6489: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6490: {
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
  ImageBackground_35_6491: {
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
  View_35_6492: {
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
  Text_35_6492: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6493: {
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
  ImageBackground_35_6494: {
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
  View_35_6495: {
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
  Text_35_6495: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6496: {
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
  ImageBackground_35_6497: {
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
  View_35_6498: {
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
  Text_35_6498: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6499: {
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
  ImageBackground_35_6500: {
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
  View_35_6501: {
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
  Text_35_6501: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6502: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("124%")
  },
  View_35_6503: {
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
  View_35_6504: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_6504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6505: {
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
  Text_35_6505: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6506: {
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
  View_35_6507: {
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
  View_35_6508: {
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
  Text_35_6508: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_6509: {
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
  View_I35_6509_21_2707: {
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
  View_35_6510: {
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
  View_35_6511: {
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
  Text_35_6511: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_6512: {
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
  View_I35_6512_21_2707: {
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
  View_35_6513: {
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
  View_35_6514: {
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
  Text_35_6514: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_6515: {
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
  View_I35_6515_21_2707: {
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
  View_35_6516: {
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
  View_35_6517: {
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
  Text_35_6517: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_6518: {
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
  View_I35_6518_21_2707: {
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
  View_35_6519: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249%")
  },
  View_35_6520: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_6521: {
    width: wp("100%"),
    height: hp("61%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_35_6522: {
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
  View_35_6523: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%")
  },
  View_35_6524: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_6524: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6525: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_35_6525: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6526: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("66%")
  },
  View_35_6527: {
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
  View_35_6528: {
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
  Text_35_6528: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6529: {
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
  Text_35_6529: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_6530: {
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
  TouchableOpacity_35_6531: {
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
  View_I35_6531_31_4477: {
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
  View_I35_6531_31_4478: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I35_6531_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_35_6532: {
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
  View_I35_6532_31_4477: {
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
  View_I35_6532_31_4478: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I35_6532_31_4478: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
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
