
async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(
    "mysql://root:escola@localhost:3306/exmynode",
  );
  console.log("Conectou no Mysql!");
  global.connection = connection;
  return connection;
}


/* 'COMANDO DE CONSULTA (SELECT)'*/
/*
async function selectprodutos() {
  const conn = await connect();
  return await conn.query("SELECT * FROM produtos;");

}
module.exports = { selectprodutos };
*/


/* 'COMANDO DE CRIAÇÃO (INSERT)'*/

async function insertProdutos(prod) {
  const conn = await connect();
  const sql = "INSERT INTO produtos(descricao, quantidade) VALUES (?,?);";
  const values = [prod.descricao, prod.quantidade];
  await conn.query(sql, values);
}

module.exports = { insertProdutos };
