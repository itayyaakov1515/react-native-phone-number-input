import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import CountryPicker, {
  getCallingCode,
  DARK_THEME,
  DEFAULT_THEME,
  CountryModalProvider,
  Flag,
} from 'react-native-country-picker-modal';
import { PhoneNumberUtil } from 'google-libphonenumber';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Or any other icon library

const dropDown =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAi0lEQVRYR+3WuQ6AIBRE0eHL1T83FBqU5S1szdiY2NyTKcCAzU/Y3AcBXIALcIF0gRPAsehgugDEXnYQrUC88RIgfpuJ+MRrgFmILN4CjEYU4xJgFKIa1wB6Ec24FuBFiHELwIpQxa0ALUId9wAkhCnuBdQQ5ngP4I9wxXsBDyJ9m+8y/g9wAS7ABW4giBshQZji3AAAAABJRU5ErkJggg==';
const phoneUtil = PhoneNumberUtil.getInstance();

export const countries = {
  AF: '93',
  AL: '355',
  DZ: '213',
  AS: '1 684',
  AD: '376',
  AO: '244',
  AI: '1 264',
  AQ: '672',
  AG: '1 268',
  AR: '54',
  AM: '374',
  AW: '297',
  AU: '61',
  AT: '43',
  AZ: '994',
  BS: '1 242',
  BH: '973',
  BD: '880',
  BB: '1246',
  BY: '375',
  BE: '32',
  BZ: '501',
  BJ: '229',
  BM: '1441',
  BT: '975',
  BO: '591',
  BA: '387',
  BW: '267',
  BV: '47',
  BR: '55',
  IO: '246',
  VG: '1284',
  BN: '673',
  AX: '359',
  BF: '226',
  BI: '257',
  KH: '855',
  CM: '237',
  CA: '1',
  CV: '238',
  BQ: '599',
  KY: '1',
  CF: '236',
  TD: '235',
  CL: '56',
  CN: '86',
  CX: '61',
  CC: '61',
  CO: '57',
  KM: '269',
  CK: '682',
  CR: '506',
  HR: '385',
  CU: '53',
  CW: '599',
  CY: '357',
  CZ: '420',
  CD: '243',
  DK: '45',
  DJ: '253',
  DM: '1 767',
  DO: '1',
  EC: '593',
  EG: '20',
  SV: '503',
  GQ: '240',
  ER: '291',
  EE: '372',
  SZ: '268',
  ET: '251',
  FK: '500',
  FO: '298',
  FJ: '679',
  FI: '358',
  FR: '33',
  GF: '594',
  PF: '689',
  TF: '33',
  GA: '241',
  GM: '220',
  GE: '995',
  DE: '49',
  GH: '233',
  GI: '350',
  GR: '30',
  GL: '299',
  GD: '1 473',
  GP: '590',
  GU: '1 671',
  GT: '502',
  GG: '44 1481',
  GN: '224',
  GW: '245',
  GY: '592',
  HT: '509',
  HM: '61',
  HN: '504',
  HU: '36',
  IS: '354',
  IN: '91',
  ID: '62',
  IR: '98',
  IQ: '964',
  IE: '353',
  IM: '44 1624',
  IL: '972',
  IT: '39',
  CI: '225',
  JM: '1 876',
  JP: '81',
  JE: '44 1534',
  JO: '962',
  KZ: '7',
  KE: '254',
  XK: '383',
  KW: '965',
  KG: '996',
  LA: '856',
  LV: '371',
  LB: '961',
  LS: '266',
  LR: '231',
  LY: '218',
  LI: '423',
  LT: '370',
  LU: '352',
  MO: '853',
  MK: '389',
  MG: '261',
  MW: '265',
  MY: '60',
  MV: '960',
  ML: '223',
  MT: '356',
  MH: '692',
  MQ: '596',
  MR: '222',
  MU: '230',
  YT: '262',
  MX: '52',
  FM: '691',
  MD: '373',
  MC: '377',
  MN: '976',
  ME: '382',
  MS: '1 664',
  MA: '212',
  MZ: '258',
  MM: '95',
  NA: '264',
  NR: '674',
  NP: '977',
  NL: '31',
  NC: '687',
  NZ: '64',
  NI: '505',
  NE: '227',
  NG: '234',
  NU: '683',
  NF: '672',
  KP: '850',
  MP: '1 670',
  NO: '47',
  OM: '968',
  PK: '92',
  PW: '680',
  PS: '970',
  PA: '507',
  PG: '675',
  PY: '595',
  PE: '51',
  PH: '63',
  PN: '64',
  PL: '48',
  PT: '351',
  PR: '1',
  QA: '974',
  CG: '242',
  RO: '40',
  RU: '7',
  RW: '250',
  RE: '262',
  BL: '590',
  SH: '290',
  KN: '1 869',
  LC: '1 758',
  MF: '590',
  PM: '508',
  VC: '1 784',
  WS: '685',
  SM: '378',
  SA: '966',
  SN: '221',
  RS: '381',
  SC: '248',
  SL: '232',
  SG: '65',
  SX: '1 721',
  SK: '421',
  SI: '386',
  SB: '677',
  SO: '252',
  ZA: '27',
  US: '1',
  GS: '500',
  KR: '82',
  SS: '211',
  ES: '34',
  LK: '94',
  SD: '249',
  SR: '597',
  SJ: '47 79',
  SE: '46',
  CH: '41',
  SY: '963',
  TW: '886',
  TJ: '992',
  TZ: '255',
  TH: '66',
  TL: '670',
  TG: '228',
  TK: '690',
  TO: '676',
};

export default class PhoneInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      code: props.defaultCode ? undefined : '91',
      number: props.value ? props.value : props.defaultValue ? props.defaultValue : '',
      modalVisible: false,
      countryCode: props.defaultCode ? props.defaultCode : 'IL',
      disabled: props.disabled || false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.disabled !== prevState.disabled) {
      if ((nextProps.value || nextProps.value === '') && nextProps.value !== prevState.number) {
        return { disabled: nextProps.disabled, number: nextProps.value };
      }
      return { disabled: nextProps.disabled };
    }
    return null;
  }

  async componentDidMount() {
    const { defaultCode } = this.props;
    if (defaultCode) {
      const code = await getCallingCode(defaultCode);
      this.setState({ code });
    }
  }

  getCountryCode = () => {
    return this.state.countryCode;
  };

  getCallingCode = () => {
    return this.state.code;
  };

  isValidNumber = (number) => {
    try {
      const { countryCode } = this.state;
      const parsedNumber = phoneUtil.parse(number, countryCode);
      return phoneUtil.isValidNumber(parsedNumber);
    } catch (err) {
      return false;
    }
  };

  onSelect = (country) => {
    const { onChangeCountry } = this.props;
    this.setState(
      {
        countryCode: country.cca2,
        code: country.callingCode[0],
      },
      () => {
        const { onChangeFormattedText } = this.props;
        if (onChangeFormattedText) {
          if (country.callingCode[0]) {
            onChangeFormattedText(`+${country.callingCode[0]}${this.state.number}`);
          } else {
            onChangeFormattedText(this.state.number);
          }
        }
      },
    );
    if (onChangeCountry) {
      onChangeCountry(country);
    }
  };

  onChangeText = (text) => {
    this.setState({ number: text });
    const { onChangeText, onChangeFormattedText } = this.props;
    if (onChangeText) {
      onChangeText(text);
    }
    if (onChangeFormattedText) {
      const { code } = this.state;
      if (code) {
        onChangeFormattedText(text.length > 0 ? `+${code}${text}` : text);
      } else {
        onChangeFormattedText(text);
      }
    }
  };

  getNumberAfterPossiblyEliminatingZero() {
    let { number, code } = this.state;
    if (number.length > 0 && number.startsWith('0')) {
      number = number.substr(1);
      return { number, formattedNumber: code ? `+${code}${number}` : number };
    } else {
      return { number, formattedNumber: code ? `+${code}${number}` : number };
    }
  }

  renderDropdownImage = () => {
    return <Image source={{ uri: dropDown }} resizeMode="contain" style={styles.dropDownImage} />;
  };

  renderFlagButton = (props) => {
    const { layout = 'first', flagSize } = this.props;
    const { countryCode } = this.state;
    if (layout === 'second') {
      return (
        <Flag countryCode={countryCode} flagSize={flagSize ? flagSize : DEFAULT_THEME.flagSize} />
      );
    }
    return <View />;
  };

  render() {
    const {
      withShadow,
      withDarkTheme,
      codeTextStyle,
      textInputProps,
      textInputStyle,
      autoFocus,
      placeholder,
      disableArrowIcon,
      flagButtonStyle,
      containerStyle,
      textContainerStyle,
      renderDropdownImage,
      countryPickerProps = {},
      filterProps = {},
      countryPickerButtonStyle,
      layout = 'second',
    } = this.props;
    const { modalVisible, code, countryCode, number, disabled } = this.state;
    let countryCode2 = countries[countryCode];
    return (
      <CountryModalProvider>
        <View
          style={[
            styles.container,
            withShadow ? styles.shadow : {},
            containerStyle ? containerStyle : {},
            {
              width: '80%',
              height: 'auto',
              margin: 20,
              borderRadius: 10,
              borderColor: '#B8B8B8',
              borderWidth: 0.5,
              backgroundColor: 'black',
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.flagButtonView,
              layout === 'first' ? styles.flagButtonExtraWidth : {},
              flagButtonStyle ? flagButtonStyle : {},
              countryPickerButtonStyle ? countryPickerButtonStyle : {},
              { borderRightColor: '#B8B8B8', borderWidth: 0.2 },
            ]}
            disabled={disabled}
            onPress={() => this.setState({ modalVisible: true })}
          >
            <CountryPicker
              onSelect={this.onSelect}
              withEmoji
              withFilter
              withFlag
              filterProps={filterProps}
              countryCode={countryCode}
              withCallingCode
              disableNativeModal={disabled}
              visible={modalVisible}
              theme={withDarkTheme ? DARK_THEME : DEFAULT_THEME}
              renderFlagButton={this.renderFlagButton}
              onClose={() => this.setState({ modalVisible: false })}
              {...countryPickerProps}
            />
            {countryCode2 && layout === 'first' && (
              <Text
                style={[
                  styles.codeText,
                  codeTextStyle ? codeTextStyle : {},
                  { color: '#B8B8B8', fontSize: 13 },
                ]}
              >{`+${countryCode2}`}</Text>
            )}
            {!disableArrowIcon && (
              <React.Fragment>
                {renderDropdownImage ? (
                  renderDropdownImage
                ) : (
                  <Icon name="arrow-drop-down" size={24} color="#B8B8B8" />
                )}
              </React.Fragment>
            )}
          </TouchableOpacity>
          <View
            style={[
              styles.textContainer,
              { backgroundColor: 'black', borderBottomRightRadius: 10, borderTopRightRadius: 10 },
            ]}
          >
            {countryCode2 && layout === 'second' && (
              <Text
                style={[styles.codeText, { color: '#B8B8B8', fontSize: 13 }]}
              >{`+${countryCode2}`}</Text>
            )}
            <TextInput
              style={{ backgroundColor: 'black', color: '#B8B8B8', fontSize: 13 }}
              placeholder={'Phone Number'}
              placeholderTextColor="#B8B8B8"
              onChangeText={this.onChangeText}
              value={number}
              editable={disabled ? false : true}
              selectionColor={'white'}
              keyboardAppearance={withDarkTheme ? 'dark' : 'default'}
              keyboardType="number-pad"
              autoFocus={autoFocus}
              {...textInputProps}
              maxLength={15}
            />
          </View>
        </View>
      </CountryModalProvider>
    );
  }
}

export const isValidNumber = (number, countryCode) => {
  try {
    const parsedNumber = phoneUtil.parse(number, countryCode);
    return phoneUtil.isValidNumber(parsedNumber);
  } catch (err) {
    return false;
  }
};
