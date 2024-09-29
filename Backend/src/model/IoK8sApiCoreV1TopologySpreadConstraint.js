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
 * The IoK8sApiCoreV1TopologySpreadConstraint model module.
 * @module model/IoK8sApiCoreV1TopologySpreadConstraint
 * @version v1.30.0
 */
class IoK8sApiCoreV1TopologySpreadConstraint {
    /**
     * Constructs a new <code>IoK8sApiCoreV1TopologySpreadConstraint</code>.
     * TopologySpreadConstraint specifies how to spread matching pods among the given topology.
     * @alias module:model/IoK8sApiCoreV1TopologySpreadConstraint
     * @param maxSkew {Number} MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
     * @param topologyKey {String} TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a \"bucket\", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is \"kubernetes.io/hostname\", each Node is a domain of that topology. And, if TopologyKey is \"topology.kubernetes.io/zone\", each zone is a domain of that topology. It's a required field.
     * @param whenUnsatisfiable {module:model/IoK8sApiCoreV1TopologySpreadConstraint.WhenUnsatisfiableEnum} WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,   but giving higher precedence to topologies that would help reduce the   skew. A constraint is considered \"Unsatisfiable\" for an incoming pod if and only if every possible node assignment for that pod would violate \"MaxSkew\" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.  Possible enum values:  - `\"DoNotSchedule\"` instructs the scheduler not to schedule the pod when constraints are not satisfied.  - `\"ScheduleAnyway\"` instructs the scheduler to schedule the pod even if constraints are not satisfied.
     */
    constructor(maxSkew, topologyKey, whenUnsatisfiable) { 
        
        IoK8sApiCoreV1TopologySpreadConstraint.initialize(this, maxSkew, topologyKey, whenUnsatisfiable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxSkew, topologyKey, whenUnsatisfiable) { 
        obj['maxSkew'] = maxSkew;
        obj['topologyKey'] = topologyKey;
        obj['whenUnsatisfiable'] = whenUnsatisfiable;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1TopologySpreadConstraint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1TopologySpreadConstraint} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1TopologySpreadConstraint} The populated <code>IoK8sApiCoreV1TopologySpreadConstraint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1TopologySpreadConstraint();

            if (data.hasOwnProperty('labelSelector')) {
                obj['labelSelector'] = IoK8sApimachineryPkgApisMetaV1LabelSelector.constructFromObject(data['labelSelector']);
            }
            if (data.hasOwnProperty('matchLabelKeys')) {
                obj['matchLabelKeys'] = ApiClient.convertToType(data['matchLabelKeys'], ['String']);
            }
            if (data.hasOwnProperty('maxSkew')) {
                obj['maxSkew'] = ApiClient.convertToType(data['maxSkew'], 'Number');
            }
            if (data.hasOwnProperty('minDomains')) {
                obj['minDomains'] = ApiClient.convertToType(data['minDomains'], 'Number');
            }
            if (data.hasOwnProperty('nodeAffinityPolicy')) {
                obj['nodeAffinityPolicy'] = ApiClient.convertToType(data['nodeAffinityPolicy'], 'String');
            }
            if (data.hasOwnProperty('nodeTaintsPolicy')) {
                obj['nodeTaintsPolicy'] = ApiClient.convertToType(data['nodeTaintsPolicy'], 'String');
            }
            if (data.hasOwnProperty('topologyKey')) {
                obj['topologyKey'] = ApiClient.convertToType(data['topologyKey'], 'String');
            }
            if (data.hasOwnProperty('whenUnsatisfiable')) {
                obj['whenUnsatisfiable'] = ApiClient.convertToType(data['whenUnsatisfiable'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1TopologySpreadConstraint</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1TopologySpreadConstraint</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1TopologySpreadConstraint.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `labelSelector`
        if (data['labelSelector']) { // data not null
          IoK8sApimachineryPkgApisMetaV1LabelSelector.validateJSON(data['labelSelector']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['matchLabelKeys'])) {
            throw new Error("Expected the field `matchLabelKeys` to be an array in the JSON data but got " + data['matchLabelKeys']);
        }
        // ensure the json data is a string
        if (data['nodeAffinityPolicy'] && !(typeof data['nodeAffinityPolicy'] === 'string' || data['nodeAffinityPolicy'] instanceof String)) {
            throw new Error("Expected the field `nodeAffinityPolicy` to be a primitive type in the JSON string but got " + data['nodeAffinityPolicy']);
        }
        // ensure the json data is a string
        if (data['nodeTaintsPolicy'] && !(typeof data['nodeTaintsPolicy'] === 'string' || data['nodeTaintsPolicy'] instanceof String)) {
            throw new Error("Expected the field `nodeTaintsPolicy` to be a primitive type in the JSON string but got " + data['nodeTaintsPolicy']);
        }
        // ensure the json data is a string
        if (data['topologyKey'] && !(typeof data['topologyKey'] === 'string' || data['topologyKey'] instanceof String)) {
            throw new Error("Expected the field `topologyKey` to be a primitive type in the JSON string but got " + data['topologyKey']);
        }
        // ensure the json data is a string
        if (data['whenUnsatisfiable'] && !(typeof data['whenUnsatisfiable'] === 'string' || data['whenUnsatisfiable'] instanceof String)) {
            throw new Error("Expected the field `whenUnsatisfiable` to be a primitive type in the JSON string but got " + data['whenUnsatisfiable']);
        }

        return true;
    }


}

IoK8sApiCoreV1TopologySpreadConstraint.RequiredProperties = ["maxSkew", "topologyKey", "whenUnsatisfiable"];

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1LabelSelector} labelSelector
 */
IoK8sApiCoreV1TopologySpreadConstraint.prototype['labelSelector'] = undefined;

/**
 * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector.  This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
 * @member {Array.<String>} matchLabelKeys
 */
IoK8sApiCoreV1TopologySpreadConstraint.prototype['matchLabelKeys'] = undefined;

/**
 * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
 * @member {Number} maxSkew
 */
IoK8sApiCoreV1TopologySpreadConstraint.prototype['maxSkew'] = undefined;

/**
 * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats \"global minimum\" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule.  For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | |  P P  |  P P  |  P P  | The number of domains is less than 5(MinDomains), so \"global minimum\" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
 * @member {Number} minDomains
 */
IoK8sApiCoreV1TopologySpreadConstraint.prototype['minDomains'] = undefined;

/**
 * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.  If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.  Possible enum values:  - `\"Honor\"` means use this scheduling directive when calculating pod topology spread skew.  - `\"Ignore\"` means ignore this scheduling directive when calculating pod topology spread skew.
 * @member {module:model/IoK8sApiCoreV1TopologySpreadConstraint.NodeAffinityPolicyEnum} nodeAffinityPolicy
 */
IoK8sApiCoreV1TopologySpreadConstraint.prototype['nodeAffinityPolicy'] = undefined;

/**
 * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included.  If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.  Possible enum values:  - `\"Honor\"` means use this scheduling directive when calculating pod topology spread skew.  - `\"Ignore\"` means ignore this scheduling directive when calculating pod topology spread skew.
 * @member {module:model/IoK8sApiCoreV1TopologySpreadConstraint.NodeTaintsPolicyEnum} nodeTaintsPolicy
 */
IoK8sApiCoreV1TopologySpreadConstraint.prototype['nodeTaintsPolicy'] = undefined;

/**
 * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a \"bucket\", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is \"kubernetes.io/hostname\", each Node is a domain of that topology. And, if TopologyKey is \"topology.kubernetes.io/zone\", each zone is a domain of that topology. It's a required field.
 * @member {String} topologyKey
 */
IoK8sApiCoreV1TopologySpreadConstraint.prototype['topologyKey'] = undefined;

/**
 * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,   but giving higher precedence to topologies that would help reduce the   skew. A constraint is considered \"Unsatisfiable\" for an incoming pod if and only if every possible node assignment for that pod would violate \"MaxSkew\" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.  Possible enum values:  - `\"DoNotSchedule\"` instructs the scheduler not to schedule the pod when constraints are not satisfied.  - `\"ScheduleAnyway\"` instructs the scheduler to schedule the pod even if constraints are not satisfied.
 * @member {module:model/IoK8sApiCoreV1TopologySpreadConstraint.WhenUnsatisfiableEnum} whenUnsatisfiable
 */
IoK8sApiCoreV1TopologySpreadConstraint.prototype['whenUnsatisfiable'] = undefined;





/**
 * Allowed values for the <code>nodeAffinityPolicy</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1TopologySpreadConstraint['NodeAffinityPolicyEnum'] = {

    /**
     * value: "Honor"
     * @const
     */
    "Honor": "Honor",

    /**
     * value: "Ignore"
     * @const
     */
    "Ignore": "Ignore"
};


/**
 * Allowed values for the <code>nodeTaintsPolicy</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1TopologySpreadConstraint['NodeTaintsPolicyEnum'] = {

    /**
     * value: "Honor"
     * @const
     */
    "Honor": "Honor",

    /**
     * value: "Ignore"
     * @const
     */
    "Ignore": "Ignore"
};


/**
 * Allowed values for the <code>whenUnsatisfiable</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1TopologySpreadConstraint['WhenUnsatisfiableEnum'] = {

    /**
     * value: "DoNotSchedule"
     * @const
     */
    "DoNotSchedule": "DoNotSchedule",

    /**
     * value: "ScheduleAnyway"
     * @const
     */
    "ScheduleAnyway": "ScheduleAnyway"
};



export default IoK8sApiCoreV1TopologySpreadConstraint;

