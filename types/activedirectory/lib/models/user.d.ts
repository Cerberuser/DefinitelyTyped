/**
 * Represents an ActiveDirectory user account.
 *
 * @private
 * @param {Object} [properties] The properties to assign to the newly created item.
 * @returns {User}
 */
declare class User {
    constructor(properties: any);
    /**
     * Checks to see if the user is the member of the specified group.
     *
     * @param {String} group The name of the group to check for membership.
     * @returns {Boolean}
     */
    isMemberOf: (group: string) => boolean;
    groups: any;
    dn: any;
}
export = User;
