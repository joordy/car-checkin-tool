// React imports
import React from 'react'
import * as Styles from './depositCC.styles.js'
import { Label, TextInput, ButtonPrimary } from 'components/atoms/index.js'

// React component
const DepositCC = ({ labelText, children }) => {
    return (
        <Styles.DepositForm>
            <fieldset>
                <Label text="Naam kaarthouder" />
                <TextInput type="text" id="text" name="cc_number" placeholder="John Doe" />
            </fieldset>
            <fieldset>
                <Label text="Creditcard nummer" />
                <TextInput
                    type="text"
                    id="text"
                    name="cc_number"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                />
            </fieldset>
            <fieldset>
                <div>
                    <Label text="Datum" />
                    <TextInput type="text" id="text" name="cc_number" placeholder="01/25" />
                </div>
                <div>
                    <Label text="CVC" />
                    <TextInput type="text" id="text" name="cc_number" placeholder="XXX" />
                </div>
            </fieldset>
            <ButtonPrimary type="btn" text="Betaal" width="100%" />
        </Styles.DepositForm>
    )
}

export default DepositCC
