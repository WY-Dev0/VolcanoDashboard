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
 * The IoK8sApiCoreV1ModifyVolumeStatus model module.
 * @module model/IoK8sApiCoreV1ModifyVolumeStatus
 * @version v1.30.0
 */
class IoK8sApiCoreV1ModifyVolumeStatus {
    /**
     * Constructs a new <code>IoK8sApiCoreV1ModifyVolumeStatus</code>.
     * ModifyVolumeStatus represents the status object of ControllerModifyVolume operation
     * @alias module:model/IoK8sApiCoreV1ModifyVolumeStatus
     * @param status {module:model/IoK8sApiCoreV1ModifyVolumeStatus.StatusEnum} status is the status of the ControllerModifyVolume operation. It can be in any of following states:  - Pending    Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as    the specified VolumeAttributesClass not existing.  - InProgress    InProgress indicates that the volume is being modified.  - Infeasible   Infeasible indicates that the request has been rejected as invalid by the CSI driver. To    resolve the error, a valid VolumeAttributesClass needs to be specified. Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.  Possible enum values:  - `\"InProgress\"` InProgress indicates that the volume is being modified  - `\"Infeasible\"` Infeasible indicates that the request has been rejected as invalid by the CSI driver. To resolve the error, a valid VolumeAttributesClass needs to be specified  - `\"Pending\"` Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as the specified VolumeAttributesClass not existing
     */
    constructor(status) { 
        
        IoK8sApiCoreV1ModifyVolumeStatus.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1ModifyVolumeStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1ModifyVolumeStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1ModifyVolumeStatus} The populated <code>IoK8sApiCoreV1ModifyVolumeStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1ModifyVolumeStatus();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('targetVolumeAttributesClassName')) {
                obj['targetVolumeAttributesClassName'] = ApiClient.convertToType(data['targetVolumeAttributesClassName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1ModifyVolumeStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1ModifyVolumeStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1ModifyVolumeStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['targetVolumeAttributesClassName'] && !(typeof data['targetVolumeAttributesClassName'] === 'string' || data['targetVolumeAttributesClassName'] instanceof String)) {
            throw new Error("Expected the field `targetVolumeAttributesClassName` to be a primitive type in the JSON string but got " + data['targetVolumeAttributesClassName']);
        }

        return true;
    }


}

IoK8sApiCoreV1ModifyVolumeStatus.RequiredProperties = ["status"];

/**
 * status is the status of the ControllerModifyVolume operation. It can be in any of following states:  - Pending    Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as    the specified VolumeAttributesClass not existing.  - InProgress    InProgress indicates that the volume is being modified.  - Infeasible   Infeasible indicates that the request has been rejected as invalid by the CSI driver. To    resolve the error, a valid VolumeAttributesClass needs to be specified. Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.  Possible enum values:  - `\"InProgress\"` InProgress indicates that the volume is being modified  - `\"Infeasible\"` Infeasible indicates that the request has been rejected as invalid by the CSI driver. To resolve the error, a valid VolumeAttributesClass needs to be specified  - `\"Pending\"` Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as the specified VolumeAttributesClass not existing
 * @member {module:model/IoK8sApiCoreV1ModifyVolumeStatus.StatusEnum} status
 */
IoK8sApiCoreV1ModifyVolumeStatus.prototype['status'] = undefined;

/**
 * targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
 * @member {String} targetVolumeAttributesClassName
 */
IoK8sApiCoreV1ModifyVolumeStatus.prototype['targetVolumeAttributesClassName'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1ModifyVolumeStatus['StatusEnum'] = {

    /**
     * value: "InProgress"
     * @const
     */
    "InProgress": "InProgress",

    /**
     * value: "Infeasible"
     * @const
     */
    "Infeasible": "Infeasible",

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending"
};



export default IoK8sApiCoreV1ModifyVolumeStatus;

