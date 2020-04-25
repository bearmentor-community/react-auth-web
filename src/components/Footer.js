import React from 'react'
import styled from '@xstyled/emotion'

const FooterStyled = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #111;
  color: #fd3;
`

const Footer = () => {
  return (
    <FooterStyled>
      <small>© Copyright 2020 Azobu App. All rights reserved.</small>
    </FooterStyled>
  )
}

export default Footer
