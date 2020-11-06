
exports.seed = function (knex) {
  return knex('tasks').insert([
    { task_description: 'test task 1', task_notes: 'Moar notes pls', project_id: 1 },
    { task_description: 'test task 2', task_notes: 'Not enuff notes', project_id: 1 },
    { task_description: 'test task 3', task_notes: 'we dont want your notes', project_id: 2 },
  ]);
};
