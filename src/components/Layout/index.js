import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
