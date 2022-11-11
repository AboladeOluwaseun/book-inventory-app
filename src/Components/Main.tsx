import BookList from "./Books/BookList";
import Header from "./Header";
import Search from "./Search";

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <Header />
      <Search />
      <BookList />
    </div>
  );
};

export default Main;
