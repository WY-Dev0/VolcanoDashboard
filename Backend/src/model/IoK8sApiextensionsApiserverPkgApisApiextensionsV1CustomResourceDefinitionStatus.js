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
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition';
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames';

/**
 * The IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus model module.
 * @module model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus
 * @version v1.30.0
 */
class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus {
    /**
     * Constructs a new <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus</code>.
     * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
     * @alias module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus
     */
    constructor() { 
        
        IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus} The populated <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus();

            if (data.hasOwnProperty('acceptedNames')) {
                obj['acceptedNames'] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames.constructFromObject(data['acceptedNames']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition]);
            }
            if (data.hasOwnProperty('storedVersions')) {
                obj['storedVersions'] = ApiClient.convertToType(data['storedVersions'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus</code>.
     */
    static validateJSON(data) {
        // validate the optional field `acceptedNames`
        if (data['acceptedNames']) { // data not null
          IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames.validateJSON(data['acceptedNames']);
        }
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['storedVersions'])) {
            throw new Error("Expected the field `storedVersions` to be an array in the JSON data but got " + data['storedVersions']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames} acceptedNames
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus.prototype['acceptedNames'] = undefined;

/**
 * conditions indicate state for particular aspects of a CustomResourceDefinition
 * @member {Array.<module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition>} conditions
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus.prototype['conditions'] = undefined;

/**
 * storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
 * @member {Array.<String>} storedVersions
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus.prototype['storedVersions'] = undefined;






export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus;

