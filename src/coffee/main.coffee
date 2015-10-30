# Environmentals
randCoeff = 0.6
randOffset = 0.6
relCoeff = 0.03
skillCoeff = 0.3

# Track chars
trackRecord = prompt('Track Record') # Miliseconds
trackVariance = prompt('Track Variance') # 1-100, one decimal
trackAcc = prompt('Track Acceleration') # 0-10, one decimal
trackCor = prompt('Track Cornering') # 0-10, one decimal

# User inputs
userRel = prompt('Car Reliability') # 0-10, one decimal
userAcc = prompt('Car Acceleration') # 0-10, one decimal
userCor = prompt('Car Cornering') # 0-10, one decimal

# Generate a lap time
rand = Math.random() * (1 - 0.1) + 0.1
pow1 = rand * randCoeff + randOffset
pow2 = skillCoeff * (userAcc * trackAcc + userCor * trackCor) / (trackAcc + trackCor)
lapTime = trackRecord + trackVariance * pow1 ** pow2

console.log 'Rand', rand
console.log 'lapTime', lapTime
console.log 'lapTimePy', lapTimePy