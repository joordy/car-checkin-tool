// React imports
import React from 'react'
import * as Styles from './PageOne.styles.js'
import {
    HeadingOne,
    UserCheckIcon,
    CreditcardIcon,
    QRCodeIcon,
    EyeIcon,
    EyeOffIcon,
    WarningIcon,
    SuccessIcon,
    UserIcon,
    MoreIcon,
    CloseIcon,
    EditIcon,
    CameraIcon,
    ButtonPrimaryLarge,
    ButtonPrimarySmall,
    ButtonSecondaryLarge,
    ButtonSecondarySmall,
    ButtonTertiaryMore,
    InlineButton,
} from 'components/atoms/index'

// React component
const PageOne = () => {
    return (
        <Styles.Main>
            <HeadingOne text="Page One of the" link="EuropCar project" linkTo="/two" />
            <UserCheckIcon width="2em" height="2em" opacity="0.75" />
            <CreditcardIcon width="2em" height="2em" opacity="0.75" />
            <QRCodeIcon width="2em" height="2em" opacity="0.75" />
            <ButtonPrimaryLarge text="Direct auto huren" linkTo="/two" />
            <EyeIcon width="2em" height="2em" />
            <EyeOffIcon width="2em" height="2em" />
            <WarningIcon width="2em" height="2em" />
            <SuccessIcon width="2em" height="2em" />
            <UserIcon width="2em" height="2em" fill="grey" />
            <MoreIcon width="2em" height="2em" />
            <ButtonSecondaryLarge text="Terug" linkTo="/two" />
            <CloseIcon width="2em" height="2em" />
            <EditIcon width="2em" height="2em" />
            <CameraIcon width="2em" height="2em" fill="grey" />
            <ButtonPrimaryLarge text="Start verificatie" linkTo="/two" />
            <ButtonPrimarySmall text="Volgende" linkTo="/two" />
            <ButtonSecondarySmall text="Terug" linkTo="/two" />
            <InlineButton text="Wachtwoord vergeten?" linkText="Herstellen" linkTo="/two" />
            <ButtonSecondarySmall text="Terug" linkTo="/two" /> <ButtonTertiaryMore />
        </Styles.Main>
    )
}

export default PageOne
