import Layout from '../components/Layout';

//Lottie animation helper and json import
import LottieAnimation from '../utils/Lottie';
import * as notFound from '../assets/animations/404NotFound.json';

const NotFound404 = () => {
  return (
    <Layout button="secundary">
      <h1>Página no encontrada</h1>
      <div>
        <LottieAnimation animationName={notFound} height={320} width={650} />
      </div>
    </Layout>
  );
};

export default NotFound404;
