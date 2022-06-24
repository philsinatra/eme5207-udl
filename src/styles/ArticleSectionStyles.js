import styled from 'styled-components'

const ArticleSectionStyles = styled.section`
  background-color: #f8fafc;
  font-size: 1.1875rem;
  line-height: 1.6875rem;
  font-weight: 300;
  min-height: 75vh;
  padding: 1.5rem 0;

  @media screen and (min-width: 48em) {
    padding-top: 3rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 0;
    position: relative;
    text-align: center;
  }

  h3 {
    color: #1e293b;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin: 2.15rem 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 1.25rem 0 0;
  }

  h3 + p {
    margin-top: 0;
  }

  blockquote {
    background-color: #f1f5f9;
    box-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
    margin: 1.5rem 0;
    padding: 1.5rem;

    p {
      margin: 1.5rem 0 0;
    }

    p:first-child {
      margin-top: 0;
    }
  }

  dt {
    font-weight: bold;
    margin-top: 0.75rem;
  }

  .green {
    color: #078743;
  }

  .purple {
    color: #6f5094;
  }

  .blue {
    color: #037db8;
  }

  .contain {
    background-color: var(--color-white);

    line-height: 1.6;
    margin: 0 auto;
    max-width: 90vw;
    padding: 3rem 1.5rem;

    @media screen and (min-width: 48em) {
      max-width: 75ch;
      padding: 3rem;
    }

    > p {
      margin-top: 0;
    }

    section {
      margin-top: 6rem;
    }
  }

  .fadeBgTransparent {
    background: linear-gradient(0deg, transparent 0%, var(--color-white) 100%);
  }

  .fadeBgTransparentReverse {
    background: linear-gradient(0deg, var(--color-white) 0%, transparent 100%);
  }
`

export default ArticleSectionStyles
