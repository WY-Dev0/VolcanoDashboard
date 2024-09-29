/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IoK8sApiCoreV1TopologySelectorLabelRequirement from './IoK8sApiCoreV1TopologySelectorLabelRequirement';

/**
 * The IoK8sApiCoreV1TopologySelectorTerm model module.
 * @module model/IoK8sApiCoreV1TopologySelectorTerm
 * @version v1.30.0
 */
class IoK8sApiCoreV1TopologySelectorTerm {
    /**
     * Constructs a new <code>IoK8sApiCoreV1TopologySelectorTerm</code>.
     * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
     * @alias module:model/IoK8sApiCoreV1TopologySelectorTerm
     */
    constructor() { 
        
        IoK8sApiCoreV1TopologySelectorTerm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1TopologySelectorTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1TopologySelectorTerm} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1TopologySelectorTerm} The populated <code>IoK8sApiCoreV1TopologySelectorTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1TopologySelectorTerm();

            if (data.hasOwnProperty('matchLabelExpressions')) {
                obj['matchLabelExpressions'] = ApiClient.convertToType(data['matchLabelExpressions'], [IoK8sApiCoreV1TopologySelectorLabelRequirement]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1TopologySelectorTerm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1TopologySelectorTerm</code>.
     */
    static validateJSON(data) {
        if (data['matchLabelExpressions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['matchLabelExpressions'])) {
                throw new Error("Expected the field `matchLabelExpressions` to be an array in the JSON data but got " + data['matchLabelExpressions']);
            }
            // validate the optional field `matchLabelExpressions` (array)
            for (const item of data['matchLabelExpressions']) {
                IoK8sApiCoreV1TopologySelectorLabelRequirement.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A list of topology selector requirements by labels.
 * @member {Array.<module:model/IoK8sApiCoreV1TopologySelectorLabelRequirement>} matchLabelExpressions
 */
IoK8sApiCoreV1TopologySelectorTerm.prototype['matchLabelExpressions'] = undefined;






export default IoK8sApiCoreV1TopologySelectorTerm;
