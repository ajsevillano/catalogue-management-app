import Header from '../header/Index';

const Layout = ({ children, title, button }) => {
  return (
    <>
      <div>
        <Header title={title} button={button} />
      </div>
      <section id="main" className="wrapper">
        {children}
      </section>
    </>
  );
};

export default Layout;
