import { createEnvs } from '../../src/index'

describe('String environment strict', () => {
	const envs = createEnvs({
		config: true,
		strict: true,
		path: './tests/string',
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.string('VAR_1')).toBe('VALUE_1')
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.string('VAR_2')).toBe('VALUE_2')
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.string('VAR_3')).toBe('VALUE_3')
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.string('VAR_4')).toBe('VALUE_4')
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.string('VAR_5')).toBe(' VALUE_5 ')
	})
})

describe('String environment not strict', () => {
	const envs = createEnvs({
		config: true,
		strict: false,
		path: './tests/string',
	})

	test('Invalid Value', () => {
		expect(envs.string('VAR_X')).toBe('')
	})
})

describe('String environment strict with default value', () => {
	const envs = createEnvs({
		config: true,
		strict: true,
		path: './tests/string',
	})

	test('Invalid value', () => {
		expect(envs.string('VAR_X', 'VALUE_X')).toBe('VALUE_X')
	})
})
