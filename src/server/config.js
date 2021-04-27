/**
 * @author krishpranav
 */

const path = require('path');
const root = path.resolve(__dirname, '../../');

module.exports = {
    root,
    port: 8080,
    public: path.resolve(root, 'dist')
};