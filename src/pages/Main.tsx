import { Header } from './../components/general/Header';
import { Footer } from './../components/general/Footer';

export const Main = () => {
  return (
    <>
      <Header />
      <div className="bg-primaryLight dark:bg-primaryDark text-primaryDark dark:text-primaryLight flex-grow text-5xl text-center p-12 py-96">
        BODY
      </div>
      <Footer />
    </>
  );
};