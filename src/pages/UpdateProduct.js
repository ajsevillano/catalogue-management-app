import React from 'react';

//Components
import Form from '../components/UpdateProduct/Form';

const UpdateProduct = ({ match }) => {
  console.log(match);
  return (
    <>
      <section id="main" className="wrapper">
        <h1>{match.params.id}</h1>
      </section>
      <Form />
    </>
  );
};

export default UpdateProduct;
