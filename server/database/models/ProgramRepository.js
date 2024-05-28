const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    super({ table: "program" });
  }

  async readAll() {
    const [category] = await this.database.query(`select * from ${this.table}`);

    return category;
  }
}

module.exports = ProgramRepository;
