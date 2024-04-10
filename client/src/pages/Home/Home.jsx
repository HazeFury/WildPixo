import Header from "../../components/app-components/Header/Header";
import GameSection from "../../components/app-components/Games/GamesSection/GameSection";

function Home() {
  return (
    <>
      <Header />
      <GameSection numberOfResults={4} />
    </>
  );
}

export default Home;
