// React imports
import React, { useState } from 'react'
import * as Styles from './checkUserInfo.styles.js'
import { Icons, EditButton, CancelButton, Label, TextInput } from 'components/atoms/index.js'
import { VerificationButtons, SaveButton, SavedMessage } from 'components/molecules/index'
import supabase from 'db/supabase.js'
import colors from 'styles/colors.js'

// React component
const CheckUserInfo = (props) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(0)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    const [editing, setEditing] = useState(false)
    const [saved, setSaved] = useState(false)

    // This switches the editing state of
    function handleEditState() {
        if (saved) {
            handleSavedState()
        }
        setEditing((editing) => !editing)
    }

    function handleSavedState() {
        setSaved((saved) => !saved)
    }

    // Handles the actions after saving the changes, this updates the database and the local userInfo object
    const handleSave = async (event) => {
        event.preventDefault()

        let birthDate = event.target.birthDate.value
        let email = event.target.email.value
        let firstName = event.target.firstName.value
        let lastName = event.target.lastName.value
        let phoneNumber = event.target.phoneNumber.value

        await supabase
            .from('users')
            .update({
                birthDate: birthDate,
                email: email,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
            })
            .eq('userID', props.loggedinUser.userID)

        updateUser(birthDate, email, firstName, lastName, phoneNumber)
        handleEditState()
        handleSavedState()
    }

    // Updates the userInfo object with the new data from the form
    function updateUser(birthDate, email, firstName, lastName, phoneNumber) {
        props.loggedinUser.birthDate = birthDate
        props.loggedinUser.email = email
        props.loggedinUser.firstName = firstName
        props.loggedinUser.lastName = lastName
        props.loggedinUser.phoneNumber = phoneNumber
    }

    return (
        <Styles.Section>
            <header>
                <h1>Controleer je gegevens </h1>
                <p>Dit is een overzicht van je gegevens zoals die nu bij ons bekend zijn. </p>
                <Icons type="close" width="1.5rem" height="1.5em" />
            </header>

            {saved && <SavedMessage />}
            <form onSubmit={handleSave}>
                <article>
                    <p>Algemene gegevens</p>
                    {!editing ? (
                        <EditButton _callback={handleEditState} />
                    ) : (
                        <CancelButton _callback={handleEditState} fill={colors.error} />
                    )}
                </article>
                <hr />
                <article>
                    <ul>
                        {!editing ? (
                            <li>
                                <span>Voornaam</span> <span>{props.loggedinUser.firstName}</span>
                            </li>
                        ) : (
                            <>
                                <Label text="Voornaam" forId="firstName" />
                                <TextInput
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    defaultValue={props.loggedinUser.firstName}
                                />
                            </>
                        )}

                        {!editing ? (
                            <li>
                                <span>Achternaam</span> <span>{props.loggedinUser.lastName}</span>
                            </li>
                        ) : (
                            <>
                                <Label text="Achternaam" forId="lastName" />
                                <TextInput
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    defaultValue={props.loggedinUser.lastName}
                                />
                            </>
                        )}

                        {!editing ? (
                            <li>
                                <span>E-mailadres</span> <span>{props.loggedinUser.email}</span>
                            </li>
                        ) : (
                            <>
                                <Label text="E-mailadres" forId="email" />
                                <TextInput
                                    type="email"
                                    id="email"
                                    name="email"
                                    defaultValue={props.loggedinUser.email}
                                />
                            </>
                        )}

                        {!editing ? (
                            <li>
                                <span>Telefoonnummer</span>{' '}
                                <span>{props.loggedinUser.phoneNumber}</span>
                            </li>
                        ) : (
                            <>
                                <Label text="Telefoonnummer" forId="phoneNumber" />
                                <TextInput
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    defaultValue={props.loggedinUser.phoneNumber}
                                />
                            </>
                        )}

                        {!editing ? (
                            <li>
                                <span>Geboortedatum</span>{' '}
                                <span>{props.loggedinUser.birthDate}</span>
                            </li>
                        ) : (
                            <>
                                <Label text="Geboortedatum" forId="birthDate" />
                                <TextInput
                                    type="date"
                                    id="birthDate"
                                    name="birthDate"
                                    defaultValue={props.loggedinUser.birthDate}
                                />
                            </>
                        )}
                    </ul>
                </article>
                {editing && (
                    <SaveButton
                        typePrimary="btn"
                        buttonType="submit"
                        textPrimary="Opslaan"
                        linkPrimary="#"
                        onClick={handleSave}
                    />
                )}
            </form>

            {!editing && (
                <VerificationButtons
                    typeSecondary="btn"
                    typePrimary="btn"
                    textPrimary="Volgende"
                    textSecondary="Terug"
                    linkPrimary="#"
                    linkSecondary="#"
                    callbackSecondary={moveRight}
                    callbackPrimary={moveLeft}
                />
            )}
        </Styles.Section>
    )
}

export default CheckUserInfo
