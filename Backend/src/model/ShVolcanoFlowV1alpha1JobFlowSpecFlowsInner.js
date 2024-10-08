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
import ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn from './ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn';

/**
 * The ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner model module.
 * @module model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner
 * @version v1.30.0
 */
class ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner {
    /**
     * Constructs a new <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner</code>.
     * @alias module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner
     * @param name {String} 
     */
    constructor(name) { 
        
        ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner} obj Optional instance to populate.
     * @return {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner} The populated <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner();

            if (data.hasOwnProperty('dependsOn')) {
                obj['dependsOn'] = ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn.constructFromObject(data['dependsOn']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `dependsOn`
        if (data['dependsOn']) { // data not null
          ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn.validateJSON(data['dependsOn']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner.RequiredProperties = ["name"];

/**
 * @member {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn} dependsOn
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner.prototype['dependsOn'] = undefined;

/**
 * @member {String} name
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner.prototype['name'] = undefined;






export default ShVolcanoFlowV1alpha1JobFlowSpecFlowsInner;

