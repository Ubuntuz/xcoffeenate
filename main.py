import math
#idk
randCoeff = 0.6
randOffset = 0.6
reliabilityCoeff = 0.03
skillCoeff = 0.3

#Track Inputs (currently set to default values)
lapRecord = 90
lapVariance = 15
trackAcceleration = 5
trackCornering = 5

#User Inputs
reliability = 5
acceleration = 5
cornering = 5

lapTime = lapRecord + lapVariance * math.pow(1 * randCoeff + randOffset, skillCoeff * (acceleration * trackAcceleration + cornering * trackCornering) / (trackAcceleration + trackCornering));

