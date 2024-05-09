import * as envfy from '../../src/index'

envfy.config('./tests/number')

describe('Number environment', () => {
	test('Value without quotes and without spaces', () => {
		expect(envfy.number('VAR_1')).toBe(123456.789)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.number('VAR_2')).toBe(123456.789)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.number('VAR_3')).toBe(123456.789)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.number('VAR_4')).toBe(123456.789)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.number('VAR_5')).toBe(123456.789)
	})
})

describe('Number environment with default value', () => {
	test('Invalid value', () => {
		expect(envfy.number('VAR_X', 123456.789)).toBe(Number.NaN)
	})
	test('Missing value', () => {
		expect(envfy.number('VAR_Y', 123456.789)).toBe(123456.789)
	})
})
