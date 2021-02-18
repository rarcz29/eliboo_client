import React, { useState } from 'react';
import TextInput from '../../components/common/inputs/TextInput';
import COLORS from '../../styles/colors';
import { CheckboxContainer } from './style';

const inputs = [
    ['username', 'text'],
    ['email', 'email'],
    ['password', 'password'],
    ['confirm password', 'password'],
];

const RegisterView = () => {
    const [isNewLibrary, setIsNewLibrary] = useState(true);

    const handleCkeckboxChange = () => {
        setIsNewLibrary(!isNewLibrary);
    };

    return (
        <>
            {inputs.map((input) => (
                <TextInput
                    name={input[0].split(' ')[0]}
                    type={input[1]}
                    width="80%"
                    height="40px"
                    placeholder={input[0]}
                    colorPrimary={COLORS.foreground.primary}
                    colorSecondary={COLORS.foreground.secondary}
                    borderWidth="2px"
                />
            ))}

            <CheckboxContainer>
                <input
                    type="checkbox"
                    id="scales"
                    name="createNewLibrary"
                    checked={isNewLibrary}
                    value="1"
                    onChange={handleCkeckboxChange}
                />
                <label htmlFor="scales">Create new library</label>
            </CheckboxContainer>

            {isNewLibrary || (
                <TextInput
                    name="libraryCode"
                    type="password"
                    width="80%"
                    height="40px"
                    placeholder="library code"
                    colorPrimary={COLORS.foreground.primary}
                    colorSecondary={COLORS.foreground.secondary}
                    borderWidth="2px"
                />
            )}
        </>
    );
};

export default RegisterView;
