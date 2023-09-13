import {ContaierCard} from "./Styles";
import {Card} from "./components/card/Card";
import {useApp} from "./useApp";

function App() {
  const {selectedFilm, FILMS, translate} = useApp();

  return (
    <>
      <ContaierCard>
        {FILMS.map((film, index) => (
          <Card
            onChanges={(id: number) => selectedFilm(id)}
            data={film}
            translate={translate}
            key={`${film.title}_${index}`}
          />
        ))}
      </ContaierCard>
    </>
  );
}

export default App;
