# Informe: Práctica 1 DSI
## Configuración del Entorno de Trabajo: Máquina Virtual

### Tabla de Contenidos
1. [Introducción](#introducción)  
2. [Conexión con la MV](#conexión-con-la-mv)  
3. [Configuración para Conexión sin Credenciales](#configuración-para-conexión-sin-credenciales)  
4. [Entorno Git](#entorno-git)  
   - [¿Qué es Git?](#qué-es-git)  
   - [Instalación y Configuración](#instalación-y-configuración)  
   - [Importando un Repositorio](#importando-un-repositorio)  
5. [Node.js](#nodejs)  
6. [Conclusiones](#conclusiones)

---

### Introducción

En este primer informe se describe de manera general el proceso de configurar el entorno virtual de trabajo para la asignatura **DSI**. Se ha utilizado **Markdown** para su redacción, lo que facilita la inclusión de explicaciones, referencias, imágenes y texto de manera ordenada.

---

### Conexión con la MV

Para conectarnos a la **Máquina Virtual (MV)** se ha utilizado el protocolo **SSH**, que establece comunicación remota.  
Tras introducir las credenciales apropiadas y la dirección de la MV, accedemos a su consola para modificar y personalizar el entorno, por ejemplo cambiando el nombre del host.

> **Ejemplo de modificación del HostName**  
> ![Demostración de cómo se modifica el hostname](./Imagenes/hostname.png)

---

### Configuración para Conexión sin Credenciales

Con el fin de agilizar los accesos sucesivos a la MV, se ha llevado a cabo la configuración de acceso sin introducir credenciales en cada sesión.  
1. Se edita el archivo `/etc/hosts` de la máquina local, añadiendo la IP y el HostName elegidos para la MV.  
2. Se crea un par de claves (pública y privada).  
3. Se transfiere la clave pública a la MV para que reconozca al usuario local sin necesidad de contraseña.  

![Ejemplo de proceso para no requerir contraseña](./Imagenes/iniciosincontraseña.png)

Tras ello, se puede configurar el archivo que gestiona las opciones de SSH para automatizar aún más la conexión, haciendo la experiencia de inicio de sesión mucho más rápida.

![Evidencia de inicio sin credenciales](./Imagenes/iniciosincredenciales.png)

---

### Entorno Git

#### ¿Qué es Git?

**Git** es un sistema de control de versiones que permite llevar el seguimiento de cada modificación realizada en un proyecto. Facilita la colaboración entre varios desarrolladores, el manejo de distintas ramas de trabajo y la sincronización con repositorios remotos.

#### Instalación y Configuración

Para trabajar con Git, es necesario instalarlo y, posteriormente, configurar algunos parámetros básicos como el nombre del usuario y su correo electrónico. Una vez instalado, se procede a comprobar la versión y, si se desea, a configurar un prompt que facilite la gestión de ramas.

![Git en la máquina virtual](./Imagenes/git.png)

#### Importando un Repositorio

Como siguiente paso, se clona el repositorio de la asignatura en el entorno local (o en la MV). Esto permite realizar modificaciones, commits y push de cambios al repositorio remoto de la asignatura.

![Evidencia de repositorio importado](./Imagenes/repositorioimportado.png)

---

### Node.js

Para ejecutar JavaScript fuera del navegador se utiliza **Node.js**, que se ha instalado en la MV.  
Este software resulta fundamental para algunos entornos de desarrollo basados en JavaScript, complementado por el gestor de paquetes asociado, que habitualmente es **npm**.

![Node.js en la máquina virtual](./Imagenes/node.png)

---

### Conclusiones

- Se ha documentado el procedimiento para conectarse a la MV y personalizar elementos básicos del sistema.  
- Se han sentado las bases para un acceso sin credenciales, ahorrando tiempo en inicios de sesión.  
- Se ha instalado Git y se han configurado los parámetros iniciales para el manejo de repositorios, imprescindible para el desarrollo colaborativo.  
- Con la instalación de Node.js, se habilita la ejecución de aplicaciones JavaScript en la MV.

> **Nota:** Este informe se redacta íntegramente en Markdown para aprovechar sus ventajas de lectura y edición, a la vez que se integra fácilmente con plataformas como GitHub.


