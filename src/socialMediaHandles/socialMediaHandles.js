import React from 'react'
import { Component } from 'react'

import { SocialIcon } from 'react-social-icons'

import './socialMediaHandle.css'

const socialMediaHandlesLinks = {
  gitHub: 'https://github.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
  twitter: 'https://twitter.com'
}

class SocialMediaHandles extends Component {
  render() {
    return (
      <div class="social-menu">
        <ul class="social-handle-list">
          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.gitHub} />
          </li>

          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.linkedin} />
          </li>

          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.instagram} />
          </li>

          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.twitter} />
          </li>
        </ul>
      </div>
    )
  }
}

export default SocialMediaHandles
