
/* 'COMANDO DE CONSULTA (SELECT)'
(async () => {
    const db = require("./db");
    console.log("Começou!");

    console.log("SELECT * FROM produtos;");
    const prod = await db.selectprodutos();
    console.log(prod);
})();
*/

/* 'COMANDO DE CRIAÇÃO (INSERT)'*/

(async () => {
    const db = require("./db");
    console.log("Começou!");

    console.log("EXEMPLO DE INSERT"); // 2º
    const result = await db.insertProdutos({
        descricao: "MOUSE",
        quantidade: 15,
    })
    console.log(result);
})();
