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
import IoK8sApimachineryPkgApisMetaV1LabelSelector from './IoK8sApimachineryPkgApisMetaV1LabelSelector';

/**
 * The IoK8sApiPolicyV1PodDisruptionBudgetSpec model module.
 * @module model/IoK8sApiPolicyV1PodDisruptionBudgetSpec
 * @version v1.30.0
 */
class IoK8sApiPolicyV1PodDisruptionBudgetSpec {
    /**
     * Constructs a new <code>IoK8sApiPolicyV1PodDisruptionBudgetSpec</code>.
     * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
     * @alias module:model/IoK8sApiPolicyV1PodDisruptionBudgetSpec
     */
    constructor() { 
        
        IoK8sApiPolicyV1PodDisruptionBudgetSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiPolicyV1PodDisruptionBudgetSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiPolicyV1PodDisruptionBudgetSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiPolicyV1PodDisruptionBudgetSpec} The populated <code>IoK8sApiPolicyV1PodDisruptionBudgetSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiPolicyV1PodDisruptionBudgetSpec();

            if (data.hasOwnProperty('maxUnavailable')) {
                obj['maxUnavailable'] = ApiClient.convertToType(data['maxUnavailable'], 'String');
            }
            if (data.hasOwnProperty('minAvailable')) {
                obj['minAvailable'] = ApiClient.convertToType(data['minAvailable'], 'String');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = IoK8sApimachineryPkgApisMetaV1LabelSelector.constructFromObject(data['selector']);
            }
            if (data.hasOwnProperty('unhealthyPodEvictionPolicy')) {
                obj['unhealthyPodEvictionPolicy'] = ApiClient.convertToType(data['unhealthyPodEvictionPolicy'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiPolicyV1PodDisruptionBudgetSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiPolicyV1PodDisruptionBudgetSpec</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['maxUnavailable'] && !(typeof data['maxUnavailable'] === 'string' || data['maxUnavailable'] instanceof String)) {
            throw new Error("Expected the field `maxUnavailable` to be a primitive type in the JSON string but got " + data['maxUnavailable']);
        }
        // ensure the json data is a string
        if (data['minAvailable'] && !(typeof data['minAvailable'] === 'string' || data['minAvailable'] instanceof String)) {
            throw new Error("Expected the field `minAvailable` to be a primitive type in the JSON string but got " + data['minAvailable']);
        }
        // validate the optional field `selector`
        if (data['selector']) { // data not null
          IoK8sApimachineryPkgApisMetaV1LabelSelector.validateJSON(data['selector']);
        }
        // ensure the json data is a string
        if (data['unhealthyPodEvictionPolicy'] && !(typeof data['unhealthyPodEvictionPolicy'] === 'string' || data['unhealthyPodEvictionPolicy'] instanceof String)) {
            throw new Error("Expected the field `unhealthyPodEvictionPolicy` to be a primitive type in the JSON string but got " + data['unhealthyPodEvictionPolicy']);
        }

        return true;
    }


}



/**
 * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
 * @member {String} maxUnavailable
 */
IoK8sApiPolicyV1PodDisruptionBudgetSpec.prototype['maxUnavailable'] = undefined;

/**
 * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
 * @member {String} minAvailable
 */
IoK8sApiPolicyV1PodDisruptionBudgetSpec.prototype['minAvailable'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1LabelSelector} selector
 */
IoK8sApiPolicyV1PodDisruptionBudgetSpec.prototype['selector'] = undefined;

/**
 * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type=\"Ready\",status=\"True\".  Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.  IfHealthyBudget policy means that running pods (status.phase=\"Running\"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.  AlwaysAllow policy means that all running pods (status.phase=\"Running\"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.  Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.  This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).  Possible enum values:  - `\"AlwaysAllow\"` policy means that all running pods (status.phase=\"Running\"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.  - `\"IfHealthyBudget\"` policy means that running pods (status.phase=\"Running\"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
 * @member {module:model/IoK8sApiPolicyV1PodDisruptionBudgetSpec.UnhealthyPodEvictionPolicyEnum} unhealthyPodEvictionPolicy
 */
IoK8sApiPolicyV1PodDisruptionBudgetSpec.prototype['unhealthyPodEvictionPolicy'] = undefined;





/**
 * Allowed values for the <code>unhealthyPodEvictionPolicy</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiPolicyV1PodDisruptionBudgetSpec['UnhealthyPodEvictionPolicyEnum'] = {

    /**
     * value: "AlwaysAllow"
     * @const
     */
    "AlwaysAllow": "AlwaysAllow",

    /**
     * value: "IfHealthyBudget"
     * @const
     */
    "IfHealthyBudget": "IfHealthyBudget"
};



export default IoK8sApiPolicyV1PodDisruptionBudgetSpec;
