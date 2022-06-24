// import { withPrefix } from 'gatsby'
import React from 'react'
import { PageMast, SEO } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function MarkdownPage(props) {
  return (
    <>
      <SEO title="Markdown" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Markdown" />
        <ArticleSectionStyles>
          <div className="contain">
            <figure style={{ marginTop: 0 }}>
              <img
                src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656007389/ufl/udl/markdown_ubbupa.png"
                alt="Markdown logo"
              />
            </figure>
            <p>
              <a
                href="https://daringfireball.net/projects/markdown/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Markdown
              </a>{' '}
              is a lightweight markup language that adds formatting elements to
              plain text. Markdown is a text-to-HTML conversion tool for web
              writers that allows you to write using an easy-to-read,
              easy-to-write plain text format, then convert it to structurally
              valid HTML.
            </p>
            <section id="swot">
              <h2>SWOT Analysis</h2>
              <h3>Strengths</h3>
              <ul>
                <li>
                  Teachers can use Markdown to create multiple deliverables of
                  the same source material. A single Markdown file can generate
                  a website, document (PDF, DOCX, RTF, et cetera), note, e-book,
                  presentation, email message, and technical documentation.
                </li>
                <li>
                  Since the files are plain text, teachers (and students) can
                  open and edit them using a variety of applications instead of
                  being locked into a proprietary file format.
                </li>
                <li>
                  Markdown files can be created and formatted on any device and
                  operating system. Future proof. Applications come and go. If
                  your go-to app stops working or is unavailable, you can still
                  maintain Markdown files using any text editor.
                </li>
              </ul>
              <h3>Weaknessess</h3>
              <ul>
                <li>
                  While the syntax is not difficult to master, there is an
                  initial learning curve tied to the structure and workflow of a
                  new file format.
                </li>
                <li>
                  Despite the presence of structural elements like headings, it
                  lacks options to map element types to each other.
                </li>
                <li>
                  Markdown is intentionally simple. It is possible to hit the
                  structural limit of the built-in features quickly.
                  Multi-flavored. People have extended Markdown to include the
                  functionality they need. These other “flavours” of Markdown
                  are typically not compatible with one another.
                </li>
              </ul>
              <h3>Opportunities</h3>
              <ul>
                <li>
                  Students can easily collaborate with instructors and each
                  other in a distraction-free format, regardless of hardware and
                  software preferences.
                </li>
                <li>
                  Markdown provides a simple format for students to deliver
                  their content in modern, web-based designs without learning to
                  write code.
                </li>
              </ul>
              <h3>Threats</h3>
              <ul>
                <li>
                  It isn’t easy to introduce a new syntax or workflow into an
                  environment already using a particular system.
                </li>
                <li>
                  Some people have a hard time visualizing the result in the
                  beginning. It’s easy to sell pretty, and plain text isn’t
                  pretty.
                </li>
              </ul>
            </section>
            <section id="integration-activity">
              <h2>Integration Activity</h2>
              <h3>Learning Goals</h3>
              <ul>
                <li>Setup a Markdown file in a text editor</li>
                <li>Learn basic Markdown syntax</li>
                <li>
                  Export a Markdown file into a deliverable document format
                </li>
              </ul>
              <h3>Pedagogical Decisions</h3>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656014733/ufl/udl/markdown_continua_uuknyl.svg"
                  alt="Markdown pedagogical indicators"
                />
                <figcaption>Eight Corresponding Continua</figcaption>
              </figure>
              <p>
                This activity introduces students to Markdown syntax and the
                export process for generating a deliverable. Prior experience
                with the syntax and setup is not required. Students should feel
                comfortable expressing themselves and have the flexibility to
                content on any topic and any form of deliverable they prefer.
                Successful completion of the activity will demonstrate to
                students the power Markdown offers for documentation and source
                content writing.
              </p>
              <h3>Description</h3>
              <p>
                Based on teacher recommendations and personal research, students
                will update their preferred text editor with Markdown syntax
                support. Students will then create a Markdown file covering a
                topic of their choosing. For students struggling to select a
                topic, a personal resume is recommended. Students will
                demonstrate a basic understanding of Markdown structure and
                syntax.{' '}
              </p>
              <p>
                Once content development is complete, students will export the
                content of their file into a deliverable (media format will also
                be the student's choice). Suggested formats include PDF,
                PPTX/Keynote, and HTML.
              </p>
              <h3>Assessment Strategies</h3>
              <p>
                Students will be assessed on the quality of their Markdown file.
                Teachers will consider syntax errors and structure in the code
                quality portion of the assessment. Deliverables should be high
                quality and professional. Students must document the export
                process used to generate the deliverable from the original
                Markdown file in the submission.
              </p>
            </section>
            <section id="curriculum-integration">
              <h2>UDL Integration</h2>
              <dl>
                <dt>
                  <span className="green">Engagement.</span> Promote
                  expectations and beliefs that optimize motivation
                </dt>
                <dd>
                  Understanding the syntax should motivate students to use
                  Markdown instead of rich text formats that require proprietary
                  software. Integration with build processes should also
                  encourage students to consider how to leverage Markdown in
                  their project planning.
                </dd>
                <dt>
                  <span className="purple">Representation.</span> Offer ways of
                  customizing the display of information
                </dt>
                <dd>
                  Markdown syntax serves as a single source of truth for project
                  content. The format and presentation of the material written
                  in Markdown are potentially limitless.
                </dd>
                <dt>
                  <span className="blue">Action & Expression.</span> Support
                  planning and strategy development
                </dt>
                <dd>
                  Markdown is the default syntax for documenting programming
                  projects. The simple, lightweight nature of the syntax and
                  integration options allow for collaboration, documentation,
                  and planning throughout all phases of a project. The syntax is
                  not limited to programming projects.
                </dd>
                <dt>
                  <span className="blue">Action & Expression.</span> Optimize
                  access to tools and assitive technology
                </dt>
                <dd>
                  Markdown syntax is basic text. Viewing and editing the content
                  does not require proprietary software. Assistive technology
                  can easily access and parse Markdown content regardless of
                  operating system or device.
                </dd>
              </dl>
            </section>
          </div>
          <section id="demo">
            <div className="contain fadeBgTransparent">
              <h2>Proficiency Demonstration</h2>
              <p>
                I use Markdown for all teaching materials. I have files for my
                presentations, student exercises and assignments, and examples.
                I can export the Markdown files into several different media
                formats, which I provide to my students.
              </p>
              <p>
                The following information shows part of my workflow for
                developing multiple learning tools from a single Markdown file.
              </p>
              <p>
                The primary source of information is a text file, in this case,
                css-box-model.md. The file contains the data for my presentation
                covering the CSS Box Model topic. Here is a snippet of the
                content from the file:
              </p>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656079203/ufl/udl/md-box-model_bdfe9u.png"
                  alt="Markdown code example"
                />
              </figure>
              <p>
                I store all of the Markdown files in a repository on Github.
                Students have access to and the ability to contribute to the
                content. The text is selectable and accessible to assistive
                technology.
              </p>
            </div>
            <figure style={{ marginTop: 0 }}>
              <img
                src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656081761/ufl/udl/md-github_byqqa5.png"
                alt="Github code example"
              />
            </figure>
            <div className="contain fadeBgTransparentReverse">
              <p>
                The Markdown file is also exported as a PDF file (also provided
                to students) and read by a presentation application called
                Deckset. I use Deckset to present the content during my
                lectures. The Markdown file includes information that defines
                formatting and presentation in the slideshow. Sharing the source
                file with other instructors is simple; they can customize the
                content and presentation based on their preference.
              </p>
              <figure>
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656081245/ufl/udl/deckset-md-grid_qodlcx.png"
                  alt="Deskset slide deck"
                />
                <img
                  src="https://res.cloudinary.com/pjs-uxid/image/upload/v1656081245/ufl/udl/deckset-md-slide_lcoipm.png"
                  alt="Deckset single slide"
                />
              </figure>
              <p>
                I have a source document with a simple text file that generates
                multiple learning assets, is easily shared, accessible,
                platform-independent, and customizable 💪🏼.
              </p>
            </div>
          </section>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
