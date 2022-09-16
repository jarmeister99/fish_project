import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './app';


const RootComponent: FC = () => {
  return (
    <RecoilRoot>
      <App></App>
    </RecoilRoot>
  );
};

const root = createRoot(document.getElementById('app-root'));
root.render(<RootComponent/>);
