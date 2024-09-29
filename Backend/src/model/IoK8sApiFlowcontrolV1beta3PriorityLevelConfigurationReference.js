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

/**
 * The IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference model module.
 * @module model/IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference
 * @version v1.30.0
 */
class IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference {
    /**
     * Constructs a new <code>IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference</code>.
     * PriorityLevelConfigurationReference contains information that points to the \&quot;request-priority\&quot; being used.
     * @alias module:model/IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference
     * @param name {String} `name` is the name of the priority level configuration being referenced Required.
     */
    constructor(name) { 
        
        IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference.initialize(this, name);
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
     * Constructs a <code>IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference} obj Optional instance to populate.
     * @return {module:model/IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference} The populated <code>IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference.RequiredProperties = ["name"];

/**
 * `name` is the name of the priority level configuration being referenced Required.
 * @member {String} name
 */
IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference.prototype['name'] = undefined;






export default IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference;

