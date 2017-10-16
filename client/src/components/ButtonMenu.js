import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonMenu = ({ onClickCraigslist, onClickInstagram, onClickTwitter }) => (
  <div>
    <Button inverted color='purple' onClick={onClickCraigslist}>CraigsList</Button>
    <Button inverted color='red' onClick={onClickInstagram}>Instagram</Button>
    <Button inverted color='blue' onClick={onClickTwitter}>Twitter</Button>
  </div>
)

export default ButtonMenu
