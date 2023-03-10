import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="50"
      width="50"
      color="#d1d1d1"
      ariaLabel="circles-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
