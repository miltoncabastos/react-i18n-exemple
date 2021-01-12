import React from 'react'

import { i18n } from './translate/i18n'


const props = {
  name: "Dicas do Miltão"
}

function App() {
  return (
    <>
      <center>
        <h1>{i18n.t('head.title')}</h1>
        <h2>{i18n.t('head.subtitle')}</h2>
        <br/>
        <p>{`${i18n.t('tests.testExists')} ${i18n.exists('tests.testExists')}`}</p>
        <p>{i18n.t('tests.testWithProps', props)}</p>
        <br/>
        <button>{i18n.t('button.clickHere')}</button>
        <br/>
      </center>
    </>
  );
}

export default App;
