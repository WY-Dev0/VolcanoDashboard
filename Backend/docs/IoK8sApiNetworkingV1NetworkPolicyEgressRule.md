# Kubernetes.IoK8sApiNetworkingV1NetworkPolicyEgressRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ports** | [**[IoK8sApiNetworkingV1NetworkPolicyPort]**](IoK8sApiNetworkingV1NetworkPolicyPort.md) | ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. | [optional] 
**to** | [**[IoK8sApiNetworkingV1NetworkPolicyPeer]**](IoK8sApiNetworkingV1NetworkPolicyPeer.md) | to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list. | [optional] 

