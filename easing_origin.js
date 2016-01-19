var Cubiq_out = function(t, b, c, d) {
    t %= d
	t = t - 1
	return c*(t*t*t + 1) + b
}
	