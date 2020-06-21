// Linked docs
// https://docs.couchdb.org/en/stable/ddocs/views/joins.html?highlight=linked%20documents#linked-documents

const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
const { emit } = require("process");

const log = console.log;
const println = () => {console.log()};

/**
 * Most importantly, linked docs is NOT sql join, at all!
 * Instead of returning the current doc, we can return another doc,
 * by specifying in the value:
 * emit(doc.whatever, {_id: doc.anotherDocID})
 * 
 * or if emitting multiple values:
 * emit(doc.whatever, {_id: doc.anotherDocID, name: doc.name})
 * 
 * ONLY 1 DOC CAN BE LINKED
 */

 const stores = [
   {_id: '01', type: 'store', name: 'Lalala', openAt: '10am'},
   {_id: '02', type: 'store', name: 'Wow', openAt: '8am'},
   {_id: '03', type: 'store', name: '^_^', openAt: '6am'},
 ];

 const toBuyList = [
  {_id: '101', type: 'item', name: 'blueberries', count: 3, atStoreId: '02'},
  {_id: '102', type: 'item', name: 'chocolate', count: 11, atStoreId: '01'},
  {_id: '103', type: 'item', name: 'beans', count: 6, atStoreId: '03'},
];

const printResult = (result) => {
  log(`total_rows: ${result.total_rows} offset: ${result.offset}`);
  println();
  result.rows.forEach((row) => {
    log(`id: ${row.id} key: ${row.key}`);
    log('value:', row.value);
    log('doc:', row.doc);
    println();
  })
}

const main = async () => {
  // setup
  const db = await new PouchDB('grocerry');
  await db.bulkDocs(stores);
  await db.bulkDocs(toBuyList);
  printResult(await db.allDocs({include_docs: true}));

  // Want a grocerry list that comes with the store info
  log('------------------------------------');
  printResult(await db.query(
    {
      map: (doc) => {
        if (doc.type === 'item') {
          emit(doc._id, {
            name: doc.name,
            count: doc.count,
            atStoreId: doc.atStoreId,
            _id: doc.atStoreId
          });
        }
      }
    },
    {include_docs: true}
  ))

  await db.destroy();
}

main();