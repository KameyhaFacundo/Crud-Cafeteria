// la funcion recibe como parametros email y password
export const login = async (usuario) => {
  try {
    //Pedir la lista de usuarios a json-server
    const respuesta = await fetch(" http://localhost:3004/usuarios");
    const listaUsuarios = respuesta.json();

    //Buscar si el usuario existe
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    //encontre el usuario
    if (usuarioBuscado) {
      //Si encontre el mail, ahora debo vereficar el password
      if (usuarioBuscado.password === usuario.password) {
        console.log("Todo perfecto");
        return usuarioBuscado;
      } else {
        console.log("El password es erroneo");
        return null;
      }
    } else {
      console.log("El mail incorrecto");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
