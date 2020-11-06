exports.seed = function (knex) {
  return knex("resources").insert([
    { resource_name: "test1", resource_description: "do some work" },
    { resource_name: "test2", resource_description: "take good notes" },
    { resource_name: "test3", resource_description: "pair program" },
  ]);
};