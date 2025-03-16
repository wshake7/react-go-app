import { config } from '@/config';
import { useNavigate } from '@tanstack/react-router';
import { Button, Result } from 'antd'

const NotFount = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const goHome = () => {
      navigate({to: config.homePath});
      // dispatch(refresh());
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={(
        <Button
          type="primary"
          onClick={goHome}
        >
          Back Home
        </Button>
      )}
    />
  )
}

export default NotFount
