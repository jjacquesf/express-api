var ctrl = {};

ctrl.isArray = (res) => {
    expect(Array.isArray(res.body)).toBe(true);
}

ctrl.isGenericResponseObject = (res) => {
    expect(res.body).toHaveProperty('success');
    expect(typeof res.body.success).toBe('boolean');
}

module.exports = ctrl;