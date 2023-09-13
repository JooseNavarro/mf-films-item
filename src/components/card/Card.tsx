import {KeyAndValue} from "../../core/interfaces";
import {ContainerItem, CardItem, TextCard, ButtonCard} from "./Styles";

interface Props {
  onChanges: (id: number) => void;
  translate: KeyAndValue;
  data: {
    id: number;
    title: string;
    img: string;
  };
}

export function Card({onChanges, data, translate}: Props) {
  return (
    <>
      <ContainerItem>
        <CardItem src={data.img} tabIndex={0}>
          <TextCard>
            <h4 tabIndex={0}>{data.title}</h4>
          </TextCard>
        </CardItem>
        <ButtonCard onClick={() => onChanges(data.id)} tabIndex={0}>
          {translate.BUTTON}
        </ButtonCard>
      </ContainerItem>
    </>
  );
}
