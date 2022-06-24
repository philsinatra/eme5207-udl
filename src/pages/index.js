import { Link, withPrefix } from 'gatsby'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Mast, SEO } from '../components'
import { IntroStyles } from '../styles'
import Article from '../templates/Article'

export default function Home(props) {
  const data = [
    {
      img: withPrefix(
        'https://res.cloudinary.com/pjs-uxid/image/upload/v1656082165/ufl/udl/discord_lawzof.png'
      ),
      title: 'Discord',
      description:
        'Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called "servers".',
      to: '/discord',
    },
    {
      img: withPrefix(
        'https://res.cloudinary.com/pjs-uxid/image/upload/v1655824123/ufl/udl/flipgrid_ilfstk.png'
      ),
      title: 'Flipgrid',
      description:
        'Flipgrid uses simple, free video discussions to make leanring fun, fulfilling, and empowering. Millions of PreK to PhD educators, learners and families connect using Flipgrid.',
      to: '/flipgrid',
    },
    {
      img: withPrefix(
        'https://res.cloudinary.com/pjs-uxid/image/upload/v1656007389/ufl/udl/github_r4foby.png'
      ),
      title: 'GitHub',
      description:
        'GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere, offering the distributed version control and source code management functionality of Git, plus its own features.',
      to: '/github',
    },
    {
      img: withPrefix(
        'https://res.cloudinary.com/pjs-uxid/image/upload/v1656007389/ufl/udl/markdown_ubbupa.png'
      ),
      title: 'Markdown',
      description:
        'Markdown is a lightweight markup language that adds formatting elements to plain text. Markdown is a text-to-HTML conversion tool for web writers that allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML.',
      to: '/markdown',
    },

    {
      img: withPrefix(
        'https://res.cloudinary.com/pjs-uxid/image/upload/v1655997246/ufl/udl/zoom_msax9f.png'
      ),
      title: 'Zoom',
      description:
        'Zoom is a web conferencing platform used for audio an/or video conferencing. Zoom offers solutions for holding webinars, virtual events, chat sessions, virtual whiteboards and work spaces, and includes a plethora of recording tools.',
      to: '/zoom',
    },
  ]
  return (
    <>
      <SEO title="Welcome" />
      <Article pathName={props.location.pathName}>
        <Mast />
        <IntroStyles id="intro">
          <div className="contain">
            <div className="grid">
              {data.map(({ description, img, title, to }) => (
                <div className="card" key={uuidv4()}>
                  <div className="image">
                    <img src={img} alt={title} />
                  </div>
                  <div className="content">
                    <header>
                      <h3>{title}</h3>
                    </header>
                    <p>{description}</p>
                    <footer>
                      {to ? (
                        <Link className="button" to={to}>
                          Learn More
                        </Link>
                      ) : (
                        <a href="#" className="button" disabled={true}>
                          Learn More
                        </a>
                      )}
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </IntroStyles>
      </Article>
    </>
  )
}
