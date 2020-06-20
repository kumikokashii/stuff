// https://pouchdb.com/api.html

const PouchDB = require('pouchdb');

const log = console.log;
const println = () => {console.log()};

const createDeleteDatabase = async () => {
  // create a database
  const db = await new PouchDB('lalala');
  
  // get info
  log('db info');
  await db.info()
    .then((result) => log(result))
    .catch((err) => log(err));
  println();

  // note: can't list all databases

  // delete a database
  // the db still exists. marks _destroyed = true.
  log('before destroy, _destroyed =', db._destroyed); // undefined

  await db.destroy()
    .then((res) => {
      log('after destroy, _destroyed =', db._destroyed); // true
    })
    .catch((err) => {
      log('error destroying', db.name);
    })
    
  println();
}

const printDocs = async (db) => {
  await db.allDocs({include_docs: true,})
  .then((result) => {
    result.rows.forEach((row) => {
      log(row.doc)
    });
  })
  .catch((err) => {
    log(err);
  });
}

const createFetchDeleteDoc = async () => {
  const db = await new PouchDB('fruits');

  // use PUT. specify ur own id
  await db.put({_id: '01', name: 'pineapple'})
    .then(() => {})
    .catch(() => {});
  
  // don't use POST. pouch will set an id
  await db.post({name: 'strawberry'})
    .then(() => {})
    .catch(() => {});
  
  await printDocs(db);
  // {
  //   name: 'pineapple',
  //   _id: '01',
  //   _rev: '1-233588379ca846bb9328744426c54424'
  // }
  // {
  //   name: 'strawberry',
  //   _id: '4c98675b-41b0-4ca8-8aa0-3a563bb6bd4a',
  //   _rev: '1-0ed990039341f6af6d1d7afc851a3393'
  // }
  
  println();
  
  // simple fetch of a doc by _id
  log('fetch doc with _id = 01');
  await db.get('01')
    .then((doc) => log(doc))
    .catch((err) => log(err));

  println();

  // to delete, provide the whole doc
  log('gonna remove doc with _id = 01');
  await db.get('01')
    .then(async (doc) => {
      await db.remove(doc)
        .then((result) => log(result))
        .catch((err) => log(err))
    .catch((err) => log(err))
    });

  println();

  await printDocs(db);

  await db.destroy();
}

const main = async () => {
  await createDeleteDatabase();
  await createFetchDeleteDoc();
}

main();