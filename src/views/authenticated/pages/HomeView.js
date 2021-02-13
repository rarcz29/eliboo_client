import React from "react";
import TextInput from "../../../components/common/inputs/TextInput";
import Button from "../../../components/common/buttons/Button";
import COLORS from "../../../styles/colors";
import styled from "styled-components";

const StyledForm = styled.form`
    width: 100%;
`;

const InputsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 130px;
`;

const ButtonsContainer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
`;

const TmpDiv = styled.div`
    margin-top: 0.5rem;
    width: 100%;
    height: 400px;
    background: red;
`;

const inputs = ["Title", "Genre", "Author", "Bookshelf"];
const submitButtons1 = ["Add", "Search"];
const submitButtons2 = ["Add to my list", "Remove"];

const HomeView = () => {
    return (
        <>
            <StyledForm>
                <InputsContainer>
                    {inputs.map((input) => (
                        <TextInput
                            name={input}
                            width="40%"
                            height="40px"
                            placeholder={input}
                            colorPrimary={COLORS.foreground.primary}
                            colorSecondary={COLORS.foreground.secondary}
                            borderWidth="2px"
                        />
                    ))}
                </InputsContainer>
                <ButtonsContainer>
                    {submitButtons1.map((button) => (
                        <Button
                            type="submit"
                            width="30%"
                            height="45px"
                            borderRadius="1.5rem"
                            color={COLORS.foreground.primary}
                            backgroundColor={COLORS.buttons.blue}
                            highlightColor={COLORS.buttons.blueHighlighted}
                        >
                            {button}
                        </Button>
                    ))}
                </ButtonsContainer>
                <TmpDiv></TmpDiv>
                <ButtonsContainer>
                    {submitButtons2.map((button) => (
                        <Button
                            width="30%"
                            height="45px"
                            borderRadius="1.5rem"
                            color={COLORS.foreground.primary}
                            backgroundColor={COLORS.buttons.blue}
                            highlightColor={COLORS.buttons.blueHighlighted}
                        >
                            {button}
                        </Button>
                    ))}
                </ButtonsContainer>
            </StyledForm>
        </>
    );
};

export default HomeView;
