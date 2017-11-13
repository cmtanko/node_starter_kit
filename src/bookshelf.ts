import * as bookshelfJs from 'bookshelf';
import knex from './db';
const bookshelf = bookshelfJs(knex);

bookshelf.plugin('bookshelf-manager');

export default bookshelf;
