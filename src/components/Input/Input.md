### Input

```jsx
import { Theme } from 'styleguide';
import Input from './Input';

<Theme>
  <div className="row">
    <Input label="Caption for field" placeholder="Placeholder" />
  </div>
  <div className="row">
    <Input label="Disabled" placeholder="Placeholder" disabled />
  </div>
  <div className="row">
    <Input
      label="Error"
      placeholder="Placeholder"
      error="Error text"
      icon="error"
    />
  </div>
  <div className="row">
    <Input
      label="Success"
      value="Text exemple for field"
      success
      readOnly
    />
  </div>
  <div className="row">
    <Input value="Search" icon="search" readOnly />
  </div>
</Theme>;
```
