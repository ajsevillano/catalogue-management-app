import Header from '../header/Index';

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
