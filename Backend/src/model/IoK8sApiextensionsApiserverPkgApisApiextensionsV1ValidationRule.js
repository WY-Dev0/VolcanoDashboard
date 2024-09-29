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
 * The IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule model module.
 * @module model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule
 * @version v1.30.0
 */
class IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule {
    /**
     * Constructs a new <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule</code>.
     * ValidationRule describes a validation rule written in the CEL expression language.
     * @alias module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule
     * @param rule {String} Rule represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec The Rule is scoped to the location of the x-kubernetes-validations extension in the schema. The `self` variable in the CEL expression is bound to the scoped value. Example: - Rule scoped to the root of a resource with a status subresource: {\"rule\": \"self.status.actual <= self.spec.maxDesired\"}  If the Rule is scoped to an object with properties, the accessible properties of the object are field selectable via `self.field` and field presence can be checked via `has(self.field)`. Null valued fields are treated as absent fields in CEL expressions. If the Rule is scoped to an object with additionalProperties (i.e. a map) the value of the map are accessible via `self[mapKey]`, map containment can be checked via `mapKey in self` and all entries of the map are accessible via CEL macros and functions such as `self.all(...)`. If the Rule is scoped to an array, the elements of the array are accessible via `self[i]` and also by macros and functions. If the Rule is scoped to a scalar, `self` is bound to the scalar value. Examples: - Rule scoped to a map of objects: {\"rule\": \"self.components['Widget'].priority < 10\"} - Rule scoped to a list of integers: {\"rule\": \"self.values.all(value, value >= 0 && value < 100)\"} - Rule scoped to a string value: {\"rule\": \"self.startsWith('kube')\"}  The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object and from any x-kubernetes-embedded-resource annotated objects. No other metadata properties are accessible.  Unknown data preserved in custom resources via x-kubernetes-preserve-unknown-fields is not accessible in CEL expressions. This includes: - Unknown field values that are preserved by object schemas with x-kubernetes-preserve-unknown-fields. - Object properties where the property schema is of an \"unknown type\". An \"unknown type\" is recursively defined as:   - A schema with no type and x-kubernetes-preserve-unknown-fields set to true   - An array where the items schema is of an \"unknown type\"   - An object where the additionalProperties schema is of an \"unknown type\"  Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - '__' escapes to '__underscores__' - '.' escapes to '__dot__' - '-' escapes to '__dash__' - '/' escapes to '__slash__' - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:    \"true\", \"false\", \"null\", \"in\", \"as\", \"break\", \"const\", \"continue\", \"else\", \"for\", \"function\", \"if\",    \"import\", \"let\", \"loop\", \"package\", \"namespace\", \"return\". Examples:   - Rule accessing a property named \"namespace\": {\"rule\": \"self.__namespace__ > 0\"}   - Rule accessing a property named \"x-prop\": {\"rule\": \"self.x__dash__prop > 0\"}   - Rule accessing a property named \"redact__d\": {\"rule\": \"self.redact__underscores__d > 0\"}  Equality on arrays with x-kubernetes-list-type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:   - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and     non-intersecting elements in `Y` are appended, retaining their partial order.   - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values     are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with     non-intersecting keys are appended, retaining their partial order.  If `rule` makes use of the `oldSelf` variable it is implicitly a `transition rule`.  By default, the `oldSelf` variable is the same type as `self`. When `optionalOldSelf` is true, the `oldSelf` variable is a CEL optional  variable whose value() is the same type as `self`. See the documentation for the `optionalOldSelf` field for details.  Transition rules by default are applied only on UPDATE requests and are skipped if an old value could not be found. You can opt a transition rule into unconditional evaluation by setting `optionalOldSelf` to true.
     */
    constructor(rule) { 
        
        IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.initialize(this, rule);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rule) { 
        obj['rule'] = rule;
    }

    /**
     * Constructs a <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule} obj Optional instance to populate.
     * @return {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule} The populated <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule();

            if (data.hasOwnProperty('fieldPath')) {
                obj['fieldPath'] = ApiClient.convertToType(data['fieldPath'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('messageExpression')) {
                obj['messageExpression'] = ApiClient.convertToType(data['messageExpression'], 'String');
            }
            if (data.hasOwnProperty('optionalOldSelf')) {
                obj['optionalOldSelf'] = ApiClient.convertToType(data['optionalOldSelf'], 'Boolean');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('rule')) {
                obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fieldPath'] && !(typeof data['fieldPath'] === 'string' || data['fieldPath'] instanceof String)) {
            throw new Error("Expected the field `fieldPath` to be a primitive type in the JSON string but got " + data['fieldPath']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['messageExpression'] && !(typeof data['messageExpression'] === 'string' || data['messageExpression'] instanceof String)) {
            throw new Error("Expected the field `messageExpression` to be a primitive type in the JSON string but got " + data['messageExpression']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['rule'] && !(typeof data['rule'] === 'string' || data['rule'] instanceof String)) {
            throw new Error("Expected the field `rule` to be a primitive type in the JSON string but got " + data['rule']);
        }

        return true;
    }


}

IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.RequiredProperties = ["rule"];

/**
 * fieldPath represents the field path returned when the validation fails. It must be a relative JSON path (i.e. with array notation) scoped to the location of this x-kubernetes-validations extension in the schema and refer to an existing field. e.g. when validation checks if a specific attribute `foo` under a map `testMap`, the fieldPath could be set to `.testMap.foo` If the validation checks two lists must have unique attributes, the fieldPath could be set to either of the list: e.g. `.testList` It does not support list numeric index. It supports child operation to refer to an existing field currently. Refer to [JSONPath support in Kubernetes](https://kubernetes.io/docs/reference/kubectl/jsonpath/) for more info. Numeric index of array is not supported. For field name which contains special characters, use `['specialName']` to refer the field name. e.g. for attribute `foo.34$` appears in a list `testList`, the fieldPath could be set to `.testList['foo.34$']`
 * @member {String} fieldPath
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.prototype['fieldPath'] = undefined;

/**
 * Message represents the message displayed when validation fails. The message is required if the Rule contains line breaks. The message must not contain line breaks. If unset, the message is \"failed rule: {Rule}\". e.g. \"must be a URL with the host matching spec.host\"
 * @member {String} message
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.prototype['message'] = undefined;

/**
 * MessageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a rule, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged. messageExpression has access to all the same variables as the rule; the only difference is the return type. Example: \"x must be less than max (\"+string(self.max)+\")\"
 * @member {String} messageExpression
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.prototype['messageExpression'] = undefined;

/**
 * optionalOldSelf is used to opt a transition rule into evaluation even when the object is first created, or if the old object is missing the value.  When enabled `oldSelf` will be a CEL optional whose value will be `None` if there is no old value, or when the object is initially created.  You may check for presence of oldSelf using `oldSelf.hasValue()` and unwrap it after checking using `oldSelf.value()`. Check the CEL documentation for Optional types for more information: https://pkg.go.dev/github.com/google/cel-go/cel#OptionalTypes  May not be set unless `oldSelf` is used in `rule`.
 * @member {Boolean} optionalOldSelf
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.prototype['optionalOldSelf'] = undefined;

/**
 * reason provides a machine-readable validation failure reason that is returned to the caller when a request fails this validation rule. The HTTP status code returned to the caller will match the reason of the reason of the first failed validation rule. The currently supported reasons are: \"FieldValueInvalid\", \"FieldValueForbidden\", \"FieldValueRequired\", \"FieldValueDuplicate\". If not set, default to use \"FieldValueInvalid\". All future added reasons must be accepted by clients when reading this value and unknown reasons should be treated as FieldValueInvalid.  Possible enum values:  - `\"FieldValueDuplicate\"` is used to report collisions of values that must be unique (e.g. unique IDs).  - `\"FieldValueForbidden\"` is used to report valid (as per formatting rules) values which would be accepted under some conditions, but which are not permitted by the current conditions (such as security policy).  - `\"FieldValueInvalid\"` is used to report malformed values (e.g. failed regex match, too long, out of bounds).  - `\"FieldValueRequired\"` is used to report required values that are not provided (e.g. empty strings, null values, or empty arrays).
 * @member {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.ReasonEnum} reason
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.prototype['reason'] = undefined;

/**
 * Rule represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec The Rule is scoped to the location of the x-kubernetes-validations extension in the schema. The `self` variable in the CEL expression is bound to the scoped value. Example: - Rule scoped to the root of a resource with a status subresource: {\"rule\": \"self.status.actual <= self.spec.maxDesired\"}  If the Rule is scoped to an object with properties, the accessible properties of the object are field selectable via `self.field` and field presence can be checked via `has(self.field)`. Null valued fields are treated as absent fields in CEL expressions. If the Rule is scoped to an object with additionalProperties (i.e. a map) the value of the map are accessible via `self[mapKey]`, map containment can be checked via `mapKey in self` and all entries of the map are accessible via CEL macros and functions such as `self.all(...)`. If the Rule is scoped to an array, the elements of the array are accessible via `self[i]` and also by macros and functions. If the Rule is scoped to a scalar, `self` is bound to the scalar value. Examples: - Rule scoped to a map of objects: {\"rule\": \"self.components['Widget'].priority < 10\"} - Rule scoped to a list of integers: {\"rule\": \"self.values.all(value, value >= 0 && value < 100)\"} - Rule scoped to a string value: {\"rule\": \"self.startsWith('kube')\"}  The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object and from any x-kubernetes-embedded-resource annotated objects. No other metadata properties are accessible.  Unknown data preserved in custom resources via x-kubernetes-preserve-unknown-fields is not accessible in CEL expressions. This includes: - Unknown field values that are preserved by object schemas with x-kubernetes-preserve-unknown-fields. - Object properties where the property schema is of an \"unknown type\". An \"unknown type\" is recursively defined as:   - A schema with no type and x-kubernetes-preserve-unknown-fields set to true   - An array where the items schema is of an \"unknown type\"   - An object where the additionalProperties schema is of an \"unknown type\"  Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - '__' escapes to '__underscores__' - '.' escapes to '__dot__' - '-' escapes to '__dash__' - '/' escapes to '__slash__' - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:    \"true\", \"false\", \"null\", \"in\", \"as\", \"break\", \"const\", \"continue\", \"else\", \"for\", \"function\", \"if\",    \"import\", \"let\", \"loop\", \"package\", \"namespace\", \"return\". Examples:   - Rule accessing a property named \"namespace\": {\"rule\": \"self.__namespace__ > 0\"}   - Rule accessing a property named \"x-prop\": {\"rule\": \"self.x__dash__prop > 0\"}   - Rule accessing a property named \"redact__d\": {\"rule\": \"self.redact__underscores__d > 0\"}  Equality on arrays with x-kubernetes-list-type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:   - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and     non-intersecting elements in `Y` are appended, retaining their partial order.   - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values     are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with     non-intersecting keys are appended, retaining their partial order.  If `rule` makes use of the `oldSelf` variable it is implicitly a `transition rule`.  By default, the `oldSelf` variable is the same type as `self`. When `optionalOldSelf` is true, the `oldSelf` variable is a CEL optional  variable whose value() is the same type as `self`. See the documentation for the `optionalOldSelf` field for details.  Transition rules by default are applied only on UPDATE requests and are skipped if an old value could not be found. You can opt a transition rule into unconditional evaluation by setting `optionalOldSelf` to true.
 * @member {String} rule
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule.prototype['rule'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule['ReasonEnum'] = {

    /**
     * value: "FieldValueDuplicate"
     * @const
     */
    "FieldValueDuplicate": "FieldValueDuplicate",

    /**
     * value: "FieldValueForbidden"
     * @const
     */
    "FieldValueForbidden": "FieldValueForbidden",

    /**
     * value: "FieldValueInvalid"
     * @const
     */
    "FieldValueInvalid": "FieldValueInvalid",

    /**
     * value: "FieldValueRequired"
     * @const
     */
    "FieldValueRequired": "FieldValueRequired"
};



export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule;

