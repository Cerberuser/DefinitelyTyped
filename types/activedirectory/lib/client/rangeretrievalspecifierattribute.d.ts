/**
 * Multi-valued attribute range retreival specifier.
 *
 * @private
 * @constructor
 * @param {String|Object} attribute The actual attribute name. May also contain a full range retrieval specifier for parsing. (i.e. [attribute];range=[low]-[high]). Optionally an object can be specified.
 * @returns {RangeRetrievalSpecifierAttribute}
 */
declare class RangeRetrievalSpecifierAttribute {
    constructor(attribute: any);
    /**
     * Gets the next range retrieval specifier for a query.
     *
     * @private
     * @returns {String}
     */
    next: () => any;
    /**
     * Checks to see if the range specifier has been exhausted or completed.
     *
     * @private
     * @returns {Boolean}
     */
    isComplete: () => boolean;
    /**
     * Gets the string representation of the range retrieval specifier.
     *
     * @private
     * @returns {String}
     */
    toString(): string;
    attributeName: string;
    low: number;
    high?: number;
    /**
     * Retrieves all of the attributes which have range attributes specified.
     *
     * @private
     * @static
     * @param {Object} item The value to extract the range retrieval attributes from.
     * @returns {Array[RangeRetrievalSpecifierAttribute]}
     */
    getRangeAttributes: (item: any) => any[];
    /**
     * Checks to see if the specified attribute is a range retrieval attribute.
     *
     * @private
     * @static
     * @param {String} attribute The attribute to inspect.
     * @returns {Boolean}
     */
    isRangeAttribute: (attribute: any) => boolean;
    /**
     * Checks to see if the specified object has any range retrieval attributes.
     *
     * @private
     * @static
     * @param {Object} item The value to check for range retrieval specifiers.
     * @returns {Boolean}
     */
    hasRangeAttributes: (item: any) => boolean;
}
export = RangeRetrievalSpecifierAttribute;
