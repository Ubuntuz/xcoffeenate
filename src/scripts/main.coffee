window.xkr = do ($) ->

	staticData: ->
		# Environmentals
		xkr.randCoeff = 0.6
		xkr.randOffset = 0.6
		xkr.relCoeff = 0.03
		xkr.skillCoeff = 0.3

	getOrganizerData: ->
		# Track chars
		xkr.trackRecord = $('input.track-record').val() # Miliseconds
		xkr.trackVariance = $('input.track-variance').val() # 1-100, one decimal
		xkr.trackAcc = $('input.track-acc').val() # 0-10, one decimal
		xkr.trackCor = $('input.track-cor').val() # 0-10, one decimal

	getUserData: ->
		# User inputs
		xkr.userRel = $('input.user-rel').val() # 0-10, one decimal
		xkr.userAcc = $('input.user-acc').val() # 0-10, one decimal
		xkr.userCor = $('input.user-cor').val() # 0-10, one decimal

	simulate: ->

		i = 0
		max = 10000
		while i < max
			rand = Math.random() * (1 - 0.1) + 0.1
			pow1 = rand * xkr.randCoeff + xkr.randOffset
			pow2 = xkr.skillCoeff * (xkr.userAcc * xkr.trackAcc + xkr.userCor * xkr.trackCor) / (xkr.trackAcc + xkr.trackCor)
			lapTime = xkr.trackRecord + xkr.trackVariance * pow1 ** pow2
			
			$('.sims').prepend(lapTime + '<br>')
			
			i++

	triggerSims: ->
		$('button.trigger-sims').click ->
			xkr.staticData()
			xkr.getOrganizerData()
			xkr.getUserData()
			xkr.simulate()

$ ->
	xkr.triggerSims()