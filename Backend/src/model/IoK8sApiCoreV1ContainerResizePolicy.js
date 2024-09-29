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
 * The IoK8sApiCoreV1ContainerResizePolicy model module.
 * @module model/IoK8sApiCoreV1ContainerResizePolicy
 * @version v1.30.0
 */
class IoK8sApiCoreV1ContainerResizePolicy {
    /**
     * Constructs a new <code>IoK8sApiCoreV1ContainerResizePolicy</code>.
     * ContainerResizePolicy represents resource resize policy for the container.
     * @alias module:model/IoK8sApiCoreV1ContainerResizePolicy
     * @param resourceName {String} Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
     * @param restartPolicy {String} Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
     */
    constructor(resourceName, restartPolicy) { 
        
        IoK8sApiCoreV1ContainerResizePolicy.initialize(this, resourceName, restartPolicy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, resourceName, restartPolicy) { 
        obj['resourceName'] = resourceName;
        obj['restartPolicy'] = restartPolicy;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1ContainerResizePolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1ContainerResizePolicy} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1ContainerResizePolicy} The populated <code>IoK8sApiCoreV1ContainerResizePolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1ContainerResizePolicy();

            if (data.hasOwnProperty('resourceName')) {
                obj['resourceName'] = ApiClient.convertToType(data['resourceName'], 'String');
            }
            if (data.hasOwnProperty('restartPolicy')) {
                obj['restartPolicy'] = ApiClient.convertToType(data['restartPolicy'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1ContainerResizePolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1ContainerResizePolicy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1ContainerResizePolicy.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['resourceName'] && !(typeof data['resourceName'] === 'string' || data['resourceName'] instanceof String)) {
            throw new Error("Expected the field `resourceName` to be a primitive type in the JSON string but got " + data['resourceName']);
        }
        // ensure the json data is a string
        if (data['restartPolicy'] && !(typeof data['restartPolicy'] === 'string' || data['restartPolicy'] instanceof String)) {
            throw new Error("Expected the field `restartPolicy` to be a primitive type in the JSON string but got " + data['restartPolicy']);
        }

        return true;
    }


}

IoK8sApiCoreV1ContainerResizePolicy.RequiredProperties = ["resourceName", "restartPolicy"];

/**
 * Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
 * @member {String} resourceName
 */
IoK8sApiCoreV1ContainerResizePolicy.prototype['resourceName'] = undefined;

/**
 * Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
 * @member {String} restartPolicy
 */
IoK8sApiCoreV1ContainerResizePolicy.prototype['restartPolicy'] = undefined;






export default IoK8sApiCoreV1ContainerResizePolicy;

