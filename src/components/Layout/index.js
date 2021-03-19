import Header from '../header/Index';

const Layout = ({ children, title, button }) => {
  return (
    <>
      <div>
        <Header title={title} button={button} />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
