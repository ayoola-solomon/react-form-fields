import React from 'react';
import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 600px;
  margin: auto;
  padding: 16px;
`;

export const StyledTextField = styled.input`
  height: 30px;
  font-size: 1em;
  border: 2px solid #ddd;
  border-radius: 4px;
  width: 250px;
  padding: 8px 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    flex: 1;
  }
`;

export const Container1 = styled.div``;

export const TextFieldContainer = styled.div`
  margin-bottom: 16px;

  p {
    margin: 0;
    color: red;
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const TextField = ({ error, ...props }) => (
  <TextFieldContainer>
    <StyledTextField {...props} />
    {error && <p>{error}</p>}
  </TextFieldContainer>
);

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #1ea7fd;
  color: #1ea7fd;
  padding: 1em 4em;
  font-size: 14px;
  cursor: pointer;
`;
