// React imports
import React from 'react'
import * as Styles from './PageTwo.styles.js'
import { HeadingOne } from 'components/atoms/index'

// React component
const PageTwo = () => {
    return (
        <Styles.Main>
            <HeadingOne text="Page Two of the" link="EuropCar project" linkTo="#" />
        </Styles.Main>
    )
}

export default PageTwo
