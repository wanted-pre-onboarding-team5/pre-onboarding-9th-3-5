import { useRouteError } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';

import { useMovePage } from '@/hooks/useMovePage';
interface ErrorType {
  statusText?: string;
  message?: string;
}

export const Error = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);

  const [goRoot] = useMovePage([PATH_ROUTE.root]);

  const handleButtonClick = () => {
    goRoot();
  };

  return (
    <div>
      <p>에러가 발생했어요!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={handleButtonClick}>메인 페이지로 가기</button>
    </div>
  );
};
