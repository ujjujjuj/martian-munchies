const x = require("./dat.json");

x.items.forEach((item) => {
  console.log(
    `INSERT INTO "Items" ("id","name","image","price","isLimitedEdition","supply","description","createdAt") VALUES (${item.id},
      '${item.name}','${item.image}',${item.price},${item.isLimitedEdition},${item.supply},'${item.description}',${Date.now()});`
  );
});
