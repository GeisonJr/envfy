import { createEnvs } from '../../src/index'

describe('Number environment strict', () => {
	const envs = createEnvs({
		config: true,
		strict: true,
		path: './tests/number',
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.number('VAR_1')).toBe(123456.789)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.number('VAR_2')).toBe(123456.789)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.number('VAR_3')).toBe(123456.789)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.number('VAR_4')).toBe(123456.789)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.number('VAR_5')).toBe(123456.789)
	})
})

describe('Number environment not strict', () => {
	const envs = createEnvs({
		config: true,
		strict: false,
		path: './tests/number',
	})

	test('Invalid value', () => {
		expect(envs.number('VAR_X')).toBe(0)
	})
	test('Missing value', () => {
		expect(envs.number('VAR_Y')).toBe(0)
	})
})

describe('Number environment strict with default value', () => {
	const envs = createEnvs({
		config: true,
		strict: true,
		path: './tests/number',
	})

	test('Invalid value', () => {
		expect(envs.number('VAR_X', 123456.789)).toBe(123456.789)
	})
	test('Missing value', () => {
		expect(envs.number('VAR_Y', 123456.789)).toBe(123456.789)
	})
})
