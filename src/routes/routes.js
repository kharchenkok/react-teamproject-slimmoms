

import { lazy } from 'react';

export const paths = {
  home: '/',
  registration: '/registration',
  login: '/login',
  diary: '/diary',
  calculator: '/calculator',
}

const routes = [
  {
    path: paths.home,
    label: 'MainPage',
    exact: true,
    component: lazy(() => import("../pages/MainPage/MainPage"  /* webpackChunkName: "MainPage"*/)),

    private: false,
    restricted: true,
  },
  {
    path: paths.registration,
    label: 'Регистрация',
    exact: false,
    component: lazy(() => import('../pages/Registration-page/index.js')), //раскомментировать,  в импорт внести место и имя своего компонента
    // component: () => <h2>Регистрация</h2>, // удалить, когда будет корректный импорт
    private: false,
    restricted: true,
  },
  {
    path: paths.login,
    label: 'Вход',
    exact: false,
    component: lazy(() => import('../pages/Login-page/index.js')), //раскомментировать,  в импорт внести место и имя своего компонента
    // component: () => <h2>Вход</h2>, // удалить, когда будет корректный импорт
    private: false,
    restricted: true,
  },
  {
    path: paths.diary,
    label: 'Дневник',
    exact: false,
    component: lazy(() => import('../pages/DiaryPage/DiaryPage')), 
    // component: () => <h2>Дневник</h2>, // удалить, когда будет корректный импорт
    private: true,
    restricted: true,
  },
  {
    path: paths.calculator,
    label: 'Калькулятор',
    exact: false,
    component: lazy(() => import('../pages/CalculatorPage/CalculatorPage')), //раскомментировать,  в импорт внести место и имя своего компонента
    // component: () => <h2>Калькулятор</h2>, // удалить, когда будет корректный импорт
    private: true,
    restricted: true,
  },

]
export default routes;



