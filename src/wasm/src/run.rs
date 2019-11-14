#[no_mangle]


pub fn run(base: f64) -> f64 {
	let total: f64 = base.powf(7.0) as f64;
	let mut count: f64 = 0.0;
	let mut result: f64 = 0.0;
	loop {
		if count == total {
			break;
		}
		result += count.tan() * count.atan();
		count += 1.0;
	}
	return result;
}