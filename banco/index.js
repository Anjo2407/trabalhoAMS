var InstituicaoFinanceira = /** @class */ (function () {
    function InstituicaoFinanceira(banco, conta_poupanca, cartao_de_credito, emprestimo) {
        this.banco = banco;
        this.conta_poupanca = conta_poupanca;
        this.cartao_de_credito = cartao_de_credito;
        this.emprestimo = emprestimo;
    }
    InstituicaoFinanceira.prototype.servicos = function () {
        console.log("Qual o nome do banco?  ".concat(this.banco, "\n        O banco trabalha com contas poupan\u00E7as? ").concat(this.conta_poupanca, ". O banco trabalha com cart\u00F5es de cr\u00E9dito? ").concat(this.cartao_de_credito, ". O  banco executa empr\u00E9stimos? ").concat(this.emprestimo));
    };
    return InstituicaoFinanceira;
}());
var comercio = new InstituicaoFinanceira("Banco do Brasil", true, true, true);
comercio.servicos();
