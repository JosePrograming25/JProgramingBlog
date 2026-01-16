---
layout: ../../layouts/MarkdownLayout.astro
title: "Cómo Creo Mi Web y Portafolio (Documentando el Proceso)"
date: "2025-10-28"
image: "/assets/blog/web-planning.png"
category: "Desarrollo Web"
tags: ["Desarrollo Web", "Portafolio", "Proceso", "Astro", "Planificación"]
type: "project"
description: "Documentando el proceso paso a paso de la construcción de mi sitio web y portafolio profesional."
---

Este es el **paso a paso, escalón a escalón**, de cómo estoy construyendo mi sitio web: qué tecnologías uso, por qué las elijo y cómo las implemento. Pero, sobre todo, este es un diario de **cómo documento mi propio proceso**. 😅

![plantilla](../../assets/entradas/Idea%20para%20mi%20blog.png)

Hoy, **28/10/25**, tomé esta importante decisión. Creo firmemente que es esencial documentar todo lo que aprendemos para tenerlo disponible. Al final, **no somos máquinas** y, de vez en cuando, es indispensable consultar nuestros propios apuntes. Espero que esta bitácora le sea de utilidad a quien la lea. Por supuesto, estoy abierto a colaboraciones para este proyecto, así que adjunto el enlace para que puedan contactarme.

---

## **1\. 🔍 Primer Paso: Buscar un Diseño en Línea que Me Inspire**

Cuando se inicia un proyecto, la fase de investigación es crucial. Siempre navego buscando implementaciones, funcionalidades y estéticas que me gustaría incorporar. Quizás sea una particularidad mía, pero siento que **lo principal es organizar el "cómo"** realizaré la tarea.

Por ello, decidí empezar buscando un diseño inspirador en Google que me ayudara a bocetar la estructura de mi web/blog.

- **La Inspiración Elegida:** La imagen que adjunté ([enlace de plantilla](https://youngadventuress.com/)) es una plantilla que me sirvió de base. Me gusta mucho su **distribución**, el **diseño innovador** y, especialmente, que es **_responsive_** y tiene un menú dinámico.
- **Mi Enfoque:** La creatividad siempre tiene una base en algo que ya hemos visto. Obviamente, no pienso copiar la plantilla, sino **inspirarme en ella** para crear un diseño original y que refleje mi identidad profesional.

---

## **2\. 📝 Segundo Paso: Un Poco de Organización**

Una vez tuve la inspiración, le pedí a Gemini que me diera una guía para organizar la creación de este proyecto. Esta planificación es la que me servirá de _checklist_ y que documentaré a lo largo del proceso.

### **Fase 1: Planificación y Diseño (El Mapa de Ruta)**

| Acción a Realizar                 | Justificación (¿Por qué?)                                                                                                |
| :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Definir el Objetivo Principal** | Servirá para mantener el enfoque del diseño. (Mi objetivo: **Mostrar proyectos y documentar el aprendizaje**).           |
| **Definir el Público Objetivo**   | Determinar el tono y el contenido. (Mi público: **Reclutadores y otros desarrolladores**).                               |
| **Boceto (Wireframe)**            | Dibujar la estructura básica de las páginas (**Home, Proyectos, Sobre Mí**) para definir la jerarquía de la información. |

¡Fantástico\! Incorporar **Astro** es una excelente elección para un portafolio enfocado en velocidad y documentación. Es un _framework_ moderno ideal para sitios de contenido.

A continuación, he editado el **Paso 2** de tu artículo para incluir la elección de Astro y he redactado una justificación que suena personal y profesional, como si tú mismo la estuvieras escribiendo.

---

## **2\. 📝 Segundo Paso: Un Poco de Organización (El _Stack_ Tecnológico)**

Una vez tuve la inspiración, le pedí a Gemini que me diera una guía para organizar la creación de este proyecto. Esta planificación es la que me servirá de _checklist_ y que documentaré a lo largo del proceso.

### **Fase 1: Planificación y Diseño (El Mapa de Ruta)**

| Acción a Realizar                 | Justificación (¿Por qué?)                                                                                                |
| :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Definir el Objetivo Principal** | Servirá para mantener el enfoque del diseño. (Mi objetivo: **Mostrar proyectos y documentar el aprendizaje**).           |
| **Definir el Público Objetivo**   | Determinar el tono y el contenido. (Mi público: **Reclutadores y otros desarrolladores**).                               |
| **Boceto (Wireframe)**            | Dibujar la estructura básica de las páginas (**Home, Proyectos, Sobre Mí**) para definir la jerarquía de la información. |

### **Fase 2: Elección de Tecnología (Mi _Stack_ Definido)**

He tomado una decisión clave para este proyecto:

| Tecnología/Elección  | Uso y Justificación                                                                                                                                                                                                                                                                                                                                                                                     |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **HTML5 y CSS3**     | La base de todo. Uso CSS3 con **Flexbox y Grid** para un _layout_ limpio y moderno.                                                                                                                                                                                                                                                                                                                     |
| **Git & GitHub**     | **Esencial** para el control de versiones, un requisito profesional básico, y para el respaldo en la nube.                                                                                                                                                                                                                                                                                              |
| **Framework: Astro** | **¡Decisión tomada\!** Lo usaré por su filosofía de "Island Architecture", que garantiza **simplicidad y velocidad de carga**. Es ideal para sitios enfocados en contenido como un blog/portafolio, ya que minimiza el JavaScript en producción, lo cual me dará un sitio **dinámico** pero increíblemente **rápido**. Además, su capacidad de **escalado** me permitirá crecer el sitio a largo plazo. |

---

## **3\. ✨ Tercer Paso: Justificación del Diseño _Responsive_ y Bocetado**

Para seguir las directrices de mi guía, el siguiente paso lógico es aterrizar la inspiración en un boceto funcional y justificar mi elección de diseño.

### **3.1. Prioridad: Diseño _Responsive_**

Elegir una plantilla _responsive_ no es solo una preferencia estética, sino una **decisión técnica crucial** en 2025\.

**Nota Importante:** El tráfico móvil supera con creces al de escritorio. Si mi portafolio no se ve perfecto en un teléfono, pierdo la atención de reclutadores y clientes que navegan sobre la marcha. La implementación de **_media queries_** en CSS será una prioridad para garantizar una experiencia de usuario óptima.

### **3.2. Creación del Boceto (_Wireframe_) \- Directo al Código**

Tomando como base la plantilla inspiradora, **empezaré a crear mi propio _wireframe_**, pero de una forma muy práctica.

- **Herramienta de Bocetado:** Aunque consideré aprender **Figma**, he decidido que lo más eficiente ahora es **plantear la estructura directamente usando HTML y CSS básicos**. Esto me permite validar el _layout_ y la semántica desde el inicio, sin perder tiempo en una herramienta externa, y me da la libertad de refinar el diseño sobre la marcha.
- **Diseño Priorizado:** Decidí que el **área principal (hero section)** es lo más importante. Mostrará una breve introducción sobre quién soy y una clara **llamada a la acción** que dirija a los visitantes a mi **sección de Proyectos**. Esto refuerza mi objetivo principal: **mostrar mi trabajo y habilidades**.
- **Documentación:** Próximamente, cuando tenga el esqueleto básico listo en el navegador, **implementaré el boceto y adjuntaré una captura de pantalla** aquí para documentar cómo quedó la estructura inicial.

---

**Ahora que he completado la fase de planificación, estoy listo para empezar a programar.**
