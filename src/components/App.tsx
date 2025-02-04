import { useLaunchParams, miniApp, useSignal} from '@telegram-apps/sdk-react';

import {Apps} from "@/pages/Apps/Apps.tsx";
import {useEffect, useState} from "react";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {Apartment} from "@/pages/Apps/Apartment.tsx";
import {Loading} from "@/components/UI/loading.tsx";
import {routes} from "@/navigation/routes.tsx";

export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Добавлено состояние для загрузки

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Отключаем индикатор загрузки
    }, 1500); // Устанавливаем время загрузки 1.5 секунды
    return () => clearTimeout(timeout); // Чистим таймаут при размонтировании
  }, []);


  if (isLoading) {
    return (
        <Loading/>
    );
  }
  return (
    // <AppRoot
    //     appearance={isDark ? 'dark' : 'light'}
    //     platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    // >
      <HashRouter>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path="*" element={<Navigate to="/apps"/>}/>
        </Routes>
      </HashRouter>
    // </AppRoot>
    //   <HashRouter>
    //     <Routes>
    //       <Route path="/apps" element={<Apps />} />
    //       <Route path="/apartment/:id" element={<ApartmentPage />} />
    //     </Routes>
    //   </HashRouter>
  );
}
