import SimplePhoneMask from 'simple-phone-mask'

export default function initPhoneMask() {
  new SimplePhoneMask('.phone-mask', {
    countryCode: 'UA',
    showFlag: false,
    allowCountrySelect: false,
  });
}
