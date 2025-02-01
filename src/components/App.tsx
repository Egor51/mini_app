import { useLaunchParams, miniApp, useSignal} from '@telegram-apps/sdk-react';

import {Apps} from "@/pages/Apps/Apps.tsx";
import {useEffect} from "react";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }, [isDark]);
  return (
    // <AppRoot
    //     appearance={isDark ? 'dark' : 'light'}
    //     platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    // >
    //   <HashRouter>
    //     <Routes>
    //       {routes.map((route) => <Route key={route.path} {...route} />)}
    //       <Route path="*" element={<Navigate to="/apps"/>}/>
    //     </Routes>
    //   </HashRouter>
    // </AppRoot>
      <Apps />
  );
}
