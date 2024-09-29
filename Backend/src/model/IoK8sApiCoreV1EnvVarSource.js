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
import IoK8sApiCoreV1ConfigMapKeySelector from './IoK8sApiCoreV1ConfigMapKeySelector';
import IoK8sApiCoreV1ObjectFieldSelector from './IoK8sApiCoreV1ObjectFieldSelector';
import IoK8sApiCoreV1ResourceFieldSelector from './IoK8sApiCoreV1ResourceFieldSelector';
import IoK8sApiCoreV1SecretKeySelector from './IoK8sApiCoreV1SecretKeySelector';

/**
 * The IoK8sApiCoreV1EnvVarSource model module.
 * @module model/IoK8sApiCoreV1EnvVarSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1EnvVarSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1EnvVarSource</code>.
     * EnvVarSource represents a source for the value of an EnvVar.
     * @alias module:model/IoK8sApiCoreV1EnvVarSource
     */
    constructor() { 
        
        IoK8sApiCoreV1EnvVarSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1EnvVarSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1EnvVarSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1EnvVarSource} The populated <code>IoK8sApiCoreV1EnvVarSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1EnvVarSource();

            if (data.hasOwnProperty('configMapKeyRef')) {
                obj['configMapKeyRef'] = IoK8sApiCoreV1ConfigMapKeySelector.constructFromObject(data['configMapKeyRef']);
            }
            if (data.hasOwnProperty('fieldRef')) {
                obj['fieldRef'] = IoK8sApiCoreV1ObjectFieldSelector.constructFromObject(data['fieldRef']);
            }
            if (data.hasOwnProperty('resourceFieldRef')) {
                obj['resourceFieldRef'] = IoK8sApiCoreV1ResourceFieldSelector.constructFromObject(data['resourceFieldRef']);
            }
            if (data.hasOwnProperty('secretKeyRef')) {
                obj['secretKeyRef'] = IoK8sApiCoreV1SecretKeySelector.constructFromObject(data['secretKeyRef']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1EnvVarSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1EnvVarSource</code>.
     */
    static validateJSON(data) {
        // validate the optional field `configMapKeyRef`
        if (data['configMapKeyRef']) { // data not null
          IoK8sApiCoreV1ConfigMapKeySelector.validateJSON(data['configMapKeyRef']);
        }
        // validate the optional field `fieldRef`
        if (data['fieldRef']) { // data not null
          IoK8sApiCoreV1ObjectFieldSelector.validateJSON(data['fieldRef']);
        }
        // validate the optional field `resourceFieldRef`
        if (data['resourceFieldRef']) { // data not null
          IoK8sApiCoreV1ResourceFieldSelector.validateJSON(data['resourceFieldRef']);
        }
        // validate the optional field `secretKeyRef`
        if (data['secretKeyRef']) { // data not null
          IoK8sApiCoreV1SecretKeySelector.validateJSON(data['secretKeyRef']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiCoreV1ConfigMapKeySelector} configMapKeyRef
 */
IoK8sApiCoreV1EnvVarSource.prototype['configMapKeyRef'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ObjectFieldSelector} fieldRef
 */
IoK8sApiCoreV1EnvVarSource.prototype['fieldRef'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ResourceFieldSelector} resourceFieldRef
 */
IoK8sApiCoreV1EnvVarSource.prototype['resourceFieldRef'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1SecretKeySelector} secretKeyRef
 */
IoK8sApiCoreV1EnvVarSource.prototype['secretKeyRef'] = undefined;






export default IoK8sApiCoreV1EnvVarSource;
