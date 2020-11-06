
exports.seed = function (knex) {
  return knex('projects').insert([
    { project_name: 'spring cleaning', project_description: 'need to clean stuffs' },
    { project_name: 'punch babies', project_description: 'it is very clear what to do here' },
    { project_name: 'do schoolwork', project_description: 'type stuff' }
  ]);
};
