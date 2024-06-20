const AbstractRepository = require("./AbstractRepository");

class NewsRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "news" });
  }

  // The C of CRUD - Create operation
  async create(news) {
    // Execute the SQL INSERT query to add a new game to the "item" table

    const gameId = news.gameId ? news.gameId : null;
    const [result] = await this.database.query(
      `insert into ${this.table} (title, intro, content, date, game_id) values (?, ?, ?, ? ,?)`,
      [news.title, news.intro, news.content, news.date, gameId]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific game by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "game" table
    const [rows] = await this.database.query(
      `select * from ${this.table} order by id desc`
    );

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  async update(news) {
    const [result] = await this.database.query(
      `update ${this.table} SET title = ?, intro = ?, content = ?, date = ? where id = ?`,
      [news.title, news.intro, news.content, news.date, news.id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = NewsRepository;
