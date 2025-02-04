# Informe: Práctica 1 DSI
## Configuración del entorno de trabajo: Máquina Virtual
### Introducción
En este primer informe redactaremos paso a paso el proceso de configurar el entorno virtual de trabajo para la asignatura. Para ello utilizaremos **MarkDown** como lenguaje para redactarlo.

### Conexión con la MV
En primer lugar tuvimos que establecer conexión con la máquina a través de ssh, que es un conmando que toma la función de establecer una conexión en remoto con otro dispositivo. En este caso introducimos las credenciales y dirección ipde la mv y ya estamos dentro. Esto lo hacemos con el fin de, una vez dentro de la máquina, poder cambiar el **HostName** para darle un nombre en específico.
![Demostración de como se modifica el hostname](./Imagenes/hostname.png)
### Configuración para conexión sin credenciales
Vamos a configurar un inicio más cómodo y rápido. Primero, iremos al archivo /etc/hosts de nuestra máquina original, y añadiremos la ip y el nombre (HostName) de nuestra mv.
![](./Imagenes/hosts.png)
Ahora pasaremos a crear una clave pública-privada con el comando "ssh-keygen" y la vinculamos con nuestra mv para poder establecer conexión sin necesidad de introducir una contraseña.
![](./Imagenes/iniciosincontraseña.png)
Ya solo quedaría configurar ssh para poder iniciar sesión sin credenciales, de esta manera:
![](./Imagenes/iniciosincredenciales.png)
Tener en cuenta también que hay que generar la ssh key en la mv de la misma manera que antes.
### Entorno Git
Pasaremos ahora a instalar git que es (introducir breve explicación).
Descargamos e instalamos Git y configuramos el git prompt
![](./Imagenes/git.png)
Ahora es el momento de importar el repositorio de nuestra asignatura a nuestro entorno git
![](./Imagenes/repositorioimportado.png)
### Node js
Instalamos Node con sus versiones
![](/Imagenes/node.png)
