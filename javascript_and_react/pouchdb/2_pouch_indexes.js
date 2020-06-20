// https://pouchdb.com/api.html

const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const log = console.log;
const println = () => {console.log()};

const loadDocs = async (db) => {
  docs = [
    {_id: '01', name: 'kiwi', type: 'yum'},
    {_id: '02', name: 'peach', type: 'cute'},
    {_id: '03', name: 'pear', type: 'cool'},
    {_id: '04', name: 'orange', type: 'yum'},
    {_id: '05', name: 'rasberry', type: 'cute'},
    {_id: '06', name: 'banana', type: 'nice'},
    {_id: '07', name: 'grape', type: 'yum'},
    {_id: '08', name: 'watermelon', type: 'awesome'},
    {_id: '09', name: 'grapefruit', type: 'yum'},
    {_id: '10', name: 'apple', type: 'nice'},
  ];

  await db.bulkDocs(docs)
    .then((result) => {})
    .catch((err) => log(err));
}

// create index
// https://pouchdb.com/api.html#create_index
// can have multiple index fields
// can have multiple indexes based on diff. fields

const indexDocs = async (db, fields) => {
  log('will index')

  let name;
  await db.createIndex({index: {fields: fields}})
    .then((result) => {
      log(result);
      name = result.name;
    })
    .catch((err) => log(err));

  println();
  return name;
}

const printIndexes = async (db) => {
  await db.getIndexes()
    .then((result) => {
      result.indexes.forEach((index) => {
        log('<', 'index name =', index.name, '>');
        log('def = ', index.def);
        println();
      })
    })
    .catch((err) => log(err));

  println();
}

const deleteIndexByName = async (db, name) => {
  log('will remove index', name);
  await db.getIndexes()
    .then(async (result) => {
      const index = result.indexes.filter((index) => index.name === name)[0]
      await db.deleteIndex(index)
        .then((result) => log(result))
        .catch((err) => log(err));
    })
    .catch((err) => log(err));

  println();
}

const main = async () => {
  const db = await new PouchDB('fruits');
  await loadDocs(db);

  const i1Name = await indexDocs(db, ['_id']); // created
  await printIndexes(db);
  
  await indexDocs(db, ['_id']); // not created b/c same
  
  await indexDocs(db, ['_id', 'type']); // created b/c new
  await printIndexes(db);

  await deleteIndexByName(db, i1Name); // deleted
  await printIndexes(db);
}

main();