# Environmentals
randCoeff = 0.6
randOffset = 0.6
relCoeff = 0.03
skillCoeff = 0.3

# Track chars
trackRecord = prompt('Track Record')
trackVariance = prompt('Track Variance')
trackAcc = prompt('Track Acceleration')

# User inputs
userRel = prompt('Car Reliability')
userAcc = prompt('Car Acceleration')
userCor = prompt('Car Cornering')

# Generate a lap time
# The 1 after math.pow needs to be changed to a random number between 0.1 and 1
pow1 = 1 * randCoeff + randOffset
pow2 = skillCoeff * (acceleration * trackAcceleration + cornering * trackCornering) / (trackAcceleration + trackCornering)
lapTime = lapRecord + lapVariance * pow1 ** pow2