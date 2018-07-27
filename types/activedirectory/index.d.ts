// Type definitions for activedirectory 0.7.2
// Project: https://github.com/gheeres/node-activedirectory
// Definitions by: Cerberuser <https://github.com/cerberuser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import _ActiveDirectory = require('./lib/activedirectory');
import _User = require('./lib/models/user');
import _Group = require('./lib/models/group');

declare namespace ActiveDirectory {
    export type User = _User;
    export type Group = _Group;
}
export = _ActiveDirectory;
