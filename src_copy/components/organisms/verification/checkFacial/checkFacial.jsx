// React imports
import React from 'react'
import * as Styles from './checkFacial.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge, CloseIcon } from 'components/atoms/index'

// React component
const CheckFacial = () => {
    return (
        <Styles.Section>
            <article>
                <h1>Maak een foto van je gezicht</h1>
                <p>
                    We beschermen je gegevens en gebruiken de foto uitsluitend om te verifiëren of
                    jij de echte eigenaar bent van het rijbewijs. Na de verificatie verwijderen we
                    de foto direct.{' '}
                </p>
                <CloseIcon width="1.5rem" height="1.5em" />
            </article>

            <Styles.IdentityChecker></Styles.IdentityChecker>

            <Styles.BtnWrapper>
                <ButtonSecondaryLarge text="Terug" linkTo="#" />
                <ButtonPrimaryLarge text="Volgende" linkTo="#" />
            </Styles.BtnWrapper>

            {/*  Test*/}
            {/*  Test*/}
            {/*  Test*/}
            {/*  Test*/}
            {/*  Test*/}
            {/*  Test*/}
            {/*  Test*/}
            {/*  Test*/}
        </Styles.Section>
    )
}

export default CheckFacial
