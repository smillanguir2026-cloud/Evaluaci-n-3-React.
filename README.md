# Portafolio personal — Simón Millanguir

Mini portafolio desarrollado para la Evaluación 3 de Desarrollo de Frontend, utilizando React, Vite y React Router.

Presenta información sobre mí, mis habilidades y mis proyectos. Incluye un formulario de contacto con validación y confirmación.

## Tecnologías utilizadas

- React
- React Router
- JavaScript
- HTML
- CSS
- Vite

## Requisitos

- Una versión de Node.js compatible con la versión de Vite del proyecto.
- npm.
- Un navegador web.

## Instalación

Desde la raíz del repositorio, entrar a la carpeta de la aplicación e instalar sus dependencias:

```powershell
cd Evaluacion3_react
npm install
```

## Ejecución

Dentro de la carpeta `Evaluacion3_react`, ejecutar:

```powershell
npm run dev
```

Abrir la dirección que aparece en la terminal. Mantener la terminal abierta mientras se utiliza el sitio.

Para detener el servidor, presionar `Ctrl + C`.

## Compilación

Para generar la versión de producción:

```powershell
npm run build
```

Para previsualizar esa versión:

```powershell
npm run preview
```

## Secciones y rutas

| Ruta | Página | Contenido |
| --- | --- | --- |
| `/` | Inicio | Presentación, fotografía e invitación a explorar el portafolio. |
| `/sobre-mi` | Sobre mí | Estudios, intereses y objetivos personales. |
| `/habilidades` | Habilidades | Tecnologías con sus niveles y herramientas utilizadas. |
| `/proyectos` | Proyectos | Trabajos realizados, descripciones y enlaces a GitHub. |
| `/contacto` | Contacto | Formulario con nombre, correo y mensaje. |
| Cualquier otra ruta | Página no encontrada | Mensaje de error y enlace para regresar al inicio. |

El encabezado permite navegar entre las cinco páginas e indica la sección activa. El footer muestra mi nombre y el año actual.

## Estructura del proyecto

```text
.
├── README.md
├── uso_ia.md
└── Evaluacion3_react/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    ├── public/
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── App.css
        ├── assets/
        │   └── img/
        │       └── perfil.jpg
        ├── components/
        │   ├── Header.jsx
        │   ├── Footer.jsx
        │   ├── Layout.jsx
        │   ├── TarjetaProyecto.jsx
        │   └── ContactForm.jsx
        └── pages/
            ├── Inicio.jsx
            ├── Sobre-mi.jsx
            ├── Habilidades.jsx
            ├── Proyectos.jsx
            └── Contacto.jsx
```

El árbol muestra los archivos principales del proyecto.

## Archivos principales

- `main.jsx`: inicia React y configura `BrowserRouter`.
- `App.jsx`: define las cinco rutas principales y la ruta de página no encontrada.
- `Layout.jsx`: organiza el Header, el contenido de la ruta mediante `Outlet` y el Footer. Contiene el único elemento `main` de cada página.
- `Header.jsx`: contiene los enlaces de navegación mediante `NavLink`.
- `Footer.jsx`: muestra mi nombre y obtiene el año actual.
- `TarjetaProyecto.jsx`: componente reutilizable que recibe título, descripción y enlace mediante props.
- `ContactForm.jsx`: administra los campos, los errores y la confirmación mediante `useState`.
- `pages/`: contiene el componente de cada página.
- `assets/img/`: almacena la fotografía personal.
- `index.css`: define los estilos generales.
- `App.css`: define los estilos de las páginas y componentes.
- `uso_ia.md`: documenta el uso de inteligencia artificial, las consultas, los resultados.

## Formulario de contacto

Los campos de nombre, correo y mensaje son controlados mediante `useState`.

Al enviar el formulario:

1. Se evita la recarga de la página.
2. Se comprueba que los campos no estén vacíos ni contengan únicamente espacios.
3. Se valida el formato del correo.
4. Se muestran mensajes de error junto a los campos correspondientes.
5. Si los datos son válidos, se muestra una confirmación y se limpian los campos.

El envío es una demostración: no se conecta a un servidor ni envía correos reales.

## Pruebas realizadas

- Comprobé que los cinco enlaces del menú muestran las páginas correspondientes.
- Revisé que los enlaces de los proyectos abren sus repositorios.
- Verifiqué que el formulario muestra errores al enviarlo vacío.
- Comprobé que rechaza correos con formato incorrecto.
- Verifiqué que muestra una confirmación y limpia los campos cuando los datos son válidos.

## Dificultades y soluciones

### Dificultad encontrada

La principal dificultad fue el formulario de contacto. Me costó entender cómo utilizar `useState` para guardar los valores y cómo validar los campos.

### Solución aplicada

Consulté a una herramienta de IA para recibir explicaciones sobre el estado y la validación. Utilicé el código proporcionado como base y lo incorporé al proyecto.

### Aprendizaje

Aprendí cómo utilizar `useState` para controlar los campos de un formulario, validar los datos y mostrar mensajes de error y confirmación.

## Autor

Simón Millanguir  
Estudiante de Ingeniería Civil Informática  
Universidad Católica de Temuco