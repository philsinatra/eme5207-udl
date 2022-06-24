import React from 'react'
import { PageMast, SEO } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function GithubPage(props) {
  return (
    <>
      <SEO title="GitHub" />
      <Article pathName={props.location.pathName}>
        <PageMast title="GitHub" />
        <ArticleSectionStyles>
          <div className="contain">
            <figure style={{ marginTop: 0 }}>
              <img
                src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656007389/ufl/udl/github_r4foby.png"
                alt="GitHub logo"
              />
            </figure>
            <p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{' '}
              is a code hosting platform for version control and collaboration.
              It lets you and others work together on projects from anywhere.
            </p>
            <section id="swot">
              <h2>SWOT Analysis</h2>
              <h3>Strengths</h3>
              <ul>
                <li>
                  GitHub is web-based and is accessible anywhere an internet
                  connection is available.
                </li>
                <li>
                  GitHub is free. All the features outlined in this analysis are
                  available in the free user tier. Popular. GitHub is the most
                  extensive online repository system in the world. It’s back by
                  Microsoft and has a fantastic active user base.
                </li>
              </ul>
              <h3>Weaknessess</h3>
              <ul>
                <li>
                  Non-technical users may find the interface intimidating or
                  confusing.
                </li>
                <li>
                  GitHub offers private repositories, but managing access to a
                  large number of users (students) can be an undertaking.
                </li>
              </ul>
              <h3>Opportunities</h3>
              <ul>
                <li>
                  Professional environments and informal projects all benefit
                  from GitHub’s collaboration tools.
                </li>
                <li>
                  GitHub repositories act as an automatic, cloud-based backup of
                  vital project materials.
                </li>
                <li>
                  Additional related projects and add-ons add more functionality
                  to the platform. Gists let users convert one or more files
                  into a separate working repository, making it easy to share
                  and track changes like configuration files and simple scripts.
                  GitHub pages let you host static websites for free with
                  additional features available to purchase.
                </li>
              </ul>
              <h3>Threats</h3>
              <ul>
                <li>
                  GitHub only supports GIT version control. Anyone using SVN or
                  a different version control software can not use GitHub to
                  store project code.
                </li>
                <li>
                  Advanced users who activate copilot will potentially share
                  private information.
                </li>
              </ul>
            </section>
            <section id="integration-activity">
              <h2>Integration Activity</h2>
              <h3>Learning Goals</h3>
              <ul>
                <li>Clone a remote repository to a local system</li>
                <li>
                  Understand the{' '}
                  <a
                    href="https://github.com/philsinatra/IDM-T380/blob/master/instructor_materials/03-git.md#forking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    forking workflow
                  </a>{' '}
                  in a Git repository
                </li>
                <li>
                  Contribute to a repository via a pull request in the forking
                  workflow
                </li>
              </ul>
              <h3>Pedagogical Decisions</h3>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656008625/ufl/udl/github_continua_tybtrp.svg"
                  alt="GitHub pedagogical indicators"
                />
                <figcaption>Eight Corresponding Continua</figcaption>
              </figure>
              <p>
                This is the first challenge in a series of activities designed
                to introduce students to the concepts of{' '}
                <a
                  href="https://git-scm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git version control
                </a>
                , GitHub, and the{' '}
                <a
                  href="https://github.com/philsinatra/IDM-T380/blob/master/instructor_materials/03-git.md#forking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  forking workflow
                </a>
                . Prior experience with the technology or concepts in not
                expected or required. The result of the activity will increase
                student confort with the concepts and technology. Students
                should feel motivated and excited to move on to the other
                activities and challenges, each of which increases in
                difficulty.{' '}
              </p>
              <h3>Description</h3>
              <p>
                Students will create a GitHub account and install the GitHub
                deskop application on their personal system. The instructor will
                create a repository and add all students to the access list. The
                instructor will serve as the <i>integration manager</i> for the
                repository. Each student will fork the repository, add their
                name and favorite emoji to a student list, and submit their
                update back to the instructor as a pull request.
              </p>
              <h3>Assessment Strategies</h3>
              <p>
                Students will be assessed based on their ability to complete the
                steps necessary to successfully create a pull request to the
                original repository. Students will also be assessed on their
                contribution of the requested information, and ability to
                mitigate an issues related to merge conflicts.
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
                  GitHub's entire framework is built to optimize collaboration.
                  Users can work together on project source code and
                  documentation, address issues and problems using the issue
                  tracker and work together in the discussion boards to
                  elaborate on relevant topics.
                </dd>
                <dt>
                  <span className="green">Engagement.</span> Increase
                  mastery-oriented feedback
                </dt>
                <dd>
                  Code reviews and inline commenting allows teachers, peers, and
                  collaborators to provide feedback on all aspects of a project.
                </dd>
                <dt>
                  <span className="purple">Representation.</span> Illustrate
                  through muliple media
                </dt>
                <dd>
                  GitHub supports mixed media formats for documentation and
                  source code. It is also (programming) language-independent,
                  allowing users to take advantage of all features regardless of
                  the programming requirements or languages used.
                </dd>
                <dt>
                  <span className="blue">Action & Expression</span> Use multiple
                  tools for construction and composition
                </dt>
                <dd>
                  GitHub supports all modern languages and programming
                  techniques. GitHub Actions integrate seamlessly with
                  development build processes, simplifying setup and deployment
                  procedures for all users.
                </dd>
                <dt>
                  <span className="blue">Action & Expression</span> Support
                  planning and strategy development & Facilitate managing
                  information and resources
                </dt>
                <dd>
                  Built in wikis, issues, and discussion boards, along with the
                  essential version control system make GitHub capable of
                  managing all planning, strategy, and documentation aspects of
                  a project.
                </dd>
                <dt>
                  <span className="blue">Actions & Expression</span> Enhance
                  capacity for monitoring progress
                </dt>
                <dd>
                  The issue tracker and{' '}
                  <a
                    href="https://www.scrum.org/resources/what-is-scrum"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scrum
                  </a>{' '}
                  board provide updated access to all issues, tasks, and work
                  related to the project, and the status of those items
                  throughout the development and deployment.
                </dd>
              </dl>
            </section>
            <section id="demo">
              <h2>Proficiency Demonstration</h2>
              <p>
                The integration activity above is an actual activity I use in my
                development classes. The following screenshots show the
                repository I used to conduct the activity and some of the
                student responses from previous years. (<b>Note</b> I am not
                including a link to the live repository because it is private,
                regulated by Drexel University's privacy policy.)
              </p>
              <p>
                The first image shows the homepage of the activity, where
                students can review the instructions and see submissions from
                their peers.
              </p>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656010188/ufl/udl/gh-challenge-1_u6mb0z.png"
                  alt="GitHub UI showing the Git challenge README file"
                />
                <figcaption>Git challenge README file on GitHub</figcaption>
              </figure>
              <p>
                The first challenge introduces students to Git, GitHub, and the
                forking workflow. The next image shows the homepage for the
                first challenge, populated with student responses.
              </p>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656010188/ufl/udl/gh-challenge-2_grzgn7.png"
                  alt="GitHub UI showing challenge 1"
                />
                <figcaption>Challenge 1</figcaption>
              </figure>
              <p>
                Code reviews and collaboration are built into the platform.
                Students can work with their instructors and peers to resolve
                issues and submit their work. The following image shows an
                example of a student submitting their work and encountering an
                error requiring instructor feedback.
              </p>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656010188/ufl/udl/gh-challenge-3_wygynn.png"
                  alt="GitHub UI showing a pull request"
                />
                <figcaption>Example pull request</figcaption>
              </figure>
            </section>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
