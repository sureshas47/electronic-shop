import styled from "styled-components";
const Button = styled.button`
  border: none;
  border-radius: 20px;
  width: 110px;
  height: 30px;
  font-size: medium;
  cursor: pointer;
  font-weight: 700;
  margin-top: 30px;

  :hover {
    background-color: white;
    color: black;
    text-decoration: underline darkgray;
  }
`;

export default function RootButton({ children, className }) {
  return <Button className={className}> {children} </Button>;
}
