// React imports
import React from 'react'
import * as Styles from './PageOne.styles.js'
import { HeadingOne } from 'components/atoms/index'

// React component
const PageOne = () => {
    return (
        <Styles.Main>
            <HeadingOne text="Page One of the" link="EuropCar project" linkTo="#" />
        </Styles.Main>
    )
}

export default PageOne
