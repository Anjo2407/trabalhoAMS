class InstituicaoFinanceira {
    banco: string;
    conta_poupanca: boolean;
    cartao_de_credito: boolean;
    emprestimo: boolean;

    constructor (banco: string, conta_poupanca :boolean,cartao_de_credito : boolean,  emprestimo: boolean) {
        this.banco= banco;
        this.conta_poupanca = conta_poupanca;
        this.cartao_de_credito =cartao_de_credito;
        this.emprestimo = emprestimo
    }
   
  servicos(): void{
        console.log(`Qual o nome do banco?  ${this.banco}
        O banco trabalha com contas poupanças? ${this.conta_poupanca}. O banco trabalha com cartões de crédito? ${ this.cartao_de_credito}. O  banco executa empréstimos? ${this.emprestimo}`);
    }
}

let comercio = new InstituicaoFinanceira ("Banco do Brasil", true, true, true);
comercio.servicos()
