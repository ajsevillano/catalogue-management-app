import Header from '../header/Index';

const Layout = ({ children, title, button, status }) => {
  return (
    <>
      <div>
        <Header title={title} button={button} status={status} />
      </div>
      <section id="main" className="wrapper">
        {children}
      </section>
    </>
  );
};

export default Layout;
