import math
#idk
randCoeff = 0.6
randOffset = 0.6
reliabilityCoeff = 0.03
skillCoeff = 0.3

#Track Inputs (currently set to default values)
lapRecord = input("Lap Record:")
lapVariance = input("Lap Variance:")
trackAcceleration = input("Track Acceleration:")
trackCornering = input("Track Cornering:")

#User Inputs
reliability = input("Car Reliability:")
acceleration = input("Car Acceleration:")
cornering = input("Car Cornering:")

#the 1 after math.pow needs to be changed to a random number between 0.1 and 1
lapTime = lapRecord + lapVariance * math.pow(1 * randCoeff + randOffset, skillCoeff * (acceleration * trackAcceleration + cornering * trackCornering) / (trackAcceleration + trackCornering));

