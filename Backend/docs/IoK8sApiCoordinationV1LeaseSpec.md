# Kubernetes.IoK8sApiCoordinationV1LeaseSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquireTime** | **Date** | MicroTime is version of Time with microsecond level precision. | [optional] 
**holderIdentity** | **String** | holderIdentity contains the identity of the holder of a current lease. | [optional] 
**leaseDurationSeconds** | **Number** | leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed renewTime. | [optional] 
**leaseTransitions** | **Number** | leaseTransitions is the number of transitions of a lease between holders. | [optional] 
**renewTime** | **Date** | MicroTime is version of Time with microsecond level precision. | [optional] 


