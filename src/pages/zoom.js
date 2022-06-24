import React from 'react'
import { PageMast, SEO } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function ZoomPage(props) {
  return (
    <>
      <SEO title="Zoom" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Zoom" />
        <ArticleSectionStyles>
          <div className="contain">
            <figure style={{ marginTop: 0 }}>
              <img
                src="https://res.cloudinary.com/pjs-uxid/image/upload/v1655997246/ufl/udl/zoom_msax9f.png"
                alt="Zoom logo"
              />
            </figure>
            <p>
              <a
                href="https://zoom.us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zoom
              </a>{' '}
              is a web conferencing platform used for audio an/or video
              conferencing. Zoom offers solutions for holding webinars, virtual
              events, chat sessions, virtual whiteboards and work spaces, and
              includes a plethora of recording tools.
            </p>
            <section id="swot">
              <h2>SWOT Analysis</h2>
              <h3>Strengths</h3>
              <ul>
                <li>
                  Zoom uses the freemium model, allowing users to easily test
                  and get started with the software at no cost. Additional
                  features are available if users decide to pay for an upgrade.
                </li>
                <li>
                  Using Zoom is very easy. The interface is straightforward on
                  all operating systems and devices. Users can even access Zoom
                  meetings without installing the app via a web browser.
                </li>
                <li>
                  Developers added end-to-end encryption to the platform at the
                  beginning of June 2022, enhancing meeting security and
                  addressing a highly requested feature.
                </li>
              </ul>
              <h3>Weaknessess</h3>
              <ul>
                <li>
                  Security issues have plagued the company's history. Hackers
                  and{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Zoombombing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zoomboming
                  </a>{' '}
                  threaten confidential meetings.
                </li>
              </ul>
              <h3>Opportunities</h3>
              <ul>
                <li>
                  The platform includes options to record a user's screen or
                  from the device's webcam.
                </li>
                <li>
                  Teachers and students can provide narration to text-based
                  lessons and presentations, increasing comprehension.
                </li>
              </ul>
              <h3>Threats</h3>
              <ul>
                <li>
                  Alternative conferencing and screen recording software ({' '}
                  <a
                    href="https://meet.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Meet
                  </a>
                  ,{' '}
                  <a
                    href="https://teams.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsft Teams
                  </a>
                  ) can offer similar or better features at no additional cost.
                </li>
                <li>
                  The basic features available with a free account may not
                  provide teachers and students with the functionality needed
                  for an ideal workflow.
                </li>
              </ul>
            </section>
            <section id="integration-activity">
              <h2>Integration Activity</h2>
              <h3>Learning Goals</h3>
              <ul>
                <li>
                  Introduce the Zoom application interface (for unfamiliar
                  students)
                </li>
                <li>Understand recording options (camera, desktop, device)</li>
                <li>
                  Create a recording documenting a design/development software
                  or process
                </li>
              </ul>
              <h3>Pedagogical Decisions</h3>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656000624/ufl/udl/zoom_continua_vfcpox.svg"
                  alt="Zoom activity pedagogical indicators"
                />
                <figcaption>Eight Corresponding Continua</figcaption>
              </figure>
              <p>
                This activity will familiarize students with Zoom's interface
                and recording functionality. Prior experience with the
                technology is not required. Students have the flexibility to
                cover a topic within the design/development guideline. Students
                also have the flexibility to edit their recordings in a
                post-production environment if desired and can choose to include
                spoken word, caption text, or both (preferred). Additional
                resources like scripts, graphics, and demonstration storyboards
                will enhance the final product and minimize rehearsals.
              </p>
              <h3>Description</h3>
              <p>
                Students will use Zoom to create a demonstration video
                showcasing a design or development software or process from
                their workflow. The demonstration should include a recording
                from the user's device and narration with verbal instructions
                and visual support. Students can also include a narration video
                of themselves speaking as an overlay to the demonstration. Post
                recording editing and production are allowed (title slides,
                references, et cetera).
              </p>
              <h3>Assessment Strategies</h3>
              <p>
                Students will be assessed based on the quality of their video
                recording and ability to leverage Zoom's various recording
                features. The demonstrated topic must be related to the
                student's design/development workflow. The final deliverable
                must include at least one form of narration (audio/text). Post
                recording editing is optional.
              </p>
            </section>
            <section id="curriculum-integration">
              <h2>UDL Integration</h2>
              <dl>
                <dt>
                  <span className="green">Engagement.</span> Develop
                  self-assessment and reflection
                </dt>
                <dd>
                  Before recording the demonstration, students will likely
                  develop a script and storyboard outlining what they will say
                  and cover in their video. Writing a script will encourage
                  students to rehearse and evaluate their material, increasing
                  motivation to produce a high-level deliverable.
                </dd>
                <dt>
                  <span className="green">Engagement.</span> Foster
                  collaboration and community
                </dt>
                <dd>
                  Students and teachers can meet in real time in groups or
                  individually for demonstrations, lessons,
                  meetings/conferences, or social interaction.
                </dd>
                <dt>
                  <span className="purple">Representation.</span> Offer
                  alternatives for auditory/visual information
                </dt>
                <dd>
                  The video presentation, narration, and captioned text provide
                  multiple forms of delivering the material. Students can watch,
                  listen, or read the lesson.
                </dd>
                <dt>
                  <span className="purple">Representation.</span> Guide
                  information processing and visualization
                </dt>
                <dd>
                  The deliverable provides a step-by-step demonstration of the
                  lesson or topic, and the format allows learners to pause and
                  rewind as needed, enabling self-paced learning.
                </dd>
                <dt>
                  <span className="blue">Action & Expression</span> Use multiple
                  tools for construction and composition
                </dt>
                <dd>
                  Lessons can be taught through screensharing an active desktop,
                  using pre-created slides or documents, or the built-in
                  whiteboard.
                </dd>
              </dl>
            </section>
            <section id="demo">
              <h2>Proficiency Demonstration</h2>
              <p>
                To demonstrate the described activity and my proficiency with
                Zoom's recording functionality, I used Zoom to record a
                demonstration showing how to create variant components in a
                design software called{' '}
                <a
                  href="https://www.figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </a>
                .
              </p>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656002889/ufl/udl/zoom_example_cozcjq.png"
                  alt="Zoom recordign of Figma tutorial"
                />
                <figcaption>Zoom recording of Figma demonstration</figcaption>
              </figure>
              <p>
                The following video shows the screen recording created with
                Zoom. It also includes post-recording edits and the addition of
                title screens.
              </p>
              <div
                style={{
                  margin: '3rem 0',
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/482768139?h=cf75bc773a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="Screencast - Figma Variants"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </section>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
