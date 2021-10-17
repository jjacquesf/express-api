var ctrl = {};

ctrl.isArray = (res) => {
    expect(Array.isArray(res.body)).toBe(true);
}

module.exports = ctrl;