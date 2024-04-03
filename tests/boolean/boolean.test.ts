import { createEnvs } from '../../src/index'

describe('Boolean environment strict withou default value', () => {
	const envs = createEnvs({
		config: true,
		strict: true,
		path: './tests/boolean',
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_1')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_2')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_3')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_4')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_5')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_6')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_7')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_8')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_9')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_10')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_11')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_12')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_13')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_14')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_15')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_16')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_17')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_18')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_19')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_20')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_21')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_22')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_23')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_24')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_25')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_26')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_27')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_28')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_29')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_30')).toBe(false)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_31')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_32')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_33')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_34')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_35')).toBe(false)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_36')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_37')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_38')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_39')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_40')).toBe(false)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_41')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_42')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_43')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_44')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_45')).toBe(false)
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.boolean('VAR_46')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envs.boolean('VAR_47')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envs.boolean('VAR_48')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envs.boolean('VAR_49')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envs.boolean('VAR_50')).toBe(false)
	})
	// test('Invalid value', () => {
	// 	expect(envs.boolean('VAR_X')).toThrow()
	// })
	// test('Missing value', () => {
	// 	expect(envs.boolean('VAR_Y')).toThrow()
	// })
})

describe('Boolean environment not strict without default value', () => {
	const envs = createEnvs({
		config: true,
		strict: false,
		path: './tests/boolean',
	})

	test('Invalid value', () => {
		expect(envs.boolean('VAR_X')).toBe(false)
	})
	test('Missing value', () => {
		expect(envs.boolean('VAR_Y')).toBe(false)
	})
})

describe('Boolean environment not strict with default value', () => {
	const envs = createEnvs({
		config: true,
		strict: false,
		path: './tests/boolean',
	})

	test('Invalid value', () => {
		expect(envs.boolean('VAR_X', true)).toBe(true)
	})
	test('Missing value', () => {
		expect(envs.boolean('VAR_Y', true)).toBe(true)
	})
})
