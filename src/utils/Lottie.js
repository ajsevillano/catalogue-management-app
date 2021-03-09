import Lottie from 'react-lottie';

export default function LottieAnimation({ animationName, width, height }) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationName.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
}
