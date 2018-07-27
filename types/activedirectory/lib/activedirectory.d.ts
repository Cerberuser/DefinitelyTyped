/// <reference types="node" />
import * as events from "events";
/**
 * Agent for retrieving ActiveDirectory user & group information.
 *
 * @public
 * @constructor
 * @param {Object|String} url The url of the ldap server (i.e. ldap://domain.com). Optionally, all of the parameters can be specified as an object. { url: 'ldap://domain.com', baseDN: 'dc=domain,dc=com', username: 'admin@domain.com', password: 'supersecret', { referrals: { enabled: true }, attributes: { user: [ 'attributes to include in response' ], group: [ 'attributes to include in response' ] } } }. 'attributes' & 'referrals' parameter is optional and only necesary if overriding functionality.
 * @param {String} baseDN The default base container where all LDAP queries originate from. (i.e. dc=domain,dc=com)
 * @param {String} username The administrative username or dn of the user for retrieving user & group information. (i.e. Must be a DN or a userPrincipalName (email))
 * @param {String} password The administrative password of the specified user.
 * @param {Object} defaults Allow for default options to be overridden. { attributes: { user: [ 'attributes to include in response' ], group: [ 'attributes to include in response' ] } }
 * @returns {ActiveDirectory}
 */
declare class ActiveDirectory extends events.EventEmitter {
    opts: any;
    baseDN: string;
    constructor(url: object | string, baseDN?: string, username?: string, password?: string, defaults?: {
        entryParser?: any;
        attributes?: any;
        referrals?: any;
    });
    static filters: {
        [index: string]: any;
    };
    /**
     * Gets the currently configured default attributes
     *
     * @
     */
    _getDefaultAttributes: () => any;
    /**
     * Gets the currently configured default user attributes
     *
     * @
     */
    _getDefaultUserAttributes: () => any;
    /**
     * Gets the currently configured default group attributes
     *
     * @
     */
    _getDefaultGroupAttributes: () => any;
    /**
     * For the specified group, retrieve all of the users that belong to the group.
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }
     * @param {String} groupName The name of the group to retrieve membership from.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, users: {Array[User]})
     */
    getUsersForGroup: (opts: any, groupName: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * For the specified username, get all of the groups that the user is a member of.
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }
     * @param {String} username The username to retrieve membership information about.
     * @param {Function} [callback] The callback to execute when completed. callback(err: {Object}, groups: {Array[Group]})
     */
    getGroupMembershipForUser: (opts: any, username: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * For the specified group, get all of the groups that the group is a member of.
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }
     * @param {String} groupName The group to retrieve membership information about.
     * @param {Function} [callback] The callback to execute when completed. callback(err: {Object}, groups: {Array[Group]})
     */
    getGroupMembershipForGroup: (opts: any, groupName: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Checks to see if the specified username exists.
     *
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }
     * @param {String} username The username to check to see if it exits.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, result: {Boolean})
     */
    userExists: (opts: any, username: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Checks to see if the specified group exists.
     *
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }
     * @param {String} groupName The group to check to see if it exists.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, result: {Boolean})
     */
    groupExists: (opts: any, groupName: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Checks to see if the specified user is a member of the specified group.
     *
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }
     * @param {String} username The username to check for membership.
     * @param {String} groupName The group to check for membership.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, result: {Boolean})
     */
    isUserMemberOf: (opts: any, username: any, groupName: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Perform a generic search for the specified LDAP query filter. This function will return both
     * groups and users that match the specified filter. Any results not recognized as a user or group
     * (i.e. computer accounts, etc.) can be found in the 'other' attribute / array of the result.
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }. Optionally, if only a string is provided, then the string is assumed to be an LDAP filter.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, { users: [ User ], groups: [ Group ], other: [ ] )
     */
    find: (opts: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Perform a generic search on the Deleted Objects container for active directory. For this function
     * to work correctly, the tombstone feature for active directory must be enabled. A tombstoned object
     * has most of the attributes stripped from the object.
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }. Optionally, if only a string is provided, then the string is assumed to be an LDAP filter.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, result: [ ])
     */
    findDeletedObjects: (opts: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Retrieves the specified group.
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }
     * @param {String} groupName The group (cn) to retrieve information about. Optionally can pass in the distinguishedName (dn) of the group to retrieve.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, group: {Group})
     */
    findGroup: (opts: any, groupName: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Perform a generic search for groups that match the specified filter. The default LDAP filter for groups is
     * specified as (&(objectClass=group)(!(objectClass=computer))(!(objectClass=user))(!(objectClass=person)))
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }. Optionally, if only a string is provided, then the string is assumed to be an LDAP filter that will be appended as the last parameter in the default LDAP filter.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, groups: [ Group ])
     */
    findGroups: (opts: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Retrieves the specified user.
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }
     * @param {String} username The username to retrieve information about. Optionally can pass in the distinguishedName (dn) of the user to retrieve.
     * @param {Boolean} [includeMembership] OBSOLETE; NOT NOT USE. Indicates if the results should include group memberships for the user. Defaults to false.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, user: {User})
     */
    findUser: (opts: any, username: any, includeMembership: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Perform a generic search for users that match the specified filter. The default LDAP filter for users is
     * specified as (&(|(objectClass=user)(objectClass=person))(!(objectClass=computer))(!(objectClass=group)))
     *
     * @public
     * @param {Object} [opts] Optional LDAP query string parameters to execute. { scope: '', filter: '', attributes: [ '', '', ... ], sizeLimit: 0, timelimit: 0 }. Optionally, if only a string is provided, then the string is assumed to be an LDAP filter that will be appended as the last parameter in the default LDAP filter.
     * @param {Boolean} [includeMembership] OBSOLETE; NOT NOT USE. Indicates if the results should include group memberships for the user. Defaults to false.
     * @param {Function} callback The callback to execute when completed. callback(err: {Object}, users: [ User ])
     */
    findUsers: (opts: any, includeMembership: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
    /**
     * Attempts to authenticate the specified username / password combination.
     *
     * @public
     * @param {String} username The username to authenticate.
     * @param {String} password The password to use for authentication.
     * @param {Function} callback The callback to execute when the authenication is completed. callback(err: {Object}, authenticated: {Boolean})
     */
    authenticate: (username: any, password: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => any;
    /**
     * Retrieves the root DSE for the specified url
     *
     * @public
     * @param {String} url The url to retrieve the root DSE for.
     * @param {Array} [attributes] The optional list of attributes to retrieve. Returns all if not specified.
     * @param {Function} callback The callback to execute when the getRootDSE is completed. callback(err: {Object}, result: {Object})
     */
    getRootDSE: (url: any, attributes: any, callback: (err?: string | object, result?: string | number | boolean | object) => any) => void;
}
export = ActiveDirectory;
