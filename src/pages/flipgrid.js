import React from 'react'
import { PageMast, SEO } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function FlipGridPage(props) {
  return (
    <>
      <SEO title="Flipgrid" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Flipgrid" />
        <ArticleSectionStyles>
          <div className="contain">
            <figure style={{ marginTop: 0 }}>
              <img
                src="https://res.cloudinary.com/pjs-uxid/image/upload/v1655824123/ufl/udl/flipgrid_ilfstk.png"
                alt="Flipgrid logo"
              />
            </figure>
            <p>
              <a
                href="https://flipgrid.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flipgrid
              </a>{' '}
              is an application used to facilitate video discussions. Teachers
              can organize students into groups and then provide access to
              discussion topics. Students create their own videos as responses.
            </p>

            <section id="swot">
              <h2>SWOT Analysis</h2>
              <h3>Strengths</h3>
              <ul>
                <li>
                  The platform allows students to improve several communication
                  skills, including speaking, writing, listening, and reading.
                </li>
                <li>The application is easy to setup and use.</li>
                <li>
                  Studies have shown Flipgrid has a positive effect on social
                  engagement and helps students relate to their classmates.
                </li>
              </ul>
              <h3>Weaknessess</h3>
              <ul>
                <li>
                  The app's social media-style features can lead to
                  distractions.
                </li>
                <li>
                  The platform does not support internal grading or reporting.
                </li>
                <li>The free version only provides teachers with one grid.</li>
              </ul>
              <h3>Opportunities</h3>
              <ul>
                <li>
                  Flipgrid allows students to improve their language skills and
                  public speaking abilities. "When students see their language
                  skills improving, they develop a positive sense of their
                  self-efficacy, which in turn motivates them to put effort into
                  their learning. The more improvement they see, the more
                  invested in their learning they become." (Gallagher, Marques,
                  & Lopez, 2017)
                </li>
                <li>
                  Students can create content and respond to topics
                  asynchronously, creating a safe and low-stress learning
                  environment.
                </li>
                <li>
                  Students show higher cognitive engagement with their
                  assignments when using Flipgrid, often practicing repeatedly
                  before recording. (Mango, 2021, p. 281)
                </li>
              </ul>
              <h3>Threats</h3>
              <ul>
                <li>
                  The lack of immediate feedback is a disadvantage to using the
                  platform.
                </li>
                <li>
                  Some users may find the workflow and interface tedious to use.
                </li>
                <li>
                  Despite the ability to record privately, some students may
                  still be uncomfortable presenting their content publicly.
                </li>
              </ul>
            </section>
            <section id="integration-activity">
              <h2>Integration Activity</h2>
              <h3>Learning Goals</h3>
              <ul>
                <li>Activate existing knowledge on a topic</li>
                <li>Demonstrate an understanding of the application</li>
                <li>Increase collaboration among classmates</li>
              </ul>
              <h3>Pedagogical Decisions</h3>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1655834574/ufl/udl/flipgrid_continua_mh2l87.svg"
                  alt="Flipgrid activity pedagogical indicators"
                />
                <figcaption>Eight Corresponding Continua</figcaption>
              </figure>
              <p>
                This introductory activity is an alternative to typical
                introductions students give in person during the first week of
                classes. Prior experience with the technology is not required.
                Students should feel comfortable expressing themselves while
                familiarizing themselves with the application. The result of the
                activity will foster communication among the whole group.
                However, students will complete the initial posts and responses
                individually.
              </p>
              <h3>Description</h3>
              <p>
                Students will use Flipgrid to <b>activate prior knowledge</b> of
                a specific topic. The instructor will begin by prompting
                students to create Flipgrid video entries describing what prior
                knowledge (if any) they have on a particular topic. Students
                will record and post their initial responses before the topic is
                covered in class. Students will later reply to each other (and
                their own original posts) after the unit is covered in class.
              </p>
              <h3>Assessment Strategies</h3>
              <p>
                Students will be assessed based on participation in the initial
                response and follow-up posts. Students should respond
                professionally, making an effort to interact with the instructor
                and their classmates.
              </p>
              <p>
                Instructors will also assess the initial responses and adjust
                the unit lesson plans accordingly.
              </p>
            </section>
            <section id="curriculum-integration">
              <h2>UDL Integration</h2>
              <dl>
                <dt>
                  <span className="green">Engagement.</span> Foster
                  collaboration and community
                </dt>
                <dd>
                  The activity is designed for students to respond to each other
                  as an introduction and to share knowledge of the topic prior
                  to completing the lesson. Similar to a discussion forum, the
                  follow-up response will continue the conversation and foster
                  more interaction and communicaiton within the group.
                </dd>
                <dt>
                  <span className="green">Engagement.</span> Increase
                  mastery-oriented feedback
                </dt>
                <dd>
                  Student prior knowledge may impact the design and execution of
                  the lesson plans for the topic.
                </dd>
                <dt>
                  <span className="purple">Representation.</span> Offer
                  alternatives for information
                </dt>
                <dd>
                  The platform includes options for digesting the information in
                  video form, as well as via text and/or audio.
                </dd>
                <dt>
                  <span className="blue">Action & Expression.</span> Use
                  multiple forms of media for communication
                </dt>
                <dd>
                  The activity allows students to respond to the prompt using
                  text, speech, audio, video. Students can also use their own
                  resources in their response that can include additional forms
                  of media, e.g., images or illustrations.
                </dd>
              </dl>
            </section>
            <section id="demo">
              <h2>Proficiency Demonstration</h2>
              {/* https://flipgrid.com/b9e89840 */}
              <p>
                Here is an example of a Flipgrid prompt from an instructor's
                point of view. You will need to create a Flipgrid account to
                access the prompt.{' '}
              </p>
              <p>
                <a
                  href="https://flipgrid.com/052b59dc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hello, whad'ya know? Flipgrid activity
                </a>
              </p>
              <p>
                Here is a copy of the prompt (in case you don't want to create
                an account):
              </p>
              <blockquote>
                <p>
                  I am excited to be your instructor for the new Introduction to
                  Web Development class at Imaginary University. We will be
                  learning all about HTML and CSS in this class.{' '}
                </p>

                <p>
                  Before we start our first lesson, I'd like to learn a little
                  more about you. I'd like you to use Flipgrid to introduce
                  yourself and provide some background on what you know about
                  HTML, CSS, and web development. Don't worry if you're new to
                  these topics. Our course doesn't require any prior knowledge
                  of any of these topics.
                </p>

                <p>In your video (90 seconds or less), share:</p>
                <ul>
                  <li>🤩 How do you pronounce your name?</li>
                  <li>🔮 What is something we should know about you?</li>
                  <li>
                    👩🏼‍💻 What do you know about HTML, CSS, or web development?
                  </li>
                </ul>
              </blockquote>
            </section>
            <section id="references">
              <h2>References</h2>
              <ul>
                <li>
                  Gallagher, M. W., Marques, S. C., & Lopez, S. J. (2016). Hope
                  and the Academic Trajectory of College Students. Journal of
                  Happiness Studies, 18(2), 341–352.{' '}
                  <a
                    href="https://doi.org/10.1007/s10902-016-9727-z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.1007/s10902-016-9727-z
                  </a>
                </li>
                <li>
                  Mango, O. (2021). Flipgrid: Students’ Perceptions of its
                  Advantages and Disadvantages in the Language Classroom.
                  International Journal of Technology in Education and Science,
                  277–287.{' '}
                  <a
                    href="https://doi.org/10.46328/ijtes.195"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.46328/ijtes.195
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
