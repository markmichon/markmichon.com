import React from 'react'
import Link from 'gatsby-link'
import { Article, ArticleTitle } from '../components'
import Helmet from 'react-helmet'

const About = () => (
  <Article>
    <Helmet title="Mark Michon - About" />
    <ArticleTitle>About</ArticleTitle>
    <p>Hi, my name is Mark Michon.</p>

    <h2 id="currently">Currently</h2>
    <p>
      I&#39;m a developer and designer working as an educator at{' '}
      <a href="https://fullsail.edu">Full Sail</a>. You can find my code on{' '}
      <a href="https://github.com/markmichon">Github</a>, my writing on this
      very site, and my random thoughts on{' '}
      <a href="https://twitter.com/markmichon">Twitter</a>. I&#39;m passionate
      about making holistic experiences for all users, and teaching others to do
      so.
    </p>
    <h2 id="background">Background</h2>
    <p>
      With random gaps in between, I&#39;ve been building things for the web for
      the past 15+ years. Tables, slicing, Geocities, and all the chaos and
      nonsense that has led us down the road to this wonderful platform that is
      the web. For better or worse, most of those projects have long since
      vanished. I also have a degree in what vaguely resembles the web that was.
    </p>
    <p>
      I love mentoring and teaching newcomers to the web, and I’ve had an
      opportunity to do so with a handful of companies including{' '}
      <a href="https://thinkful.com">Thinkful</a>,{' '}
      <a href="https://teamtreehouse.com">Treehouse</a>, and{' '}
      <a href="https://trydesignlab.com">Designlab</a>.
    </p>

    <h2>About this site</h2>
    <p>
      This site is undergoing a large design and rebuild. Check out the current
      details in the{' '}
      <Link to="/redesigning-in-the-open">Redesigning in the Open</Link>{' '}
      article.
    </p>
    <p>
      Hosting has been provided by the fine folks at{' '}
      <a href="http://asmallorange.com/?a_aid=mmichon">A Small Orange</a> for
      nearly a decade.{' '}
    </p>
    <h2>Say Hello.</h2>
    <p>
      I’m always looking for new projects, jobs, guest spots, and more. Feel
      free to get in touch via{' '}
      <a href="&#x6d;&#x61;&#x69;&#108;&#116;&#111;&#58;&#104;&#x65;&#x6c;&#108;&#x6f;&#64;&#109;&#x61;&#x72;&#x6b;&#x6d;&#105;&#99;&#x68;&#x6f;&#x6e;&#x2e;&#99;&#x6f;&#x6d;">
        &#101;&#109;&#x61;&#x69;&#108;
      </a>, <a href="http://twitter.com/markmichon">Twitter</a>, or{' '}
      <a href="http://linkedin.com/in/markmichon">LinkedIn</a>. For a look at
      some of the things I’m working on, head over to{' '}
      <a href="http://github.com/markmichon">GitHub</a>.
    </p>
  </Article>
)

export default About
