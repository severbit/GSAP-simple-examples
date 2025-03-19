# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# GSAP Simple Examples

Простой проект с примерами анимаций, созданный с помощью GSAP (GreenSock Animation Platform).

## Структура проекта

```
gsapAnimations/
├── src/
│   ├── pages/
│   │   ├── From.jsx        # Компонент с анимацией from()
│   │   ├── FromTo.jsx      # Компонент с анимацией fromTo()
│   │   ├── Navigation.jsx  # Компонент навигации
│   │   └── To.jsx         # Компонент с анимацией to()
│   ├── App.jsx            # Основной компонент приложения
│   ├── main.jsx           # Точка входа в приложение
│   └── index.css          # Глобальные стили
├── public/                # Статические файлы
├── index.html            # HTML шаблон
├── package.json          # Зависимости и скрипты
├── vite.config.js        # Конфигурация Vite
└── README.md             # Документация проекта
```

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/decibel1030/GSAP-simple-examples.git
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
```

3. Запустите проект:
```bash
npm run dev
# или
yarn dev
```

## Используемые технологии

- React
- GSAP (GreenSock Animation Platform)
- Vite
- React Router DOM

## Примеры анимаций

Проект содержит три основных примера анимаций:

1. **To** - анимация элемента к указанному состоянию
2. **From** - анимация элемента из указанного состояния
3. **FromTo** - анимация элемента из одного состояния в другое

## Лицензия

MIT
