import React from 'react';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import ToggleButton from './shared/ToggleButton';
import changeTheme from './components/changeTheme';
import Header from './shared/Layout/Header';
import PageLayout from './shared/Layout/PageLayout';
import ReservationForm from './components/Reservation/ReservationForm';

const ChangeThemeButton = changeTheme(ToggleButton);
const App = () => {
  return (
    <PageLayout>
      <Header
        title="ChooseTheMeetingRoom"
        action={
          <ChangeThemeButton>
            <IconSun size="1.5rem" color="yellow" />
            <IconMoonStars size="1.5rem" color="blue" />
          </ChangeThemeButton>
        }
      />
      <ReservationForm />
    </PageLayout>
  );
};

export default App;
