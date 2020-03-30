import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styleguide';

import CalendarPopup from 'components/CalendarPopup';
import Input from 'components/Input';
import Notifications from 'components/Notifications';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app styleguide-v2">

        <h1>Test Assignment</h1>

        <div className="sections">

          <section>
            <h2>Calendar Popup</h2>
            <label className="calendar-label">Date</label>
            <CalendarPopup/>
          </section>

          <section>
            <h2>Input Styling</h2>
            <div className="row">
              <Input label="Caption for field" placeholder="Placeholder" />
            </div>
            <div className="row">
              <Input label="Disabled" placeholder="Placeholder" value="Field not available" disabled />
            </div>
            <div className="row">
              <Input label="Success" placeholder="Placeholder" value="Text example field" type="password" autoComplete="new-password" success />
            </div>
            <div className="row">
              <Input label="Error" placeholder="Placeholder" value="Text exemple for field" error="Error text" />
            </div>
            <div className="row">
              <Input placeholder="Placeholder" value="Search" icon="search" readOnly />
            </div>
          </section>

          <section>
            <h2>Notifications Component</h2>
            <Notifications />
          </section>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
