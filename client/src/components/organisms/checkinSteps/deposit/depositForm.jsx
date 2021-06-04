// React imports
import React, { useState } from 'react'
import * as Styles from './depositForm.styles.js'
import { Icons, EditButton } from 'components/atoms/index.js'
import { VerificationButtons, DepositType } from 'components/molecules/index'

// React component
const DepositForm = () => {
    const [isOpen, setIsOpen] = useState(false)

    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    return (
        <Styles.Section>
            <header>
                <h1>Borg reservering</h1>
                <p>
                    Bij een creditcard reservering wordt er niets afgeschreven. Kies je voor iDEAL?
                    Dan wordt de borg wel meteen afgeschreven. Je krijgt het na de huurperiode
                    automatisch weer terug, mits er geen schade is.{' '}
                </p>
            </header>

            <main>
                <article>
                    <h2>Borg:</h2>
                    <p>
                        € <span>500,-</span>
                    </p>
                </article>

                <article>
                    <h2>Betaalmethode</h2>
                    <DepositType labelText="Creditcard">
                        <p>
                            Est laborum cillum nisi aliqua do enim ad sunt sunt id consequat.
                            Cupidatat dolor aliquip non sunt sit qui aliquip Lorem. Esse aute duis
                            officia adipisicing esse minim. Nisi reprehenderit minim aliqua sit et
                            consectetur sit ea mollit incididunt. Adipisicing sit eu consequat ipsum
                            proident Lorem reprehenderit.
                        </p>
                    </DepositType>
                    <DepositType labelText="iDeal">
                        <p>
                            Est laborum cillum nisi aliqua do enim ad sunt sunt id consequat.
                            Cupidatat dolor aliquip non sunt sit qui aliquip Lorem. Esse aute duis
                            officia adipisicing esse minim. Nisi reprehenderit minim aliqua sit et
                            consectetur sit ea mollit incididunt. Adipisicing sit eu consequat ipsum
                            proident Lorem reprehenderit.
                        </p>
                    </DepositType>
                </article>
            </main>

            <VerificationButtons
                typeSecondary="btn"
                typePrimary="href"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="/qr"
                linkSecondary="#"
                callbackSecondary={moveRight}
            />
        </Styles.Section>
    )
}

export default DepositForm
