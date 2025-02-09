# Informe: Conexión SSH en Visual Studio Code, TypeScript, ESLint y Prettier

## Índice
1. [Introducción](#introducción)  
2. [Conexión SSH en Visual Studio Code](#conexión-ssh-en-visual-studio-code)  
3. [Descarga de TypeScript](#descarga-de-typescript)  
4. [ESLint y Prettier](#eslint-y-prettier)  
5. [Conclusiones](#conclusiones)

---

## Introducción
En este informe se describen, de forma general, algunos aspectos clave en el entorno de desarrollo con **Visual Studio Code** y **JavaScript/TypeScript**:
- La conexión remota a través de **SSH** desde el editor.
- La importancia de contar con **TypeScript** para proyectos JavaScript.
- El uso de **ESLint** y **Prettier** para mantener la calidad y estilo del código.

Al finalizar la práctica, esta es la configuración resultante de nuestro entorno de trabajo:

![VSCode configurado](../Imagenes/vscode.png)

---

## Conexión SSH en Visual Studio Code
Visual Studio Code permite establecer conexión con máquinas remotas (servidores o máquinas virtuales) usando **SSH**, facilitando el acceso y la edición de archivos como si se trabajara directamente en el entorno local.  
A grandes rasgos, se configura una **extensión** especializada en la conexión vía SSH y se aprovecha la autenticación requerida (credenciales o claves). De esta manera, se puede navegar por los archivos remotos, abrir proyectos y editar código de forma remota, sin necesidad de salir del editor.

### Beneficios
- Permite centralizar el desarrollo en un único editor.
- Facilita el trabajo en entornos que no están físicamente en la computadora local.
- Evita instalaciones de software en la máquina local, ya que todo puede correr en el servidor remoto.

---

## Descarga de TypeScript
**TypeScript** es un lenguaje que se sitúa por encima de JavaScript, añadiendo tipos estáticos y múltiples mejoras de productividad. Al ser un superset de JavaScript, se compila finalmente a JavaScript estándar, lo que le permite funcionar en cualquier navegador o entorno que admita este lenguaje.

### Aspectos Clave
- Aporta mayor **robustez** al desarrollo gracias a la detección de errores en tiempo de compilación.
- Mejora el **mantenimiento** y la legibilidad del código.
- Es ampliamente utilizado en proyectos de mediana y gran escala dentro del ecosistema JavaScript.

Para trabajar con TypeScript es común descargarlo e integrarlo al proyecto a través de su correspondiente gestor de paquetes. El editor (VS Code) lo reconocerá y ofrecerá ayudas contextualizadas, autocompletado y verificación de tipos.

---

## ESLint y Prettier

### ESLint
**ESLint** es una herramienta enfocada en analizar el código y detectar posibles errores, malas prácticas o incumplimiento de las reglas de estilo establecidas.  
Con él se pueden establecer **normas** de escritura y calidad del código (como evitar variables sin uso, detectar sintaxis propensa a confusión, etc.), ayudando a mantener un proyecto más ordenado y coherente.

### Prettier
**Prettier** se dedica al **formato automático** del código. Cuando el proyecto integra Prettier, se facilita la homogeneidad del estilo:  
- Maneja la indentación, el uso de comillas, la organización de líneas, entre otros detalles.  
- Ahorra tiempo al equipo, ya que no deben “discutir” cuestiones de estilo: simplemente se aplica el formateo automático y todos siguen la misma guía.

### Uso Conjunto
A menudo, **ESLint y Prettier** se integran conjuntamente para que:
- ESLint asuma el rol de detectar problemas lógicos o de calidad.
- Prettier se encargue del formateo.  
Esto evita conflictos y garantiza la uniformidad del código en el proyecto.

---

## Conclusiones
- **Visual Studio Code** ofrece una forma eficiente de conectarse a través de **SSH**, permitiendo editar y gestionar proyectos remotos con la misma comodidad que uno local.  
- **TypeScript** se ha convertido en un estándar de facto para proyectos de JavaScript que buscan un mantenimiento más fácil y un código más seguro gracias al tipado estático.  
- **ESLint** y **Prettier** son herramientas básicas en entornos de desarrollo modernos, donde la calidad del código y la coherencia en el estilo son fundamentales para la colaboración y la legibilidad.

