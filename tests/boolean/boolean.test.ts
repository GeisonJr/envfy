import * as envfy from '../../src/index'

envfy.config('./tests/boolean')

describe('Boolean environment strict withou default value', () => {
	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_1')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_2')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_3')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_4')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_5')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_6')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_7')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_8')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_9')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_10')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_11')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_12')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_13')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_14')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_15')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_16')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_17')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_18')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_19')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_20')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_21')).toBe(true)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_22')).toBe(true)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_23')).toBe(true)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_24')).toBe(true)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_25')).toBe(true)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_26')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_27')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_28')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_29')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_30')).toBe(false)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_31')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_32')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_33')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_34')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_35')).toBe(false)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_36')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_37')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_38')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_39')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_40')).toBe(false)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_41')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_42')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_43')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_44')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_45')).toBe(false)
	})

	test('Value without quotes and without spaces', () => {
		expect(envfy.boolean('VAR_46')).toBe(false)
	})
	test('Value with quotes and without spaces', () => {
		expect(envfy.boolean('VAR_47')).toBe(false)
	})
	test('Value without quotes and with spaces', () => {
		expect(envfy.boolean('VAR_48')).toBe(false)
	})
	test('Value with quotes and with spaces', () => {
		expect(envfy.boolean('VAR_49')).toBe(false)
	})
	test('Value with quotes and with spaces and spaces in the value', () => {
		expect(envfy.boolean('VAR_50')).toBe(false)
	})
	// test('Invalid value', () => {
	// 	expect(envfy.boolean('VAR_X')).toThrow()
	// })
	// test('Missing value', () => {
	// 	expect(envfy.boolean('VAR_Y')).toThrow()
	// })
})

describe('Boolean environment not strict without default value', () => {
	test('Invalid value', () => {
		expect(envfy.boolean('VAR_X')).toBe(false)
	})
	test('Missing value', () => {
		expect(envfy.boolean('VAR_Y')).toBe(false)
	})
})

describe('Boolean environment not strict with default value', () => {
	test('Invalid value', () => {
		expect(envfy.boolean('VAR_X', true)).toBe(false)
	})
	test('Missing value', () => {
		expect(envfy.boolean('VAR_Y', true)).toBe(true)
	})
})
