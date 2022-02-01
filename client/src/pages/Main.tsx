import React, { useContext } from 'react';
import NavigationRouts from '../modules/NavigationRouts';
import Container from 'react-bootstrap/Container';
import '../styles/App.css'
import NavigationMenu from '../modules/NavigationMenu';
import { observer } from 'mobx-react';
import { Context } from '..';

const Main: React.FC = observer(() => {
  const { user } = useContext(Context);
  return (
    <div>
      <NavigationMenu />
      <Container className="p-3">
        <NavigationRouts />
      </Container>
    </div >
  );
});

export default Main;
