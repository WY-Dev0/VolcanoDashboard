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
import IoK8sApiStorageV1CSINodeDriver from './IoK8sApiStorageV1CSINodeDriver';

/**
 * The IoK8sApiStorageV1CSINodeSpec model module.
 * @module model/IoK8sApiStorageV1CSINodeSpec
 * @version v1.30.0
 */
class IoK8sApiStorageV1CSINodeSpec {
    /**
     * Constructs a new <code>IoK8sApiStorageV1CSINodeSpec</code>.
     * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
     * @alias module:model/IoK8sApiStorageV1CSINodeSpec
     * @param drivers {Array.<module:model/IoK8sApiStorageV1CSINodeDriver>} drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
     */
    constructor(drivers) { 
        
        IoK8sApiStorageV1CSINodeSpec.initialize(this, drivers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, drivers) { 
        obj['drivers'] = drivers;
    }

    /**
     * Constructs a <code>IoK8sApiStorageV1CSINodeSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiStorageV1CSINodeSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiStorageV1CSINodeSpec} The populated <code>IoK8sApiStorageV1CSINodeSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiStorageV1CSINodeSpec();

            if (data.hasOwnProperty('drivers')) {
                obj['drivers'] = ApiClient.convertToType(data['drivers'], [IoK8sApiStorageV1CSINodeDriver]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiStorageV1CSINodeSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiStorageV1CSINodeSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiStorageV1CSINodeSpec.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['drivers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['drivers'])) {
                throw new Error("Expected the field `drivers` to be an array in the JSON data but got " + data['drivers']);
            }
            // validate the optional field `drivers` (array)
            for (const item of data['drivers']) {
                IoK8sApiStorageV1CSINodeDriver.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiStorageV1CSINodeSpec.RequiredProperties = ["drivers"];

/**
 * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
 * @member {Array.<module:model/IoK8sApiStorageV1CSINodeDriver>} drivers
 */
IoK8sApiStorageV1CSINodeSpec.prototype['drivers'] = undefined;






export default IoK8sApiStorageV1CSINodeSpec;
