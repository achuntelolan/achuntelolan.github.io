<script>
// JAVAscript Program to generate random alphabets
let MAX = 26;

// Returns a String of random alphabets of
// length n.
function printRandomString(n)
{
	let alphabet = ['BLUE RED', 'BLUE GREEN', 'RED', 'GREEN',];

	let res = "";
	for (let i = 0; i < n; i++)
	{
		res = res + alphabet[Math.floor(Math.random() * 10) % MAX];
	}

	return res;
}

// Driver code
let n = 10;
document.write(printRandomString(n));

// This code is contributed by gfgking.
</script>
