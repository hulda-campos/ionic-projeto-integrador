export class Cliente{
    
    id: string;
    cidade: string;
    cpf: string;
    email: string;
    endereco: string;
    estado: string;
    nome: string;
    numero: string;
    telefone: string;

    setData(objFirebase : any){
        this.cidade = objFirebase.cidade;
        this.cpf = objFirebase.cpf;
        this.email = objFirebase.email;
        this.endereco = objFirebase.endereco;
        this.nome = objFirebase.nome;
        this.numero = objFirebase.numero;
        this.telefone = objFirebase.numero;
        this.estado = objFirebase.estado;
    }
    
}