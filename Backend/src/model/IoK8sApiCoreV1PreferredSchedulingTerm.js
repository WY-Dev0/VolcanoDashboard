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
import IoK8sApiCoreV1NodeSelectorTerm from './IoK8sApiCoreV1NodeSelectorTerm';

/**
 * The IoK8sApiCoreV1PreferredSchedulingTerm model module.
 * @module model/IoK8sApiCoreV1PreferredSchedulingTerm
 * @version v1.30.0
 */
class IoK8sApiCoreV1PreferredSchedulingTerm {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PreferredSchedulingTerm</code>.
     * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it&#39;s a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
     * @alias module:model/IoK8sApiCoreV1PreferredSchedulingTerm
     * @param preference {module:model/IoK8sApiCoreV1NodeSelectorTerm} 
     * @param weight {Number} Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
     */
    constructor(preference, weight) { 
        
        IoK8sApiCoreV1PreferredSchedulingTerm.initialize(this, preference, weight);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, preference, weight) { 
        obj['preference'] = preference;
        obj['weight'] = weight;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1PreferredSchedulingTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PreferredSchedulingTerm} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PreferredSchedulingTerm} The populated <code>IoK8sApiCoreV1PreferredSchedulingTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PreferredSchedulingTerm();

            if (data.hasOwnProperty('preference')) {
                obj['preference'] = IoK8sApiCoreV1NodeSelectorTerm.constructFromObject(data['preference']);
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PreferredSchedulingTerm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PreferredSchedulingTerm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1PreferredSchedulingTerm.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `preference`
        if (data['preference']) { // data not null
          IoK8sApiCoreV1NodeSelectorTerm.validateJSON(data['preference']);
        }

        return true;
    }


}

IoK8sApiCoreV1PreferredSchedulingTerm.RequiredProperties = ["preference", "weight"];

/**
 * @member {module:model/IoK8sApiCoreV1NodeSelectorTerm} preference
 */
IoK8sApiCoreV1PreferredSchedulingTerm.prototype['preference'] = undefined;

/**
 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
 * @member {Number} weight
 */
IoK8sApiCoreV1PreferredSchedulingTerm.prototype['weight'] = undefined;






export default IoK8sApiCoreV1PreferredSchedulingTerm;

