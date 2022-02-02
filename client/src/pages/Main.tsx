import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { checkApi } from '../httpApi/UserApi';
import NavigationRouts from '../modules/NavigationRouts';
import SpinnerItem from '../modules/SpinnerItem';
import { IUser } from '../store/UserStore';
import '../styles/App.css'

const Main: React.FC = observer(() => {

  const { user } = useContext(Context);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    localStorage.getItem("jwtHash") && checkApi()
      .then((data) => {
        user.user = data;
        user.isAuth = true;
      })
      .finally(() => setLoading(false));

  }, []);
  return (
    <div>
      {
        loading ? <SpinnerItem /> : <NavigationRouts />
      }
    </div >
  );
});

export default Main;
