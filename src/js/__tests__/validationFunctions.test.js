import startValide, { chekPlaymentSystem, chekNumberValidity } from '../validationFunctions';

test.each([
	{desc: 'playmentSystem is mir', input: '2', expected: 'mir'},
	{desc: 'playmentSystem is visa', input: '4', expected: 'visa'},
	{desc: 'playmentSystem is master', input: '5', expected: 'master'},
	{desc: 'playmentSystem is maestro', input: '6', expected: 'maestro'},
	{desc: 'playmentSystem is unknown', input: '9', expected: 'unknown'},
])((`test $desc`), ({ input, expected }) => {
	const received = chekPlaymentSystem(input);
	expect(received).toBe(expected);
})

test.each([
	{desc: 'even length and correct number', input: 2222333344445559, expected: true},
	{desc: 'even length and unCorrect number', input: 2222333344445557, expected: false},
	{desc: 'nonEven length and correct number', input: 55558, expected: true},
	{desc: 'nonEven length and unCorrect number', input: 55557, expected: false},
])((`test $desc`), ({ input, expected }) => {
	const received = chekNumberValidity(input);
	expect(received).toBe(expected);
})

