import React from 'react'
import { i18n } from './translate/i18n'

const pt = i18n.getFixedT('pt', 'translations')
const en = i18n.getFixedT('en', 'translations')

const props = { name: "Dicas do Miltão" }

function App() {
  return (
    <>
      <center>
        <h1>{i18n.t('head.title')}</h1>
        <h2>{i18n.t('head.subtitle')}</h2>
        <br/>
        <p>{`${i18n.t('tests.testExists')} ${i18n.exists('tests.testExists')}`}</p>
        <p>{i18n.t('tests.testWithProps', props)}</p>
        <p>{i18n.t(['tests.unknownKeyA', 'tests.unknownKeyB', 'tests.unknownKeyC'])}</p>
        <p>{pt('tests.englishText')}</p>
        <p>{en('tests.englishText')}</p>
        <p>{i18n.t('tests.format')}</p>
        <br/>
        <button>{i18n.t('button.clickHere')}</button>
        <br/>
      </center>
    </>
  );
}

export default App;
