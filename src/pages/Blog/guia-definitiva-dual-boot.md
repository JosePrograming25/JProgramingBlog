---
title: "Guía Definitiva: Dual Boot Windows 10 y Pop!_OS con Almacenamiento Compartido"
description: "Aprende a instalar Windows y Linux en el mismo PC, resolver problemas de particiones EFI y configurar un disco compartido para juegos y proyectos."
category: "Tutoriales"
tags: ["Linux", "Windows", "Dual Boot", "Pop!_OS", "Tutorial", "Configuración"]
date: "2025-12-05"
layout: ../../layouts/MarkdownLayout.astro
image: "/assets/blog/dual_boot.png"
type: "blog"
---

¡Hola, devs! 👋

Seamos sinceros: amamos Linux para desarrollar. La terminal, Docker, el ecosistema de Node... todo fluye mejor. Pero cuando llega la hora de jugar o usar cierto software propietario, Windows sigue siendo necesario.

Después de mucho prueba y error, he logrado configurar el **Dual Boot definitivo**. Un entorno donde tengo **Pop!_OS** para trabajar y **Windows 10** (optimizado) para jugar, ambos compartiendo un disco de almacenamiento masivo para no duplicar archivos.

En este post, voy a documentar todo el proceso, incluyendo cómo solucionar ese molesto error de la partición EFI que suele dar dolores de cabeza.

![Diagrama de la estructura de discos](/assets/blog/disk-structure-diagram.png)

---

## 🛠️ Lo que necesitas (Descargas)

Antes de romper nada, asegúrate de tener las ISOs oficiales. Aquí les dejo los enlaces directos para que no bajen cosas raras:

* **Windows 10:** [Descargar Herramienta de Creación de Medios (Microsoft)](https://www.microsoft.com/es-es/software-download/windows10)
* **Pop!_OS (22.04 LTS):** [Descargar ISO Oficial](https://pop.system76.com/)
    * *Nota: Descarga la versión estándar (no la de NVIDIA) si usas gráficos integrados AMD/Intel, o la de NVIDIA si tienes tarjeta dedicada.*

### 💾 Preparando el USB (Ventoy)
Para instalar esto, necesitas un pendrive booteable. Yo uso **Ventoy** porque me permite arrastrar ambas ISOs al USB y elegir cuál arrancar sin formatear a cada rato.

Si no sabes usarlo, busca en el blog a ver si tengo un tutorial de cómo instalarlo, si no, una búsqueda rápida en Google ("Cómo instalar Ventoy") te salvará la vida en 5 minutos.

## 📋 La Estrategia de Discos

Para este setup, tengo dos unidades de almacenamiento:
1.  **Disco SSD (256 GB):** Aquí vivirán los sistemas operativos (128GB Windows / 128GB Linux).
2.  **Disco NVMe (512 GB):** Formateado en **NTFS**. Aquí guardaremos TODOS los datos (Juegos, Proyectos, Documentos).


## Paso 1: Instalar Windows 10 (El vecino celoso)

Siempre instalamos Windows primero porque tiene la mala costumbre de sobrescribir el gestor de arranque si se instala después.

1.  Arranca desde el USB y selecciona instalar Windows.
2.  Elige **Instalación Personalizada**.
3.  En tu disco de sistema (el de 256GB), crea una partición de **~128 GB**.
4.  Deja el resto del espacio como **"Espacio no asignado"** (Unallocated).
5.  Instala Windows y deja que termine.

### ⚠️ CRÍTICO: Desactivar "Inicio Rápido"
Una vez en Windows, debes hacer esto o Linux no podrá leer tus discos compartidos:
1.  Ve a **Panel de Control > Opciones de energía**.
2.  Clic en "Elegir el comportamiento de los botones de inicio/apagado".
3.  Clic en "Cambiar la configuración actualmente no disponible".
4.  **Desmarca** la casilla "Activar inicio rápido".

![Captura desactivando el inicio rápido en Windows](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC4mJeLA8yIq68V4gr89oVq0A1kuE_DSnUmmXhz3kFVWEDAPru8aKz31y3rfocLKS2hpyA-l6ADSAqNDocNg7B4npZyVGOM9IZ6li8RYAWyDX6Ba12njfCbLaj_k5mG9t7blVzQkWzHkJR/s1600/windows-deshabilitar-inicio-rapido-sysadmit-01.png)
---

## Paso 2: Instalar Pop!_OS y el drama del EFI

Ahora, arranca con el USB de Pop!_OS. Aquí es donde la mayoría se traba.

1.  Selecciona idioma y teclado.
2.  Elige **"Custom (Advanced)"** (Personalizada).
3.  Verás tu disco de 256GB con las particiones de Windows y un espacio gris "Unused" de ~128GB.

### El Problema
Si intentas instalar Pop!_OS usando la partición de arranque (EFI) que creó Windows, el instalador te dará un error: **"Boot partition must be at least 1 GB"**. La de Windows es de solo 100MB.

### La Solución: Particionar Manualmente
En la misma pantalla de instalación, haz clic en el botón **"Modify Partitions..."** (abajo a la izquierda) para abrir **GParted**.

En el espacio gris (no asignado), crea dos particiones nuevas:
1.  **Nueva Partición 1 (Arranque):**
    * Tamaño: **1024 MB (1 GB)**.
    * Sistema de archivos: **FAT32**.
    * Nombre: `POP_BOOT`.
2.  **Nueva Partición 2 (Sistema):**
    * Tamaño: El resto del espacio disponible.
    * Sistema de archivos: **EXT4**.
    * Nombre: `POP_ROOT`.

Dale al check verde (✓) para aplicar cambios y cierra GParted.

![Captura de GParted mostrando las nuevas particiones](/assets/blog/gparted-setup.png)

### Configuración Final en el Instalador
Vuelve al instalador (refresca si es necesario) y asigna las particiones así:

* **Partición Nueva EXT4:** Activar "Use partition", activar "Format", usar como **Root (/)**.

¡Dale a instalar y espera a que termine!

---

## Paso 3: Configurar la BIOS/UEFI

Al reiniciar, es probable que arranque Windows directamente. Necesitamos decirle a la PC que Pop!_OS es el jefe ahora.

1.  Reinicia y entra a la BIOS (teclas usuales: F2, Supr, F12).
2.  Busca la sección **Boot Priority** (Prioridad de arranque).
3.  Mueve **Pop!_OS** (o el nombre de tu disco Linux) al **Puesto #1**, por encima de "Windows Boot Manager".
4.  Guarda y Sal (F10).

---

## Paso 4: Arreglar el Menú de Arranque (systemd-boot)

Ahora arranca Pop!_OS, pero no vemos la opción de Windows. Como creamos una partición de arranque separada, Pop!_OS no sabe que Windows existe. Vamos a presentarlos.

Abre la terminal y ejecuta estos comandos:

```bash
# 1. Crear carpeta temporal y montar la partición EFI de Windows
# (Asegúrate de saber cuál es, suele ser /dev/sda1 o sdb1, usa lsblk para ver la de 100MB)
sudo mkdir /mnt/windows-efi
sudo mount /dev/sdb1 /mnt/windows-efi

# 2. Copiar los archivos de arranque de Microsoft a Pop!_OS
sudo cp -ax /mnt/windows-efi/EFI/Microsoft /boot/efi/EFI/

# 3. Configurar tiempo de espera del menú (5 segundos)
sudo nano /boot/efi/loader/loader.conf
# Agrega la línea: timeout 5
```

## Paso 5: Almacenamiento Compartido y Enlaces Simbólicos 🚀

Para terminar, configuremos el disco de 512GB para que guarde mis juegos de Steam y mis descargas en ambos sistemas.

### Montaje Automático en Linux
Primero, averiguamos el UUID del disco de 512GB con `lsblk -f`. Luego editamos el fstab:

```bash
sudo nano /etc/fstab
```

Agregamos esta línea al final. OJO: Esta línea tiene permisos especiales (exec) para que Steam pueda ejecutar juegos desde un disco NTFS:
```bash 
UUID=[TU_UUID_AQUI] /media/Datos ntfs defaults,uid=1000,gid=1000,rw,user,exec,umask=000 0 0
```
### Redirigiendo Carpetas (Symlinks)

Para no llenar mi partición de Linux, moví mis carpetas de usuario al disco grande y creé enlaces simbólicos. Así el sistema cree que están en `/home`, pero están en el disco de 512GB.

```bash
# Ejemplo con la carpeta Descargas (Repetir para Documentos, Videos, etc.)

# 1. Mover contenido existente
mv ~/Descargas/* /media/Datos/Descargas/

# 2. Eliminar carpeta vacía
rmdir ~/Descargas

# 3. Crear el enlace mágico
ln -s /media/Datos/Descargas ~/Descargas
```
Y listo! Ahora tengo un sistema híbrido perfecto. Puedo programar todo el día en Linux y, cuando necesito desestresarme, reinicio y entro a Windows con todos mis juegos listos en el disco compartido.

¿Dudas? Déjalas en los comentarios o búscame en mis redes. ¡Happy Coding! 💻