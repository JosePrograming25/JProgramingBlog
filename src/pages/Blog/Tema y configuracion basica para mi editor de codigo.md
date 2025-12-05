---
title: "Tema y configuracion basica para mi editor de codigo"
description: "Guía definitiva para personalizar Visual Studio Code y entornos compatibles. Aprende a configurar temas, fuentes y extensiones clave."
tags: ["Configuración", "VS Code", "Productividad", "Temas", "Extensiones"]
date: "2025-12-01"
layout: ../../layouts/MarkdownLayout.astro
image: "/assets/blog/vscode-setup.png"
type: "blog"
---

¡Hola, devs! 👋

Seamos sinceros: pasamos más tiempo mirando nuestro editor de código que mirando a nuestra propia familia (o al sol). Por eso, tener un entorno de desarrollo (IDE) que no solo funcione bien, sino que se vea increíble y sea cómodo, es vital para nuestra salud mental y productividad.

Actualmente, estoy trabajando en proyectos usando **Astro y React** dentro de mi entorno (uso **Antigravity**, que es totalmente compatible con el ecosistema de VS Code), y decidí que era hora de hacer una limpieza y puesta a punto.

Hoy quiero compartirles cómo he personalizado mi editor, desde lo visual hasta lo funcional, y cómo pueden hacerlo ustedes sin importar si usan Windows o Linux.

## 🎨 1. Temas: Viste tu Editor de Gala

El tema no es solo estética; es contraste y descanso visual. Aquí van mis 3 recomendaciones top para este año:

### Opción A: [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night) (Mi actual favorito)

Es una mezcla perfecta de colores neón sobre un fondo oscuro-azulado.

- **Sensación:** Cyberpunk tranquilo.
- **Ideal para:** Quienes trabajan de noche. Resalta muy bien el JSX y los componentes de Astro.

![Tokyo Night Theme Preview](../../../public/assets/blog/ss_tokyo_night.png)

### Opción B: [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

Un clásico que nunca muere. Es famoso por su compatibilidad universal (está disponible para casi todas las aplicaciones, no solo editores).

- **Sensación:** Contraste alto, colores vibrantes (rosa, verde, morado) sobre fondo gris oscuro.
- **Ideal para:** Quienes necesitan distinguir variables y funciones rápidamente.

![Dracula Theme Preview](../../../public/assets/blog/dracula.png)

### Opción C: [Catppuccin (Mocha)](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc)

Un tema pastel de bajo contraste que es muy suave para los ojos.

- **Sensación:** Suave, "cozy" y moderno.
- **Ideal para:** Sesiones de codificación muy largas donde quieres evitar la fatiga ocular.

![Catppuccin Theme Preview](../../../public/assets/blog/mocha.webp)

---

## ✒️ 2. La Fuente: Instalación y Ligaduras

Una buena fuente de código (Monospaced) debe tener **ligaduras** (esos símbolos bonitos donde `!=` se convierte en un `≠` o `=>` se convierte en una flecha real). Mis recomendadas:

1.  **[Fira Code](https://github.com/tonsky/FiraCode)**
2.  **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)**
3.  **[Cascadia Code](https://github.com/microsoft/cascadia-code)**

### 🛠️ ¿Cómo instalarlas? (Windows vs Linux)

Normalmente, las fuentes vienen comprimidas (`.zip` o `.rar`). **Paso 1:** Descomprime el archivo. Una vez tengas los archivos de fuente (usualmente `.ttf` o `.otf`), sigue estos pasos según tu sistema:

#### 🪟 En Windows:

1.  Selecciona todos los archivos `.ttf` que descomprimiste.
2.  Haz **clic derecho** sobre ellos.
3.  Selecciona **"Instalar"** (o "Instalar para todos los usuarios"). ¡Y listo!

#### 🐧 En Linux (Ubuntu/Debian/Arch...):

En Linux no siempre basta con doble clic. Hazlo como un pro:

1.  Abre tu terminal y crea una carpeta local para tus fuentes (si no existe):
    ```bash
    mkdir -p ~/.local/share/fonts
    ```
2.  Copia los archivos de la fuente (`.ttf`) a esa carpeta. Puedes hacerlo arrastrándolos con el explorador de archivos o con el comando `cp`.
3.  **Importante:** Actualiza la caché de fuentes para que el sistema las reconozca:
    ```bash
    fc-cache -f -v
    ```

#### Configuración en el Editor:

Una vez instalada, ve a tu `settings.json` en VS Code (o Antigravity) y agrega:

```json
"editor.fontFamily": "'Fira Code', monospace",
"editor.fontLigatures": true,
```

## ⚡ 3. Extensiones: Mis "Must-Have"

Independientemente de si usas VS Code nativo o una versión en la nube, estas extensiones te cambiarán la vida:

### Visuales & Utilidad

- **[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme):** Hace que cada archivo tenga un icono reconocible. Diferencia un `.astro` de un `.tsx` de un vistazo.
- **[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens):** _Game changer_. Te muestra el error en la misma línea de código en color rojo. Te ahorra tener que pasar el mouse por encima para ver qué rompiste.

### Para el flujo de Astro y React

Aunque esta guía es de personalización general, si tocas código moderno como yo, necesitas esto:

- **[Astro (Oficial)](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode):** Indispensable para el resaltado de sintaxis en archivos `.astro`.
- **[ES7+ React/Redux Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets):** Escribe `rafce` + `Tab` y tendrás un componente funcional creado en milisegundos.
- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss):** Si estilizas con Tailwind, el autocompletado de clases es obligatorio para no volverte loco adivinando nombres.

---

## ⌨️ 4. Atajos de Teclado (Hacks de Productividad)

Olvídate del mouse. Memoriza estos 3 atajos hoy mismo:

1.  **`Ctrl` + `D`:** Selecciona la siguiente ocurrencia de la palabra seleccionada. (Ideal para cambiar nombres de variables en varios lugares a la vez).
2.  **`Alt` + `Flechas (Arriba/Abajo)`:** Mueve la línea de código actual hacia arriba o abajo sin cortar y pegar.
3.  **`Ctrl` + `Shift` + `P`:** La "Paleta de Comandos". Desde aquí controlas todo el editor sin tocar menús.

---

### 🏁 Conclusión

Personalizar tu entorno no es perder tiempo, es "afilar el hacha". Un entorno en el que te sientas cómodo te invita a escribir mejor código y reduce la fatiga.

¿Tienes alguna configuración especial en tu Linux o Windows? ¡Compártela en los comentarios!
