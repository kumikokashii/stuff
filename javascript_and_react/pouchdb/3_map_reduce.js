// https://pouchdb.com/api.html#query_database

const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
const { emit } = require("process");

const log = console.log;
const println = () => {console.log()};

/**
 * design document creates a view (in sql sense)
 * https://guide.couchdb.org/draft/design.html
 * 
 * design doc goes into the same db with all data docs
 * 
 * _id starts with "_design" e.g. "_design/patients"
 * views define mapper and reducer (optional). they need to be in string.
 * 
 * first param of emit in mapper is a key, or a list of keys.
 * use these keys in the query param.
 * also, result will be sorted by the keys
 */

ddoc = {
  '_id': '_design/fruits',
  'views': {
    'fruits': {
      'map': function (doc) {
        if (doc.name) {
          emit(doc._id, doc.name) // first param is key
        }
      }.toString(),
    }
  }
}

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

const printDocs = (queryResult, option=null) => {
  if (option === 'all') {
    log(queryResult)
    return
  }

  if (option === 'groupBy') {
    log(queryResult.rows)
    return
  }

  queryResult.rows.forEach((row) => {
    log(row.doc || row.value)
  });
}

const main = async () => {
  const db = await new PouchDB('fruits');
  await db.bulkDocs(docs);
  await db.put(ddoc);

  // query 1: using ddoc
  log('query 1');
  printDocs(await db.query(
    'fruits',  // ddoc's _id value without the first part
    {
      keys: ['03', '08'],
      include_docs: true,
    }
  ));

  println();

  /**
   * "Note: you can also pass in the map function instead of saving a design doc first,
   * but this is slow because it has to do a full database scan.
   * The following examples will use this pattern for simplicity’s sake,
   * but you should normally avoid it." - by PouchDB
   */

  // query 2: mapper and reducer
  log('query 2');
  printDocs(await db.query(
    {
      map: (doc) => {
        if (doc.name) {
          emit(doc._id, doc.name.length);
        }
      },
      reduce: (keys, values) => {
        return values.reduce((a, b) => a + b);
      }
    },
  ));

  println();

  // query 3: group by
  log('query 3');
  printDocs(await db.query(
    {
      map: (doc) => {
        emit(doc.type, 1);
      },
      reduce: (keys, values) => {
        return values.length;
      }
    },
    {group: true}  // this will group by the key
  ), 'groupBy');

  println();

  // query 4: more query options
  log('Next page, given 3 is the bottom of current page. get 4.')
  printDocs(await db.query(
    'fruits',
    {
      startkey: '03',
      skip: 1,
      limit: 4,
      include_docs: true
    }
  ), 'all');

  println();

  log('Previous page, given 7 is the top of current page. get 4.')
  printDocs(await db.query(
    'fruits',
    {
      descending: true,
      startkey: '07',
      skip: 1,
      limit: 4,
      include_docs: true
    }
  ), 'all');

  await db.destroy();
}

main()
