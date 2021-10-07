import React, {useState} from "react";
import { Textbox } from 'react-inputs-validation';
import '../main.css';

const AngleForm = ({label, handleMainChange}) => {
    const [value, setValue] = useState({name: "", value: ""});

    const handleChange = (value) => {
        setValue({name: label, value: value});
        handleMainChange({name: label, value: value});
    }
    return (
        <>
            <label>
                <span className="angleSymbol"> &#8736; </span>
                <span className="text"> {label} </span>
                <Textbox
                    classNameInput="angelInput"
                    attributesInput={{ // Optional.
                        id: {label},
                        name: {label},
                        type: 'text',
                        placeholder: "write the angle",
                    }}
                    value={value.value}
                    onChange={handleChange}
                    validationOption={{
                        reg: /^[0-9]\d{1,3}$/,
                        regMsg: 'Write only up to 3 digits from 0 to 9 '
                    }}
                />
            </label>
        </>
    )
}

export default AngleForm;
