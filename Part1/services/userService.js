class UserService {
    constructor(db) {
        this.Client = db.sequelize;
        this.User = db.User;
        this.Role = db.Role;
    }

    async getUser(email) {
        const query = `
        SELECT u.id, u.Email, u.RoleId, r.Role
        from users as u
        JOIN roles as r ON r.id = u.RoleId
        WHERE u.Email = :email`

        return this.Client.query(query, {
            replacements: {
                email: `${email}`
            },
            type: this.Client.QueryTypes.SELECT})
    }

}

module.exports = UserService;