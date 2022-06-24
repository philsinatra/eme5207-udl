import React from 'react'
import { PageMast, SEO } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function ScreencastPage(props) {
  return (
    <>
      <SEO title="Discord" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Discord" />
        <ArticleSectionStyles>
          <div className="contain">
            <figure style={{ marginTop: 0 }}>
              <img
                src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656082165/ufl/udl/discord_lawzof.png"
                alt="Discord logo"
              />
            </figure>
            <p>
              <a
                href="https://zoom.us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>{' '}
              is a VoIP and instant messaging social platform. Users have the
              ability to communicate with voice calls, video calls, text
              messaging, media and files in private chats or as part of
              communities called "servers".
            </p>
            <section id="swot">
              <h2>SWOT Analysis</h2>
              <h3>Strengths</h3>
              <ul>
                <li>
                  Discord is available on all major operating systems and
                  platforms. It is also accessible on all modern web browsers.
                </li>
                <li>
                  The interface and feature set is easy to use and familiar for
                  users that have used other messaging platforms.
                </li>
                <li>
                  Discord is free to use with generous media upload and server
                  limits (especially compared to competitors like Slack). Paid
                  features are available, but the free defaults are more than
                  enough for most users.
                </li>
              </ul>
              <h3>Weaknessess</h3>
              <ul>
                <li>
                  Privacy is a concern, specifically in video calls, which do
                  not use end-to-end encryption.
                </li>
                <li>
                  Audio quality is poor compared to competitors, and the
                  platform has reported issues with random call dropping.
                </li>
              </ul>
              <h3>Opportunities</h3>
              <ul>
                <li>
                  Students and instructors can chat in real-time in large or
                  small groups or individually.{' '}
                </li>
                <li>
                  Teachers can organize servers by topic, class, or project,
                  making it easy to manage information and resources.
                </li>
                <li>
                  Students can contribute to discussions and activities with
                  peers and communicate privately with each other or with
                  teachers from a single platform.
                </li>
                <li>
                  Unlimited media uploads and URL support make sharing assets
                  and resources easy.
                </li>
              </ul>
              <h3>Threats</h3>
              <ul>
                <li>
                  Discord was originally branded as a platform for gamers.
                  Integrating the platform into educational settings may be
                  politically difficult.
                </li>
                <li>
                  The real-time chat nature may pressure students to respond
                  more quickly than in forum-based scenarios.
                </li>
                <li>
                  Some features (party mode, stickers, emojis), while fun, may
                  be distracting in educational settings.
                </li>
              </ul>
            </section>
            <section id="integration-activity">
              <h2>Integration Activity</h2>
              <h3>Learning Goals</h3>
              <ul>
                <li>Understand the application interface and basic features</li>
                <li>Contribute meaningful content to the discussion prompt</li>
                <li>
                  Gain familiarity with multiple forms of interaction within the
                  platform
                </li>
              </ul>
              <h3>Pedagogical Decisions</h3>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656085043/ufl/udl/discord_continua_uibhk6.svg"
                  alt="Discord pedagogical indicators"
                />
                <figcaption>Eight Corresponding Continua</figcaption>
              </figure>
              <p>
                This activity is designed to allow students to familiarize
                themselves with the platform and to drive the conversation and
                communication. I've structured the activity as extra work
                outside of the classroom. Students should have a basic
                understanding of how the application works after completing the
                assignment and will have contributed meaningful content to a
                group discussion.{' '}
              </p>
              <p>
                The platform will foster collaboration, and students will
                naturally work as a group to advance the arguments. Significant
                additional resources are not required, but there are no limits
                to the number of resources students can reference or contribute.
              </p>
              <h3>Description</h3>
              <p>
                Students will install the application, create a user account,
                and join the class server. After reading and agreeing to the
                #server-rules, students will introduce themselves in the
                #introductions channel.
              </p>
              <p>
                The main portion of the assignment will be posting a comment,
                link, or resource in one of the topic channels. Students will
                explain the content and why they find it interesting and related
                to the topic.
              </p>
              <p>
                Each student will also respond to at least three peers using
                available media formats and response types. Students are also
                encouraged to use the emoji system to react to content
                (positively or negatively).
              </p>
              <h3>Assessment Strategies</h3>
              <p>
                Students will be assessed on their ability to complete all the
                required steps in the activity, the quality and relevance of the
                content in their initial posts, and the quality and number of
                peer responses. Satisfactory work should foster discussion and
                contribute meaningful content.
              </p>
            </section>
            <section id="curriculum-integration">
              <h2>UDL Integration</h2>
              <dl>
                <dt>
                  <span className="green">Engagement</span> Develop
                  self-assessment and reflection
                </dt>
                <dd>
                  Students will have time to consider their viewpoints and
                  reactions before responding. Reading posts from peers will
                  also motivate students to reflect on their responses deeply
                  before sharing.
                </dd>
                <dt>
                  <span className="blue">Action & Expression.</span> Facilitate
                  managing information and resources
                </dt>
                <dd>
                  Discord's server/channel system provides immediate structure
                  to topics and resources. Threaded messages further organize
                  conversations, and the built-in search functionality makes
                  returning to content easy.
                </dd>
                <dt>
                  <span className="blue">Action & Expression</span> Enhance
                  capacity for monitoring progress
                </dt>
                <dd>
                  Private messaging allows students to reach out to teachers
                  without feeling the pressure of in-person communication (in
                  front of peers). Posting quality and frequency typically
                  correlates to overall student comfort and progress throughout
                  the term and can serve as an indicator for a student that may
                  be struggling before formative assessments take place.
                </dd>
              </dl>
            </section>
            <section id="demo">
              <h2>Proficiency Demonstration</h2>
              <p>
                I have used Discord for communication within our department and
                program at Drexel for several years. Our program initially set
                up a Slack server for students and instructors to communicate
                with each other. We developed channels for each course,
                graduating class, and various topics. Unfortunately, we hit our
                limit for media uploads after only one year. The cost associated
                with upgrading all of the accounts to a pro-level was in the
                thousands (a tough sell to parents already shelling out 65K a
                year).
              </p>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656086996/ufl/udl/discord-uxid_lchaur.png"
                  alt="Discord UXID interface"
                />
                <figcaption>Drexel's UXID Discord Server</figcaption>
              </figure>
              <p>
                I moved the network to Discord, and we haven't looked back.
                Channels for general and community topics give our students an
                area to talk about random subjects. Each graduating class and
                course has its own channel, and topic-specific channels help
                organize conversations and resources based on subjects from all
                of our program's courses. I run the example integration activity
                outlined above in every one of my classes every term, and the
                results have been outstanding. Students engage with each other
                and offer wonderful resources that have helped us create a
                repository of helpful tools and articles that grows each year.
                Students who are typically quiet in class have an outlet to
                contribute thoughtfully. Many students continue to contribute
                after graduating, offering advice to current students based on
                their past experiences.
              </p>
              <p>
                Our success has led other departments in our college to set up
                their own servers. We even have one for the senior capstone
                project.
              </p>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656086995/ufl/udl/discord-seniors_pscsll.png"
                  alt="Discord senior project interface"
                />
                <figcaption>Senior Project Discord Server</figcaption>
              </figure>
            </section>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
