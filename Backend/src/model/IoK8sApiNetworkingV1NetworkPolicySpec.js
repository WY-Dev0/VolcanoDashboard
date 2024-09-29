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
import IoK8sApiNetworkingV1NetworkPolicyEgressRule from './IoK8sApiNetworkingV1NetworkPolicyEgressRule';
import IoK8sApiNetworkingV1NetworkPolicyIngressRule from './IoK8sApiNetworkingV1NetworkPolicyIngressRule';
import IoK8sApimachineryPkgApisMetaV1LabelSelector from './IoK8sApimachineryPkgApisMetaV1LabelSelector';

/**
 * The IoK8sApiNetworkingV1NetworkPolicySpec model module.
 * @module model/IoK8sApiNetworkingV1NetworkPolicySpec
 * @version v1.30.0
 */
class IoK8sApiNetworkingV1NetworkPolicySpec {
    /**
     * Constructs a new <code>IoK8sApiNetworkingV1NetworkPolicySpec</code>.
     * NetworkPolicySpec provides the specification of a NetworkPolicy
     * @alias module:model/IoK8sApiNetworkingV1NetworkPolicySpec
     * @param podSelector {module:model/IoK8sApimachineryPkgApisMetaV1LabelSelector} 
     */
    constructor(podSelector) { 
        
        IoK8sApiNetworkingV1NetworkPolicySpec.initialize(this, podSelector);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, podSelector) { 
        obj['podSelector'] = podSelector;
    }

    /**
     * Constructs a <code>IoK8sApiNetworkingV1NetworkPolicySpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiNetworkingV1NetworkPolicySpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiNetworkingV1NetworkPolicySpec} The populated <code>IoK8sApiNetworkingV1NetworkPolicySpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiNetworkingV1NetworkPolicySpec();

            if (data.hasOwnProperty('egress')) {
                obj['egress'] = ApiClient.convertToType(data['egress'], [IoK8sApiNetworkingV1NetworkPolicyEgressRule]);
            }
            if (data.hasOwnProperty('ingress')) {
                obj['ingress'] = ApiClient.convertToType(data['ingress'], [IoK8sApiNetworkingV1NetworkPolicyIngressRule]);
            }
            if (data.hasOwnProperty('podSelector')) {
                obj['podSelector'] = IoK8sApimachineryPkgApisMetaV1LabelSelector.constructFromObject(data['podSelector']);
            }
            if (data.hasOwnProperty('policyTypes')) {
                obj['policyTypes'] = ApiClient.convertToType(data['policyTypes'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiNetworkingV1NetworkPolicySpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiNetworkingV1NetworkPolicySpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiNetworkingV1NetworkPolicySpec.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['egress']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['egress'])) {
                throw new Error("Expected the field `egress` to be an array in the JSON data but got " + data['egress']);
            }
            // validate the optional field `egress` (array)
            for (const item of data['egress']) {
                IoK8sApiNetworkingV1NetworkPolicyEgressRule.validateJSON(item);
            };
        }
        if (data['ingress']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['ingress'])) {
                throw new Error("Expected the field `ingress` to be an array in the JSON data but got " + data['ingress']);
            }
            // validate the optional field `ingress` (array)
            for (const item of data['ingress']) {
                IoK8sApiNetworkingV1NetworkPolicyIngressRule.validateJSON(item);
            };
        }
        // validate the optional field `podSelector`
        if (data['podSelector']) { // data not null
          IoK8sApimachineryPkgApisMetaV1LabelSelector.validateJSON(data['podSelector']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['policyTypes'])) {
            throw new Error("Expected the field `policyTypes` to be an array in the JSON data but got " + data['policyTypes']);
        }

        return true;
    }


}

IoK8sApiNetworkingV1NetworkPolicySpec.RequiredProperties = ["podSelector"];

/**
 * egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
 * @member {Array.<module:model/IoK8sApiNetworkingV1NetworkPolicyEgressRule>} egress
 */
IoK8sApiNetworkingV1NetworkPolicySpec.prototype['egress'] = undefined;

/**
 * ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
 * @member {Array.<module:model/IoK8sApiNetworkingV1NetworkPolicyIngressRule>} ingress
 */
IoK8sApiNetworkingV1NetworkPolicySpec.prototype['ingress'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1LabelSelector} podSelector
 */
IoK8sApiNetworkingV1NetworkPolicySpec.prototype['podSelector'] = undefined;

/**
 * policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are [\"Ingress\"], [\"Egress\"], or [\"Ingress\", \"Egress\"]. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ \"Egress\" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include \"Egress\" (since such a policy would not include an egress section and would otherwise default to just [ \"Ingress\" ]). This field is beta-level in 1.8
 * @member {Array.<module:model/IoK8sApiNetworkingV1NetworkPolicySpec.PolicyTypesEnum>} policyTypes
 */
IoK8sApiNetworkingV1NetworkPolicySpec.prototype['policyTypes'] = undefined;





/**
 * Allowed values for the <code>policyTypes</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiNetworkingV1NetworkPolicySpec['PolicyTypesEnum'] = {

    /**
     * value: "Egress"
     * @const
     */
    "Egress": "Egress",

    /**
     * value: "Ingress"
     * @const
     */
    "Ingress": "Ingress"
};



export default IoK8sApiNetworkingV1NetworkPolicySpec;

