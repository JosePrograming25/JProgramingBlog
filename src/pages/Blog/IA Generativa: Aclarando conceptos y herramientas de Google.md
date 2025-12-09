---
title: "IA Generativa: Aclarando conceptos y herramientas de Google"
description: "Notas de estudio sobre el curso 'Líder de IA Generativa' de Google. Desglosando la jerarquía de la IA, diferencias entre siglas (IA vs AA vs IAG) y el ecosistema Vertex AI para desarrolladores."
image: "/assets/blog/google_gen_ai_header.png"
layout: ../../layouts/MarkdownLayout.astro
tags: ["ia", "google", "aprendizaje", "vertex-ai", "notas"]
date: "2025-12-09"
type: "blog"
---

Actualmente me encuentro realizando el curso de **Líder de IA Generativa** ofrecido por Google. Es una ruta de aprendizaje fascinante, pero debo admitir que al principio empecé a enredarme un poco.

A medida que avanzaba en los módulos, los conceptos se iban sumando y las siglas comenzaban a parecerse demasiado. Llegó un momento en el que tuve que detener el video, abrir mi cuaderno físico (sí, a la vieja escuela) y empezar a esquematizar todo para no confundir un término con otro.

He decidido pasar esas notas a limpio y publicarlas aquí. Primero, para tener documentado mi proceso de aprendizaje, y segundo, por si alguien más está pasando por lo mismo o tiene curiosidad sobre este curso. Aquí tienes un resumen "para desarrolladores" de los fundamentos.

## 1. La Jerarquía de la IA: El concepto de las "Muñecas Rusas"

Lo primero que debemos entender es que no todo es lo mismo. Existe una jerarquía estricta. Imagina esto como las muñecas rusas (Matrioskas), una dentro de la otra.

![Gráfico de Jerarquía IA](/assets/blog/ai_hierarchy_dolls.svg)

* **Inteligencia Artificial (IA):** Es el círculo más grande. La disciplina general que busca imitar la inteligencia humana.
* **Aprendizaje Automático (AA / ML):** Un subconjunto de la IA. Aquí la máquina aprende de los datos para hacer predicciones.
* **Aprendizaje Profundo (AP / DL):** Dentro del AA. Utiliza redes neuronales complejas.
* **IA Generativa (IAG / GenAI):** El núcleo más reciente. A diferencia de las anteriores que clasifican (¿es esto un gato?), esta **crea** contenido nuevo (dibuja un gato).

## 2. Glosario de Siglas: Inglés vs. Español

Una de las mayores confusiones al ver el curso (especialmente si consumes documentación en inglés y videos en español) son las siglas. Aquí una tabla rápida para no perderse:

| Sigla (EN) | Sigla (ES) | Significado | Nota |
| :--- | :--- | :--- | :--- |
| **AI** | **IA** | Inteligencia Artificial | El término general. |
| **ML** | **AA** | Aprendizaje Automático | *Machine Learning*. Fundamental diferenciarlo. |
| **DL** | **AP** | Aprendizaje Profundo | *Deep Learning*. Redes neuronales. |
| **GenAI** | **IAG** | IA Generativa | La tecnología detrás de Gemini, ChatGPT, etc. |
| **LLM** | **LLM** | Grandes Modelos de Lenguaje | A veces traducido, pero LLM es el estándar. |

## 3. El Ecosistema de Google: ¿Usuario o Builder?

Aquí es donde mi perfil de desarrollador tuvo que hacer una distinción clara. Google ofrece herramientas de IA en dos "sabores" y es vital saber cuál usar:

### A. Para Usuarios Finales (Google Workspace)
Son las herramientas de productividad integradas en Docs, Gmail, Sheets, etc.
* Se enfocan en **"Ayúdame a escribir"** o **"Ayúdame a organizar"**.
* Es Software as a Service (SaaS).

### B. Para Desarrolladores (Google Cloud & Vertex AI)
Esto es lo que nos interesa a quienes programamos. **Vertex AI** es la plataforma unificada en la nube para construir aplicaciones.

* **Model Garden:** Es como un repositorio donde eliges el modelo (Gemini, Llama, PaLM) y obtienes la API.
* **Vertex AI Studio:** Un "sandbox" para probar tus prompts y ajustar parámetros (temperatura, tokens) antes de llevarlo al código.
* **Gen App Builder:** Herramientas *low-code* para crear buscadores y chatbots empresariales rápidamente.

---

### Conclusión

Poner orden a estos conceptos me ha ayudado a entender mejor qué herramienta necesito para mis próximos proyectos. Si tienes interés en cómo funcionan estos modelos "bajo el capó" o cómo integrarlos en tus aplicaciones web, te recomiendo echarle un ojo a la ruta de aprendizaje de Google Cloud Skills Boost.

Seguiré documentando mi avance por aquí. ¡Hasta la próxima!