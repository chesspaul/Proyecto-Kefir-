# Kefir Balance - Proyecto Frontend

## 📋 Descripción General

**Kefir Balance** es una aplicación web de e-commerce para venta de productos de kéfir (bebidas de cultivo vivo). Desarrollada con React + Vite + Bootstrap, conectada a un backend profesional en Node.js + Express + MongoDB.

**Versión:** 1.0.0  
**Estado:** En desarrollo - MVP funcional  
**Última actualización:** Mayo 2026

---

## 🎯 Características Implementadas ✅

### **Autenticación & Usuarios**
- ✅ **Registro de usuarios** - POST `/api/users/register`
  - Captura: nombre, email, contraseña
  - Devuelve: token JWT + datos usuario
  - Guarda en localStorage

- ✅ **Login de usuarios** - POST `/api/users/login`
  - Autenticación con email/password
  - Devuelve: token JWT + isAdmin boolean
  - Sin recarga de página (SPA smooth)

- ✅ **Logout**
  - Limpia localStorage
  - Redirige a home
  - Actualiza navbar dinámicamente

- ✅ **Token JWT**
  - Se guarda en localStorage
  - Se envía en header: `Authorization: Bearer TOKEN`
  - Validación en Admin + Productos DELETE

### **Panel de Productos**
- ✅ **Ver productos** - GET `/api/productos`
  - Lista completa de productos
  - Muestra: nombre, precio, material, volumen
  - Imágenes (con fallback a default)

- ✅ **Crear productos (Admin)** - POST `/api/productos`
  - Solo admins pueden crear
  - Requiere token JWT
  - Datos: nombre, precio, material, volumen, stock
  - Se refleja instantáneamente en home

- ✅ **Eliminar productos (Admin)** - DELETE `/api/productos/:id`
  - Solo admins pueden eliminar
  - Requiere token JWT
  - Pide confirmación antes
  - Se sincroniza con Admin Panel

### **Panel Administrador** 
- ✅ **Admin Dashboard** - Ruta `/admin`
  - Protegida: solo admins pueden acceder
  - Formulario para crear productos
  - Tabla de productos con opción eliminar
  - CRUD funcional

- ✅ **Protección de rutas**
  - Si NO eres admin → Redirecciona a /
  - Si NO estás logueado → Redirecciona a /login

### **Carrito de Compras** (Parcial)
- ✅ **Agregar al carrito**
  - Click "Comprar" → Agrega producto
  - Navbar muestra cantidad: "🛒 Carrito (X)"

- ✅ **Ver carrito** - Ruta `/carrito`
  - Página dedicada
  - Lista completa de productos
  - Muestra material, volumen, precio
  - Calcula total automático

- ✅ **Eliminar del carrito**
  - Click "❌ Eliminar" en cada producto
  - Recalcula total

- ⚠️ **Persistencia de carrito**
  - Actualmente: Solo en memoria
  - Se borra al logout
  - Se borra al recargar página

### **Navbar Dinámico**
- ✅ **Sin login**
  - Botones: "Login" + "Registro"
  - Botón carrito (solo cantidad)

- ✅ **Con login**
  - Muestra: "👤 TuNombre"
  - Botón "Logout"
  - Si eres admin: Botón "Admin"

- ✅ **Carrito en Navbar**
  - Link clickable a `/carrito`
  - Muestra cantidad actualizada

---

## 🏗️ Arquitectura Frontend

```
src/
├── main.jsx                 # Punto de entrada React
├── App.jsx                  # Router principal + estados globales
├── App.css                  # Estilos globales
├── index.css               # Estilos base
│
├── components/
│   ├── Navbar.jsx          # Barra de navegación (fija)
│   ├── Hero.jsx            # Sección hero
│   ├── Logotipo.jsx        # Logos clientes
│   ├── Beneficios.jsx      # Beneficios del kéfir
│   ├── Productos.jsx       # Galería de productos + DELETE (admin)
│   ├── Insumo.jsx          # Sección de insumos
│   ├── Contacto.jsx        # Formulario contacto
│   ├── Footer.jsx          # Pie de página
│   ├── Admin.jsx           # Panel admin (POST/DELETE)
│   ├── Login.jsx           # Formulario login
│   ├── Register.jsx        # Formulario registro
│   ├── Carrito.jsx         # Página carrito
│   └── ProtectedRoute.jsx  # Wrapper para rutas protegidas
│
├── utils/
│   └── auth.js             # Funciones autenticación
│       ├── loginUser()
│       ├── registerUser()
│       ├── saveUserToLocalStorage()
│       ├── getUserFromLocalStorage()
│       ├── clearLocalStorage()
│       └── getAuthHeader()  ← Retorna headers con token JWT
│
└── assets/
    └── Producto4.avif      # Imagen producto
```

---

## 🔧 Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| React | 19.2.0 | Framework principal |
| Vite | 7.3.1 | Build tool + dev server |
| React Router | 7.15.0 | Enrutamiento SPA |
| Bootstrap | 5.3.8 | UI Components |
| Bootstrap Icons | 1.13.1 | Iconografía |
| JavaScript (ES6+) | - | Lenguaje |

**Backend (referencia)**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- express-async-handler

---

## 🚀 Cómo Usar

### **Instalación Local**

```bash
# Clonar o descargar proyecto
cd Proyecto-Kefir-

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Acceder a
http://localhost:5173/
```

### **Build para producción**

```bash
# Compilar
npm run build

# Preview local
npm run preview

# Deploy en GitHub Pages
npm run deploy
```

---

## 📝 Rutas Disponibles

### **Públicas**
| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/#/` | App (home) | Página principal |
| `/#/login` | Login | Formulario de login |
| `/#/registro` | Register | Formulario de registro |
| `/#/carrito` | Carrito | Ver carrito de compras |

### **Protegidas (Admin)**
| Ruta | Componente | Requisito |
|------|-----------|----------|
| `/#/admin` | Admin | Logueado + isAdmin=true |

---

## 🔐 Autenticación

### **Flow de Login**

```
1. Usuario ingresa email + password
2. Frontend envía POST a /api/users/login
3. Backend valida y devuelve:
   {
     token: "eyJhbGc...",
     nombre: "Juan",
     email: "juan@email.com",
     isAdmin: true
   }
4. Frontend guarda en localStorage:
   - token
   - nombre
   - email
   - isAdmin

5. Navbar se actualiza dinámicamente
```

### **Token JWT en Requests**

Cuando un admin crea/elimina productos, se envía:

```javascript
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGc..."  // Token del localStorage
}
```

---

## 🛒 Estados Globales (App.jsx)

```javascript
const [carrito, setCarrito] = useState([])      // Array de productos
const [usuario, setUsuario] = useState(null)    // Objeto usuario o null
```

### **Funciones principales**

```javascript
agregarAlCarrito(producto)      // Agrega producto al estado
eliminarDelCarrito(index)       // Elimina por índice
vaciarCarrito()                 // Limpia carrito
```

---

## 📊 Endpoints Backend Usados

### **Usuarios**
```
POST   /api/users/register        - Crear cuenta
POST   /api/users/login           - Iniciar sesión
GET    /api/users/profile         - Datos del usuario (protected)
```

### **Productos**
```
GET    /api/productos             - Listar todos
POST   /api/productos             - Crear (admin + token)
DELETE /api/productos/:id         - Eliminar (admin + token)
```

### **Contacto**
```
POST   /api/contactos             - Enviar formulario contacto
```

**URL Base Backend:** `https://kefir-backend.onrender.com`

---

## ⚠️ Limitaciones Actuales

### **Carrito**
- ❌ No persiste en localStorage (se borra al recargar)
- ❌ Se limpia al hacer logout
- ❌ No hay persistencia en backend

**Impacto:** Usuario pierde carrito si recarga página o cierra sesión

### **Imágenes de productos**
- ⚠️ Usa rutas hardcodeadas
- Falta: `producto1.jpeg`, `producto2.jpeg`, `producto3.jpeg`
- Existe: `Producto4.avif`

### **Checkout**
- ❌ No implementado ("Proceder al Pago" es placeholder)
- ❌ Sin integración de pagos
- ❌ Sin confirmación de orden

### **Validaciones**
- ⚠️ Formularios básicos sin validación completa
- ⚠️ Sin feedback visual de errores en algunos casos

---

## ✅ Testing Recomendado

### **1. Flujo Registro → Home**
```
1. Click "Registro"
2. Crear cuenta: nombre "Juan", email "juan@test.com", pass "123456"
3. Verificar NO recarga página
4. Navbar muestra: "👤 Juan"
5. Si es admin: aparece botón "Admin"
```

### **2. Flujo Productos**
```
1. Home → Ver galería de productos
2. Click "Comprar" en un producto
3. Navbar muestra: "🛒 Carrito (1)"
4. Click botón carrito → Abre /carrito
5. Ver producto con detalles (nombre, material, volumen, precio)
6. Click "❌ Eliminar" → Desaparece
7. Total se actualiza
```

### **3. Flujo Admin**
```
1. Login como admin
2. Click "Admin" → Abre /admin
3. Crear producto: nombre "Botella 1L", precio "150"
4. Verificar en tabla
5. Home → Verificar en galería de productos
6. Click "Eliminar" → Confirmar → Desaparece
```

### **4. Protecciones**
```
1. Sin login → No aparece botón "Admin"
2. No-admin logueado → No aparece botón "Admin"
3. No-admin intenta /admin → Redirecciona a /
4. Sin login intenta /admin → Redirecciona a /login
```

---

## 🔄 GitHub Pages & Deploy

### **Configuración actual**
- ✅ **Routing:** Hash routing (`/#/login`, `/#/admin`)
- ✅ **vite.config.js:** `base: '/Proyecto-Kefir-/'`
- ✅ **main.jsx:** `HashRouter` (sin basename)
- ✅ **package.json:** Deploy script configurado

### **Deploy**
```bash
npm run deploy
# Sube a: https://chesspaul.github.io/Proyecto-Kefir-/
```

### **Acceso a rutas**
```
Home:     https://chesspaul.github.io/Proyecto-Kefir-/
Login:    https://chesspaul.github.io/Proyecto-Kefir-/#/login
Admin:    https://chesspaul.github.io/Proyecto-Kefir-/#/admin
Carrito:  https://chesspaul.github.io/Proyecto-Kefir-/#/carrito
```

---

## 🎨 Diseño & UX

- **Framework:** Bootstrap 5
- **Navbar:** Fija en top (fixed-top)
- **Responsivo:** Mobile-first
- **Colores:**
  - Verde: Llamadas a acción (Comprar, Agregar)
  - Rojo: Eliminar, Logout
  - Azul: Alternativas (Registro, etc)

---

## 📈 Próximos Pasos / TODO

### **Prioritario**
- [ ] Persistencia de carrito en localStorage
- [ ] Validar carrito tenga productos antes de "Proceder al Pago"
- [ ] Agregar imágenes faltantes de productos

### **Importante**
- [ ] Sistema de checkout/pago
- [ ] Crear órdenes en backend
- [ ] Enviar email de confirmación
- [ ] Panel de órdenes para admin
- [ ] Historial de compras para usuario

### **Nice to Have**
- [ ] Carrito en backend (sincronización multiplataforma)
- [ ] Buscar/filtrar productos
- [ ] Calificaciones y comentarios
- [ ] Wishlist
- [ ] Descuentos/cupones

---

## 🐛 Debugging

### **Problemas Comunes**

**P: El login no funciona**
- A: Verificar que el backend esté corriendo en Render
- A: Verificar URL backend en `auth.js`

**P: Productos vacíos en Admin**
- A: El token no se está enviando
- A: Verificar que `getAuthHeader()` está en uso

**P: Carrito se borra al recargar**
- A: Persistencia aún no implementada en localStorage

**P: Navbar no se actualiza**
- A: Verificar que `setUsuario()` se ejecute sin `window.location.reload()`

### **Ver errores**
```javascript
// Abrir Console en DevTools (F12)
// Buscar fetch errors en Network tab
// Ver localStorage: localStorage.getItem("token")
```

---

## 👤 Usuario de Prueba

Para testing rápido (si backend los tiene precargados):

```
Email: admin@kefir.com
Pass: 123456
Rol: Admin
```

O crear uno nuevo registrándose en `/registro`

---

## 📞 Soporte

**Errores frecuentes:**
- CORS: Verificar backend CORS settings
- 401 Unauthorized: Token expirado o inválido
- 403 Forbidden: Usuario no es admin
- 404: Producto no encontrado

---

## 📄 Licencia

Proyecto educativo - Kefir Balance 2026

---

## 📝 Notas Técnicas

- React 19 usa Strict Mode (puede renderizar 2x en dev)
- Vite soporta HMR (cambios hot en tiempo real)
- Bootstrap 5 es CSS-only (no jQuery)
- JWT expira en backend (verificar duración)
- localStorage tiene límite ~5-10MB

---

**Última actualización:** Mayo 10, 2026  
**Versión:** 1.0.0-MVP
