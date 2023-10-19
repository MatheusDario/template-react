import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRout from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  toast.success('Success Notification !', {
    position: toast.POSITION.TOP_CENTER,
    toastId: 'customId',
    theme: 'dark',
  });

  return (

    <Switch>
      <MyRout exact path="/" component={Login} />
      <MyRout path="*" component={Page404} />
    </Switch>

  );
}
