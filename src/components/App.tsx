import { useLaunchParams, miniApp, useSignal} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import { routes } from '@/navigation/routes.tsx';
import telegramAnalytics from "@telegram-apps/analytics";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  telegramAnalytics.init({
    token: 'eyJhcHBfbmFtZSI6IkNhcGl0YWwiLCJhcHBfdXJsIjoiaHR0cHMvL3QubWUvbXl0cmFmZmljX2FwcF9ib3QiLCJhcHBfZG9tYWluIjoiaHR0cHM6Ly9lZ29yNTEuZ2l0aHViLmlvL21pbmlfYXBwLyJ9!SkxC+0rsBVxr3uGeJg+HUTfpF9rd1SfEVjzca0Rzt5Y=\n',
    appName: 'MyTraffic',
  });

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path="*" element={<Navigate to="/apps"/>}/>
        </Routes>
      </HashRouter>
    </AppRoot>
  );
}
