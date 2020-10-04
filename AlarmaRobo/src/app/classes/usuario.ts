export class Usuario {

    id: number;
    email: string;
    password: string;
    perfil: string;
    sexo: string;

    static CargarUser(usuario:any) {
        switch (usuario.email) {
            case "tester@tester.com":

                usuario.id=1;
                usuario.perfil="tester";
                usuario.sexo="femenino";

                break;

            case "anonimo@anonimo.com":

                usuario.id=2;
                usuario.perfil="usuario";
                usuario.sexo="masculino";

                break;

            case "usuario@usuario.com":

                usuario.id=3;
                usuario.perfil="usuario";
                usuario.sexo="masculino";

                break;

            case "invitado@invitado.com":

                usuario.id=4;
                usuario.perfil="invitado";
                usuario.sexo="femenino";

                break;

            case "admin@admin.com":

                usuario.id=5;
                usuario.perfil="admin";
                usuario.sexo="femenino";

                break;

            default:
                break;
        }
    }



}
