/**
 * Represents an ActiveDirectory group
 *
 * @private
 * @param {Object} [properties] The properties to assign to the newly created item.
 * @returns {Group}
 */
declare class Group {
    constructor(properties: object);
    groups: any;
    dn: any;
}
export = Group;
