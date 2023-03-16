import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Container>
        <h1>잘못된 주소입니다!</h1>
        <p>
          {error.status} {error.statusText}
        </p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
        <Button variant='outlined' onClick={() => navigate('/')}>
          메인페이지로 가기
        </Button>
      </Container>
    );
  } else if (error instanceof Error) {
    return (
      <Container>
        <h1>예상치 못한 에러가 발생했습니다</h1>
        <p>
          <i>{error.message}</i>
        </p>
        <Button variant='outlined' onClick={() => navigate('/')}>
          메인페이지로 가기
        </Button>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default ErrorPage;
