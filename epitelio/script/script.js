const formulario= document.getElementeById("formulario")
const input = document.querySelector('#formulario input')
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4-16}$/,
    nombre: /^[a-zA-Z0-9] {1-40}$/,
    contraseña: /^{4-12}$/,
    contraseña2: /^{4-12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@{a-zA-Z0-9_.+-}$/,
    telefono:/^[0-9] {10}$/,


}

const campos={
    usuario: false,
    nombre: false,
    contraseña: false,
    telefono: false,

}

const validaFormulario = (e) => {
switch(e.target.name){
    case "usuario":
        validarCampo(expresiones.usuario, e.target, "usuario");
        break


    case "nombre":
        validarCampo(expresiones.nombre, e.target, "nombre");
        break



    case "contraseña":
        validarCampo(expresiones.contraseña, e.target, "contraseña");
        validarContraseña2()
        break

    case "contraseña2":
        validarContraseña2()
        break

    case "correo":
        validarCampo(expresiones.correo, e.target, "telefono");
        break



    case "telefono":
        validarCampo(expresiones.telefono, e.target, "telefono");
        break
}             
                
}

const validarCampo = (expresiones, input, campos) => {
    if(expresiones.test(input))
    document.getElementById('grupo__$(campo)'),classList.remove('formulario_grupo_incorrecto')
    document.getElementById('grupo__$(campo)'),classList.remove('formulario_grupo_correcto')

}