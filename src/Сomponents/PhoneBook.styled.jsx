import styled from '@emotion/styled'

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 10px;
  border: solid 2px grey;
  border-radius: 10px;
  background-color:#7FCDCD ;
`;

export const PhonTitle = styled.h1`
  text-align: center;
`;

export const ContTitle = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  height: 30px;
  border: 2px solid transparent;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 140px;
  height: 30px;
  margin: 0 auto;
  background-color: #EFC050;
  border: none;
  border-radius: 10px;
cursor: pointer;
`
export const ContList = styled.ul`
margin: 0;
padding: 0;
  list-style: none;
`;

export const ContItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const ListBtn = styled.button`
  background-color: #EFC050;
border: none;
border-radius: 5px;
  align-self: center;
  cursor: pointer;
`;
