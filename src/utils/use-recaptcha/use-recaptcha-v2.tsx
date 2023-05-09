import firebase from 'firebase/app'
import { useEffect, useState } from 'react'

/*
  NOTE: remember to add the following to your pages/_document.tsx:
    <div id="recaptcha-container-wrapper">
      <div id="recaptcha-container" />
    </div>
*/

function useRecaptchaV2() {
  const [verifier, setVerifier] = useState<firebase.auth.RecaptchaVerifier>()
  useEffect(() => {
    const v = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
    })
    setVerifier(v)

    v.render()

    return () => {
      v?.clear()

      const wrapper = document.querySelector('#recaptcha-container-wrapper')
      if (wrapper) {
        wrapper.innerHTML = '<div id="recaptcha-container" />'
      }
    }
  }, [])

  return verifier
}

export default useRecaptchaV2
