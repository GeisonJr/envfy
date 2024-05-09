import * as envfy from '../../src/index'

envfy.config('./tests/string')

describe('String environment strict', () => {
	test('Value without quotes and without spaces', () => {
		expect(envfy.string('VAR_1')).toBe('VALUE_1')
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.string('VAR_2')).toBe('VALUE_2')
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.string('VAR_3')).toBe('VALUE_3')
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.string('VAR_4')).toBe('VALUE_4')
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.string('VAR_5')).toBe('VALUE_5')
	})
})

describe('String environment not strict', () => {
	test('Invalid Value', () => {
		expect(envfy.string('VAR_X')).toBe('')
	})
})

describe('String environment strict with default value', () => {
	test('Invalid value', () => {
		expect(envfy.string('VAR_X', 'VALUE_X')).toBe('VALUE_X')
	})
})
