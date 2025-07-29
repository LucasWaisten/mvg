### 1. Reglas de Git (uso de ramas, commits y pushes)

🔧 Flujo de trabajo:
- La rama main está protegida y no se pushea directo.
- Se trabaja en ramas con el siguiente formato:
```bash
feat/nombre-breve
fix/nombre-breve
chore/nombre-breve
```
🧪 Ejemplos:
```bash
git checkout -b feat/agregar-login
git checkout -b fix/corregir-error-password
```
✏️ Commits:

Usar formato convencional:
```bash
<tipo>: <descripción breve en minúscula>
[opcional] descripción más larga
```
Tipos:
- feat: nueva funcionalidad
- fix: corrección de bugs
- chore: tareas menores (scripts, config)
- refactor: refactor de código sin cambiar comportamiento
- docs: documentación
- test: pruebas

Ejemplos:
```bash
feat: agregar validación de email al formulario de registro
fix: corregir bug en el cálculo de totales
chore: actualizar versión de dependencias
```
📤 Push:
- Siempre se hace push a una rama personal (feat/..., fix/...)
- Luego se abre una Pull Request a main
- No usar --force sin aprobación
### 2. Reglas de Estilo de Código y Estructura

📁 Nombres de archivos:
- Usar kebab-case para archivos y carpetas:
```bash
user-profile.tsx
auth-service.ts
form-utils.ts
```
- Si usás componentes en React, el componente puede tener dash-case:
```bash
/components/user-card.tsx
```

🧱 Estructura de carpetas:
```bash
src/
├── components/
├── pages/
├── services/
├── utils/
├── hooks/
```
🔤 Variables y funciones:
- camelCase para variables y funciones: getUserData(), isLoggedIn
- dash-case para clases y componentes: user-form, login-page

✅ Otras reglas:
-	Usar eslint + prettier para formateo automático
- No dejar código comentado en PRs
- Comentarios: solo cuando agregan valor (por qué, no qué)

### 3. Pull Requests (PRs)

✔ Reglas para hacer PR:
- Hacer PR hacia main desde una rama personal (feat/..., fix/...).
- Agregar:
	- Título claro (en español o inglés, coherente)
	- Descripción: ¿Qué se hizo? ¿Por qué?
	- Screenshots si hay cambios visuales
	- Tamaño recomendado: máximo 300 líneas de código
