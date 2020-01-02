#[macro_use]
extern crate cfg_if;
extern crate js_sys;
extern crate wasm_bindgen;
extern crate web_sys;
use wasm_bindgen::prelude::*;

cfg_if! {
	// When the `console_error_panic_hook` feature is enabled, we can call the
	// `set_panic_hook` function to get better error messages if we ever panic.
	if #[cfg(feature = "console_error_panic_hook")] {
		extern crate console_error_panic_hook;
		use console_error_panic_hook::set_once as set_panic_hook;
	} else {
		#[inline]
		fn set_panic_hook() {}
	}
}

#[wasm_bindgen]
pub fn run(base: i32) -> f64 {
	let total: i32 = base.pow(7) as i32;
	let mut result: f64 = 0.0;
	for i in 0..total {
		let x = i as f64;
		result += x.atan() * x.tan();
	}
	return result;
}
