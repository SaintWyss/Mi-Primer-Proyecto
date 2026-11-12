<h1 align="center">Mi-Primer-Proyecto</h1>

<p align="center"><strong>Portfolio personal de Santiago Scacciaferro Wyss.</strong><br/>Frontend · Vite · Tailwind</p>


Este repositorio conserva una versión de mi portafolio personal, con secciones de presentación, proyectos y contacto. Evolucionó desde un sitio estático hacia una aplicación construida con Vite y Tailwind CSS.

**Estado:** proyecto personal histórico. Su contenido puede no reflejar mi trayectoria o mis proyectos más recientes; para una presentación actual, visitá [mi perfil de GitHub](https://github.com/SaintWyss).

## 🚀 Tecnologías

Tecnologías principales:

- **[Vite](https://vitejs.dev/):** Entorno de desarrollo frontend de próxima generación, ultrarrápido.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS "utility-first" para un diseño rápido, responsivo y mantenible.
- **HTML5 & JavaScript (ES6+):** Estándares web modernos.
- **PostCSS:** Herramienta para transformar CSS con JavaScript.

## ✨ Características

- **Diseño Moderno:** Interfaz limpia y profesional con modo oscuro (Dark Mode) por defecto.
- **Responsive Design:** Totalmente adaptado a dispositivos móviles, tablets y escritorio.
- **Alto Rendimiento:** Optimizado para carga rápida gracias al bundler de Vite.
- **Estructura Modular:** Código organizado en una arquitectura basada en `src/` para mejor mantenibilidad.

## 📂 Estructura del Proyecto

```
/
├── public/             # Archivos estáticos públicos (imágenes, videos)
├── src/                # Código fuente de la aplicación
│   ├── css/            # Estilos globales y configuración de Tailwind
│   ├── js/             # Lógica de la aplicación
│   ├── index.html      # Página de inicio (Hero)
│   ├── personal.html   # Sección "Sobre Mí"
│   ├── proyect.html    # Portafolio de proyectos
│   └── contact.html    # Página de contacto
├── package.json        # Dependencias y scripts
├── tailwind.config.js  # Configuración de Tailwind
└── vite.config.js      # Configuración de Vite
```

## 🛠️ Instalación y uso

Para ejecutar el proyecto necesitás [Node.js](https://nodejs.org/) y npm. Cloná el repositorio y entrá a su carpeta antes de ejecutar los comandos:

```bash
git clone https://github.com/SaintWyss/Mi-Primer-Proyecto.git
cd Mi-Primer-Proyecto
```

El repositorio contiene una carpeta `node_modules` versionada. Si las dependencias incluidas no funcionan en tu sistema, instalá las dependencias de nuevo; la compilación no se pudo verificar en esta revisión.

1.  **Instalar dependencias:**

    ```bash
    npm ci
    ```

2.  **Iniciar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Esto abrirá el sitio en `http://localhost:5173` (o el puerto que indique la consola).

3.  **Construir para producción:**
    ```bash
    npm run build
    ```
    Genera los archivos optimizados en la carpeta `dist/`.

## ✒️ Autor

**Santiago Vicente Scacciaferro Wyss**

- Estudiante de Ingeniería en Sistemas (UTN)
- Desarrollador Full Stack en formación
- Entusiasta de la Ciberseguridad

---

_Desarrollado con ❤️ y código limpio._
