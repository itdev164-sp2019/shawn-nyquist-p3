import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeConsumer } from 'styled-components'

import { BaseShareButton } from './BaseShareButton'
import shareFacebookImage from '../images/share_facebook.png'

const Image = styled.img`
    ${props => props.theme.defaults.socialShareButton.img};
`

const linkTitle = 'Share this on Facebook',
    linkClassName = 'addthis_button_facebook',
    linkEventLabel = 'Facebook'

export const FacebookShareButton = props => (
    <BaseShareButton
        linkTitle={linkTitle}
        linkClassName={linkClassName}
        linkEventLabel={linkEventLabel}
        {...props}
    >
        <ThemeConsumer>
            {theme => <img src={shareFacebookImage} alt={linkTitle} />}    
        </ThemeConsumer>
    </BaseShareButton>
)

FacebookShareButton.propTypes = {
    addthisPubId: PropTypes.string.isRequired,
    googleAnalyticsId: PropTypes.string.isRequired,
    contentTitle: PropTypes.string.isRequired,
    contentImage: PropTypes.string.isRequired,
    contentDescription: PropTypes.string.isRequired,
}