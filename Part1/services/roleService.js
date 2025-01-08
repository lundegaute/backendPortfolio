class RoleService {
  constructor(db) {
    this.Client = db.sequelize;
    this.Role = db.Role;
  }

  async getRoles() {
    return this.Role.findAll({
      where: {},
    });
  }
}

module.exports = RoleService;
