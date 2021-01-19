const getEmployeesForDashboard = (res, db) => {
    const employees = db.employees
    res.json(employees);
}

module.exports = {
    getEmployeesForDashboard
};