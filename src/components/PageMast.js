import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const PageMastStyles = styled.section`
  align-items: center;
  background: linear-gradient(45deg, hsl(222.2, 47.4%, 11.2%) 0%, #155e75 100%);
  display: flex;
  flex-direction: column;
  height: 15vh;
  justify-content: center;
  min-height: 14.25rem;
  padding: 0 3rem;

  h1 {
    color: var(--color-white);
    font-size: 1.5rem;
    font-size: clamp(2rem, 4vw, 6rem);
    margin: 0;
    position: relative;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    top: 1rem;
  }
`

const PageMast = ({ title }) => {
  return (
    <PageMastStyles>
      <Header />
      <h1>{title}</h1>
    </PageMastStyles>
  )
}

PageMast.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageMast
