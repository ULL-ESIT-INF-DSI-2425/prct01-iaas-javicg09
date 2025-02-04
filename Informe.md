# Informe: Práctica 1 DSI
## Configuración del entorno de trabajo: Máquina Virtual
### Introducción
En este primer informe redactaremos paso a paso el proceso de configurar el entorno virtual de trabajo para la asignatura. Para ello utilizaremos **MarkDown** como lenguaje para redactarlo.

### Conexión con la MV
En primer lugar tuvimos que establecer conexión con la máquina a través de ssh, que es un conmando que toma la función de establecer una conexión en remoto con otro dispositivo. En este caso introducimos las credenciales y dirección ipde la mv y ya estamos dentro. Esto lo hacemos con el fin de, una vez dentro de la máquina, poder cambiar el **HostName** para darle un nombre en específico.
![Demostración de como se modifica el hostname](./imagenes/hostname.png)
### Configuración para conexión sin credenciales
Vamos a configurar un inicio más cómodo y rápido. Primero, iremos al archivo /etc/hosts de nuestra máquina original, y añadiremos la ip y el nombre (HostName) de nuestra mv.
![](./imagenes/hosts.png)
Ahora pasaremos a crear una clave pública-privada con el comando "ssh-keygen" y la vinculamos con nuestra mv para poder establecer conexión sin necesidad de introducir una contraseña.
![](./imagenes/inicio sin contraseña.png)
 
