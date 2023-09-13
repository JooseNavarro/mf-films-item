import styled from "styled-components";

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardItem = styled.div<{src: string}>`
  height: 350px;
  width: 260px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  margin-bottom: 15px;
  background-image: url(${({src}) => src});
  border-radius: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-color 5s ease;
  &:hover {
    -webkit-box-shadow: 10px 10px 20px -4px rgba(255, 255, 255, 0.12);
    -moz-box-shadow: 10px 10px 20px -4px rgba(255, 255, 255, 0.12);
    box-shadow: 10px 10px 20px -4px rgba(255, 255, 255, 0.12);
    transition: background-color 0.5s ease;
  }
`;

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: white;
  padding: 10px 15px;
  justify-content: end;
`;

export const ButtonCard = styled.button`
  border: none;
  padding: 13px 57px;
  background-color: #ffffff;
  border-radius: 23px;
  color: #0d0c22;
  font-weight: 700;
  cursor: pointer;
`;
