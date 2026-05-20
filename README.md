# Catalogue Management App

A single-page React application for managing a product catalogue. Supports full
CRUD operations, image uploads, category filtering and real-time search.

## Features

- Browse all products in a sortable table
- Real-time search and category filtering
- Add new products via modal form with optional image upload
- Edit existing products on a dedicated page
- Lottie animations for loading, success and error states
- Toast notifications for user feedback

## Tech Stack

| Layer | Tech |
|-------|------|
| UI | React 17 |
| Routing | React Router DOM v5 |
| HTTP | Axios |
| Styles | SCSS |
| Animations | react-lottie |
| Notifications | React Toastify |
| Deployment | Netlify |

## Routes

| Path | View |
|------|------|
| `/` | Products list |
| `/updateproduct/:id` | Edit product |

## Getting Started

```bash
npm install
npm start
```

The app expects a `REACT_APP_API_URL` environment variable pointing to the products API.

```env
REACT_APP_API_URL=https://your-api.com/products
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server on localhost:3000 |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run sass` | Watch and compile SCSS |

## Live Demo

[catalogue-management-portal.netlify.app](https://catalogue-management-portal.netlify.app/)

