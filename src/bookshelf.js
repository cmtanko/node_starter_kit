import knex from './db';
import bookshelfJs from 'bookshelf';
const bookshelf = bookshelfJs(knex);

bookshelf.plugin('bookshelf-manager');

export default bookshelf;
