# Catalogue Management App

Una aplicación React moderna para la gestión completa de catálogos de productos con interfaz intuitiva y funcionalidades avanzadas.

> [!WARNING]
> **Migración a Next.js en progreso** - Este proyecto funcional será migrado próximamente a Next.js para mejorar el rendimiento, SEO y capacidades full-stack. La versión actual de React seguirá siendo funcional durante el período de transición.

## 🚀 Características

- ✅ **Gestión completa de productos** (CRUD)
- 🔍 **Búsqueda y filtrado** avanzado
- 📱 **Diseño responsivo** con React
- 🗂️ **Organización por categorías**
- ⚡ **SPA** con React Router
- 🎨 **Interfaz moderna** y intuitiva
- 🔄 **Estado reactivo** con hooks
- 📊 **Visualización de datos** optimizada

## 🛠️ Tecnologías

- **Frontend**: React 18+
- **Routing**: React Router DOM
- **Estado**: React Hooks (useState, useEffect, useContext)
- **Estilos**: CSS3/SCSS
- **Build**: Create React App / Vite
- **Deployment**: Netlify

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes React reutilizables
│   ├── Header/         # Componente de cabecera
│   ├── ProductCard/    # Tarjeta de producto
│   ├── ProductForm/    # Formulario de productos
│   ├── SearchBar/      # Barra de búsqueda
│   └── Modal/          # Componente modal
├── pages/              # Páginas de la aplicación
│   ├── Home/           # Página principal
│   ├── Products/       # Listado de productos
│   ├── AddProduct/     # Agregar producto
│   └── EditProduct/    # Editar producto
├── hooks/              # Custom hooks
├── context/            # Context API para estado global
├── services/           # Servicios de API
├── utils/              # Utilidades y helpers
├── styles/             # Estilos globales
└── assets/             # Recursos estáticos
```

## 🚀 Instalación y Uso

### Prerrequisitos
```bash
Node.js >= 16.0.0
npm >= 8.0.0
```

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/ajsevillano/catalogue-management-app.git

# Navegar al directorio
cd catalogue-management-app

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar tests
npm test

# Analizar bundle
npm run analyze

# Linter
npm run lint
```

## 🌐 Desarrollo Local

```bash
# Iniciar la aplicación en modo desarrollo
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## 🏗️ Build y Deployment

### Build de producción
```bash
npm run build
```

### Deployment en Netlify
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

## ⚙️ Configuración

### Variables de entorno
Crear archivo `.env` en la raíz:

```env
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_APP_NAME=Catalogue Management
```

### Configuración de API
Configurar endpoints en `src/services/api.js`

## 🎯 Funcionalidades Principales

### Gestión de Productos
- **Crear**: Formulario completo para nuevos productos
- **Listar**: Grid/Lista con paginación
- **Actualizar**: Edición con validación
- **Eliminar**: Con confirmación de usuario

### Catálogo
- **Búsqueda**: Búsqueda en tiempo real
- **Filtros**: Por categoría, precio, disponibilidad
- **Ordenamiento**: Múltiples criterios
- **Paginación**: Navegación eficiente

### Interfaz de Usuario
- **Responsive Design**: Adaptable a todos los dispositivos
- **Loading States**: Indicadores de carga
- **Error Handling**: Manejo de errores elegante
- **Notificaciones**: Feedback visual al usuario

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm test

# Ejecutar tests con coverage
npm test -- --coverage

# Ejecutar tests en modo watch
npm test -- --watch
```

## 📦 Dependencias Principales

```json
{
  "react": "^17.0.1",
  "react-dom": "^17.0.1",
  "react-router-dom": "^5.2.0",
  "axios": "^1.3.0"
}
```

## 🎨 Estructura de Componentes

```jsx
App
├── Header
├── Router
│   ├── Home
│   ├── ProductList
│   │   ├── SearchBar
│   │   ├── ProductCard
│   │   └── Pagination
│   ├── ProductForm
│   └── ProductEdit
└── Footer
```

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Convenciones de código
- Usar hooks de React
- Componentes funcionales
- PropTypes para validación
- ESLint + Prettier

## 📱 Compatibilidad

- ✅ React 17+
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Dispositivos móviles y tablets
- ✅ Progressive Web App ready

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

- **Issues**: [GitHub Issues](https://github.com/ajsevillano/catalogue-management-app/issues)
- **Documentación**: [Wiki del proyecto](https://github.com/ajsevillano/catalogue-management-app/wiki)
- **Demo**: [Ver demo en vivo](https://catalogue-management-portal.netlify.app/)

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐
